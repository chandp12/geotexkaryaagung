import type { ImageMetadata } from 'astro';

export interface Produk {
  slug: string;
  nama: string;
  icon: string;
  singkat: string;
  deskripsi: string[];
  fungsi: string[];
  aplikasi: string[];
  keunggulan: string[];
  spesifikasi: { label: string; nilai: string }[];
  keywordUtama: string;
  keywordPendukung: string[];
  seoTitle: string;
  seoDesc: string;
  terkait: string[];
  jenis?: { judul: string; teks: string }[];
}

export interface Proyek {
  slug: string;
  nama: string;
  deskripsi: string;
  lokasi?: string;
  tahun?: string;
  produk?: string[];
  foto: ImageMetadata[];
}

export interface Artikel {
  slug: string;
  judul: string;
  ringkasan: string;
  isiHtml: string;
  tanggal: string; // ISO
  kategori: string;
  gambar?: ImageMetadata;
  fotoNo?: number;
  produkTerkait?: string[];
}
