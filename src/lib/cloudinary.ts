/**
 * src/lib/cloudinary.ts
 * Cloudinary image URL builder dan srcset generator untuk Cloudsi Connect
 * Output format: avif (primary) dengan fallback webp
 * Dependencies: Tidak ada (pure utility functions)
 */

/* ============================================
   CLOUDINARY CONFIG
   Cloud name dari environment variable
   ============================================ */
const CLOUD_NAME = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME ?? 'demo';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/* ============================================
   TYPES
   ============================================ */
export interface ImageOptions {
  width: number;
  height?: number;
  quality?: 'auto' | number;
  format?: 'avif' | 'webp' | 'auto';
  crop?: 'fill' | 'thumb';
  gravity?: 'face' | 'center';
}

/* ============================================
   buildImageUrl
   Bangun URL Cloudinary dengan transformasi
   ============================================ */
export function buildImageUrl(publicId: string, options: ImageOptions): string {
  const {
    width,
    height,
    quality = 'auto',
    format = 'avif',
    crop = 'fill',
    gravity = 'center',
  } = options;

  const transforms: string[] = [
    `w_${width}`,
    `c_${crop}`,
    `g_${gravity}`,
    `q_${quality}`,
    `f_${format}`,
  ];

  if (height) {
    transforms.splice(1, 0, `h_${height}`);
  }

  return `${BASE_URL}/${transforms.join(',')}/${publicId}`;
}

/* ============================================
   buildSrcSet
   Menghasilkan srcset string untuk responsive images
   3 ukuran: 400w, 800w, 1200w
   Format: avif (primary), webp fallback tersedia via buildImageUrl
   ============================================ */
const SRCSET_WIDTHS = [400, 800, 1200] as const;

export function buildSrcSet(
  publicId: string,
  options?: Omit<ImageOptions, 'width'>
): string {
  return SRCSET_WIDTHS
    .map((w) => {
      const url = buildImageUrl(publicId, {
        width: w,
        format: 'avif',
        ...options,
      });
      return `${url} ${w}w`;
    })
    .join(', ');
}

/**
 * buildSrcSetWebP — fallback srcset dalam format webp
 * Digunakan di <source> element sebagai fallback
 */
export function buildSrcSetWebP(
  publicId: string,
  options?: Omit<ImageOptions, 'width'>
): string {
  return SRCSET_WIDTHS
    .map((w) => {
      const url = buildImageUrl(publicId, {
        width: w,
        format: 'webp',
        ...options,
      });
      return `${url} ${w}w`;
    })
    .join(', ');
}
