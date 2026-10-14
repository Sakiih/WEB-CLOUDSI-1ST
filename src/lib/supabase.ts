/**
 * src/lib/supabase.ts
 * Supabase client setup dan typed query functions untuk Cloudsi Connect
 * Menggunakan import.meta.env (Astro) untuk environment variables
 * Dependencies: @supabase/supabase-js, src/types/index.ts
 */

import { createClient } from '@supabase/supabase-js';
import type { Member, Event, TimelineEntry, GalleryImage } from '../types/index';

/* ============================================
   SUPABASE CLIENT
   Environment variables dari .env (TIDAK di-commit)
   ============================================ */
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

const isMissing = !supabaseUrl || !supabaseAnonKey;

if (isMissing) {
  console.warn(
    '[Cloudsi] SUPABASE_URL atau SUPABASE_ANON_KEY belum diatur. ' +
    'Data akan menggunakan array kosong. Pastikan file .env sudah dikonfigurasi.'
  );
}

// Hanya buat client sungguhan jika env vars tersedia
// Jika tidak, fungsi query di bawah akan langsung return []
export const supabase = isMissing
  ? (null as unknown as ReturnType<typeof createClient>)
  : createClient(supabaseUrl, supabaseAnonKey);

/* ============================================
   TYPED QUERY FUNCTIONS
   Semua query mengembalikan array kosong jika error
   ============================================ */

/**
 * Ambil semua anggota yang visible
 * Urutan: role priority (Ketua → Anggota), lalu alphabetical by full_name
 */
export async function getMembers(): Promise<Member[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('members')
    .select('*')
    .eq('is_visible', true)
    .order('role', { ascending: true })
    .order('full_name', { ascending: true });

  if (error) {
    console.error('[Cloudsi] Error fetching members:', error.message);
    return [];
  }

  return (data as Member[]) ?? [];
}

/**
 * Ambil semua event, terbaru di atas
 */
export async function getEvents(): Promise<Event[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error('[Cloudsi] Error fetching events:', error.message);
    return [];
  }

  return (data as Event[]) ?? [];
}

/**
 * Ambil timeline entries, urut berdasarkan order_index
 */
export async function getTimeline(): Promise<TimelineEntry[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('timeline')
    .select('*')
    .order('order_index', { ascending: true });

  if (error) {
    console.error('[Cloudsi] Error fetching timeline:', error.message);
    return [];
  }

  return (data as TimelineEntry[]) ?? [];
}

/**
 * Ambil gambar galeri berdasarkan event_id
 */
export async function getGallery(eventId: string): Promise<GalleryImage[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('gallery')
    .select('*')
    .eq('event_id', eventId);

  if (error) {
    console.error('[Cloudsi] Error fetching gallery:', error.message);
    return [];
  }

  return (data as GalleryImage[]) ?? [];
}
