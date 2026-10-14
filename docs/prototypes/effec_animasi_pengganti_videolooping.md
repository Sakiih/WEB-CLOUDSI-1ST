<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sea of Clouds at Night</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { 
            width: 100%; 
            height: 100%; 
            overflow: hidden; 
            background: #020408; /* Warna dasar malam kosmik pekat */
            cursor: crosshair; 
        }
        #cloud-canvas {
            display: block;
            width: 100vw;
            height: 100vh;
        }
    </style>
</head>
<body>

    <canvas id="cloud-canvas"></canvas>

    <script>
        /* =================================================================
           ✨ SEA OF CLOUDS - POV DEKAT ✨
           - Bulan Dihilangkan.
           - Kepadatan dan jumlah awan diperbanyak drastis.
           - Efek kamera terbang di atas awan.
           ================================================================= */

        const canvas = document.getElementById('cloud-canvas');
        const gl = canvas.getContext('webgl');

        if (!gl) { alert("Browser Anda tidak mendukung WebGL."); }

        // 1. VERTEX SHADER
        const vertexShaderSource = `
            attribute vec2 a_position;
            void main() {
                gl_Position = vec4(a_position, 0.0, 1.0);
            }
        `;

        // 2. FRAGMENT SHADER
        const fragmentShaderSource = `
            precision highp float;

            uniform vec2 u_resolution;
            uniform float u_time;

            // ==========================================
            // FUNGSI NOISE & ACAK
            // ==========================================
            
            float hash(vec2 p) {
                p = fract(p * vec2(234.34, 435.345));
                p += dot(p, p + 34.23);
                return fract(p.x * p.y);
            }

            float noise(vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                vec2 u = f * f * (3.0 - 2.0 * f); 
                return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                           mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
            }

            // FBM Dasar
            float fbm(vec2 p) {
                float v = 0.0;
                float a = 0.5;
                mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
                for (int i = 0; i < 5; i++) {
                    v += a * noise(p);
                    p = rot * p * 2.0 + vec2(100.0);
                    a *= 0.5;
                }
                return v;
            }

            // ==========================================
            // ENGINE AWAN (DIPERBANYAK & EFEK TERBANG)
            // ==========================================
            
            vec4 renderCloud(vec2 uv, float scale, float speed, float time, float densityMin, float densityMax, vec2 lightDir) {
                vec2 pos = uv * scale;
                
                // EFEK ANGIN: Awan bergerak secara horizontal ke arah kiri
                pos.x += time * speed * 2.5; 
                pos.y += time * speed * 0.1; // Sedikit pergerakan vertikal agar awan tidak kaku
                
                vec2 q = vec2(fbm(pos + time * 0.01), fbm(pos + vec2(5.2, 1.3) - time * 0.01));
                vec2 r = vec2(fbm(pos + 0.3 * q + time * 0.015), fbm(pos + 0.3 * q + vec2(4.1, 1.9) + time * 0.015));
                
                float cloudVal = fbm(pos + 0.6 * r);
                
                float alpha = smoothstep(densityMin, densityMax, cloudVal);
                
                // Cahaya dari bintang (Rim Light lebih tipis karena tidak ada bulan)
                float lightSample = fbm(pos + 0.6 * r + lightDir * 0.1); 
                float rimLight = clamp(cloudVal - lightSample, 0.0, 1.0);
                rimLight = smoothstep(0.0, 0.4, rimLight);
                
                float shadow = smoothstep(densityMin, densityMax * 1.2, cloudVal);
                
                // Warna Awan Pekat Malam Hari
                vec3 cDark = vec3(0.03, 0.05, 0.09); 
                vec3 cMid = vec3(0.10, 0.14, 0.20);  
                vec3 cLight = vec3(0.35, 0.45, 0.55); // Biru pucat cahaya bintang
                
                vec3 color = mix(cDark, cMid, shadow);
                color = mix(color, cLight, rimLight * 0.8); 
                
                return vec4(color, alpha);
            }

            // ==========================================
            // MAIN RENDER LOOP
            // ==========================================
            void main() {
                vec2 uvOrig = gl_FragCoord.xy / u_resolution.xy;
                vec2 p = uvOrig * 2.0 - 1.0;
                p.x *= u_resolution.x / u_resolution.y; 

                // Cahaya kosmik (bintang/galaksi) turun dari atas
                vec2 lightDir = normalize(vec2(0.2, 1.0));

                // 1. LANGIT MALAM (Lebih gelap dan misterius)
                vec3 skyBase = mix(vec3(0.02, 0.03, 0.06), vec3(0.002, 0.005, 0.01), uvOrig.y);
                vec3 finalColor = skyBase;

                // 2. BINTANG BERKEDIP (Diperbanyak karena tidak ada bulan)
                vec2 starGrid = floor(p * 120.0); 
                float starRnd = hash(starGrid);  
                
                if(starRnd > 0.92) { // 8% peluang bintang (cukup ramai)
                    float phase = hash(starGrid + vec2(13.5, 42.1)) * 6.2831; 
                    float blinkSpeed = 1.0 + hash(starGrid + vec2(73.1, 12.4)) * 2.0; 
                    
                    float twinkle = 0.3 + 0.7 * sin(u_time * blinkSpeed + phase);
                    
                    vec2 starPosWithinGrid = fract(p * 120.0) - 0.5;
                    float starGlow = exp(-length(starPosWithinGrid) * 22.0);
                    
                    finalColor += vec3(0.85, 0.9, 1.0) * starGlow * twinkle;
                }

                // 3. LAUTAN AWAN (Kepadatan ditingkatkan, POV didekatkan)
                // Kepadatan dikurangi agar awan tidak terlalu penuh, langit atas lebih terbuka
                float hBias = uvOrig.y * 0.25; 
                
                vec4 c1 = renderCloud(p, 2.5, 0.010, u_time, 0.25 + hBias, 0.8, lightDir);
                finalColor = mix(finalColor, c1.rgb, c1.a * 0.90);
                
                vec4 c2 = renderCloud(p + vec2(1.1), 1.8, 0.015, u_time, 0.30 + hBias, 0.85, lightDir);
                finalColor = mix(finalColor, c2.rgb, c2.a * 0.90);
                
                vec4 c3 = renderCloud(p + vec2(2.2), 1.2, 0.025, u_time, 0.35 + hBias, 0.9, lightDir);
                finalColor = mix(finalColor, c3.rgb, c3.a * 0.95);
                
                vec4 c4 = renderCloud(p + vec2(3.3), 0.7, 0.035, u_time, 0.40 + hBias, 0.95, lightDir);
                finalColor = mix(finalColor, c4.rgb, c4.a * 0.95);
                
                // Lapisan awan paling dekat dengan wajah/kamera
                vec4 c5 = renderCloud(p + vec2(4.4), 0.3, 0.050, u_time, 0.50 + hBias, 1.0, lightDir);
                finalColor = mix(finalColor, c5.rgb, c5.a * 0.95);

                // 4. POST-PROCESSING SEDERHANA & ELEGAN
                float vignette = length(uvOrig - 0.5);
                finalColor *= smoothstep(1.0, 0.2, vignette); // Vignette di sudut

                // Color grading agar tetap natural malam
                finalColor = (finalColor * (2.51 * finalColor + 0.03)) / (finalColor * (2.43 * finalColor + 0.59) + 0.14);

                gl_FragColor = vec4(finalColor, 1.0);
            }
        `;

        function compileShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error("SHADER ERROR: ", gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        }

        const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = new Float32Array([
            -1, -1,   1, -1,  -1,  1,
            -1,  1,   1, -1,   1,  1
        ]);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

        const posAttr = gl.getAttribLocation(program, "a_position");
        gl.enableVertexAttribArray(posAttr);
        gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

        const resUnif = gl.getUniformLocation(program, "u_resolution");
        const timeUnif = gl.getUniformLocation(program, "u_time");

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform2f(resUnif, canvas.width, canvas.height);
        }
        window.addEventListener('resize', resize);
        resize();

        let startTime = Date.now();
        function animate() {
            const elapsedTime = (Date.now() - startTime) / 1000.0;
            gl.uniform1f(timeUnif, elapsedTime);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
            requestAnimationFrame(animate);
        }
        animate();
    </script>
</body>
</html>