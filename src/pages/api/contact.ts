import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // 1. Ambil data JSON form
    const body = await request.json();
    const { name, email, message, website } = body;

    // 2. Honeypot check (Bot Trap)
    // Jika field website terisi, otomatis kita kembalikan respon sukses secara diam-diam
    if (website && website.trim() !== '') {
      console.warn(`[Bot trap] Bot detected from IP: ${clientAddress}`);
      return new Response(JSON.stringify({
        success: true,
        message: 'Pesan terkirim!' // Silent reject
      }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    // 3. Validasi Server-side (tidak percaya client)
    if (!name || name.trim().length < 2) {
      return new Response(JSON.stringify({ success: false, message: 'Nama minimal 2 karakter.' }), { status: 400 });
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ success: false, message: 'Email tidak valid.' }), { status: 400 });
    }
    if (!message || message.trim().length < 10 || message.trim().length > 500) {
      return new Response(JSON.stringify({ success: false, message: 'Pesan harus antara 10 - 500 karakter.' }), { status: 400 });
    }

    // 4. Rate Limiting via Supabase (Max 3 / Jam)
    // Client IP bisa didapat dari x-forwarded-for di Vercel atau clientAddress default Astro
    const ip = request.headers.get('x-forwarded-for') || clientAddress || 'unknown';
    
    // Hitung riwayat pengiriman 1 jam terakhir
    const oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);
    
    const { count, error: countError } = await supabase
      .from('contact_logs')
      .select('id', { count: 'exact' })
      .eq('ip_address', ip)
      .gte('created_at', oneHourAgo.toISOString());

    if (countError) {
      console.error('[RateLimit] Supabase Error:', countError.message);
      // Kita lanjutkan eksekusi jika tabel belum ada atau error server
    } else if (count !== null && count >= 3) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Terlalu banyak permintaan. Coba lagi dalam 1 jam.' 
      }), { status: 429 });
    }

    // 5. Catat ke tabel logs
    const { error: insertError } = await supabase
      .from('contact_logs')
      .insert([{ ip_address: ip }]);
      
    if (insertError) {
       console.error('[RateLimit] Gagal mencatat log:', insertError.message);
    }

    // 6. Integrasi Email via Resend (Simulasi atau Real fetch)
    const adminEmail = import.meta.env.ADMIN_EMAIL || 'admin@cloudsi.com';
    const resendApiKey = import.meta.env.RESEND_API_KEY;

    if (resendApiKey) {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: 'Cloudsi Connect <onboarding@resend.dev>',
          to: adminEmail,
          subject: `Pesan Kontak Baru dari ${name}`,
          html: `
            <h3>Pesan Baru dari Cloudsi Connect Kontak</h3>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Pesan:</strong></p>
            <p>${message}</p>
          `
        })
      });

      if (!resendRes.ok) {
         console.error('Gagal mengirim email via Resend.');
      }
    } else {
      console.log(`[Email Mock] Akan dikirim ke ${adminEmail} dari ${name} (${email}): ${message}`);
    }

    // Berhasil
    return new Response(JSON.stringify({
      success: true,
      message: 'Pesan berhasil terkirim!'
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (error) {
    console.error('API Contact Error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Terjadi kesalahan sistem.' 
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
