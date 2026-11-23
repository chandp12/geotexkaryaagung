/*
 * Lapisan data. Semua halaman mengambil konten lewat fungsi di file ini.
 * Tahap WordPress: isi fungsi-fungsi ini dengan pemanggilan REST API
 * tanpa mengubah halaman satu per satu.
 */
import { produk } from '../data/produk';
import { proyek } from '../data/proyek';
import { artikel } from '../data/artikel';
import { foto } from './images';
import type { Artikel, Produk, Proyek } from '../types';

export async function getProducts(): Promise<Produk[]> { return produk; }
export async function getProduct(slug: string): Promise<Produk | undefined> { return produk.find((p) => p.slug === slug); }
export async function getProjects(): Promise<Proyek[]> { return proyek; }
export async function getArticles(): Promise<Artikel[]> {
  return [...artikel]
    .map((a) => ({ ...a, gambar: a.gambar ?? (a.fotoNo ? foto('artikel', a.fotoNo, 40 + a.fotoNo * 3) : undefined) }))
    .sort((a, b) => b.tanggal.localeCompare(a.tanggal));
}
