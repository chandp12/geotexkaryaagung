import type { ImageMetadata } from 'astro';

type Mod = { default: ImageMetadata };
const semua = import.meta.glob<Mod>('/src/assets/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', { eager: true });

const entries = Object.entries(semua)
  .map(([p, m]) => [p, m.default] as const)
  .sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true }));

const urutanProduk = ['drainase-cell', 'geocell', 'geocomposite', 'geogrid', 'geomat', 'geomembran', 'geopipe', 'non-woven', 'woven'];

/** Semua foto di satu folder, urut nama file. */
export function folderImages(folder: string): ImageMetadata[] {
  return entries.filter(([p]) => p.startsWith(`/src/assets/${folder}/`)).map(([, m]) => m);
}
export const productImages = (slug: string) => folderImages(`produk/${slug}`);

/** Kumpulan semua foto produk, bergantian antar produk (foto 1 tiap produk, lalu foto 2, dst). */
let _pool: ImageMetadata[] | undefined;
export function pool(): ImageMetadata[] {
  if (_pool) return _pool;
  const per = urutanProduk.map(productImages);
  const maks = Math.max(0, ...per.map((x) => x.length));
  _pool = [];
  for (let r = 0; r < maks; r++) for (const list of per) if (list[r]) _pool.push(list[r]);
  return _pool;
}

/**
 * Ambil foto slot `folder/NN.ext`. Jika file belum ada, otomatis pakai foto produk
 * (urutan `cadangan`) supaya halaman tidak pernah kosong. Isi slot dengan file sendiri untuk menggantinya.
 */
export function foto(folder: string, no: number, cadangan?: number): ImageMetadata | undefined {
  const nn = String(no).padStart(2, '0');
  const hit = entries.find(([p]) => p.startsWith(`/src/assets/${folder}/${nn}.`));
  if (hit) return hit[1];
  if (cadangan !== undefined) {
    const p = pool();
    if (p.length) return p[((cadangan % p.length) + p.length) % p.length];
  }
  return undefined;
}
export const fotoSet = (folder: string, jumlah: number, cadanganAwal: number) =>
  Array.from({ length: jumlah }, (_, i) => foto(folder, i + 1, cadanganAwal + i));

/** Foto latar hero tiap halaman: hero/01 beranda, 02 tentang, 03 produk, 04 layanan, 05 proyek, 06 artikel, 07 kontak */
export const hero = (no: number) => foto('hero', no, no * 5 + 1);
