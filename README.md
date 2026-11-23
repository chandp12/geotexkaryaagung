# Geotex Karya Agung: Website Company Profile (Astro)

Tahap 1: situs statis berbasis **Astro + TypeScript + Tailwind CSS 4**. Tahap 2 (WordPress Headless) disiapkan lewat lapisan data `src/lib/content.ts`.

## Persyaratan
- Node.js 20 LTS atau 22 LTS (https://nodejs.org)
- VS Code

## Menjalankan di komputer
```bash
npm install
npm run dev       # buka http://localhost:4321
npm run build     # hasil ada di folder dist/
npm run preview   # cek hasil build
```

## Foto
Lihat **PANDUAN-FOTO.md** untuk semua folder dan penamaan (01.jpg, 02.jpg, ...).

## Menambah foto produk (tanpa batas jumlah)
Taruh foto di `src/assets/produk/<slug>/`, contoh `src/assets/produk/geogrid/01.jpg`, `02.jpg`, dst.
- Urutan mengikuti nama file; **foto pertama = foto utama** (thumbnail + hero).
- Format JPG/PNG/WebP/AVIF. Astro otomatis membuat WebP berukuran pas.
- Foto hero beranda (opsional): `src/assets/hero/`. Tanpa foto, beranda menampilkan indeks kategori.
- Slug: drainase-cell, geocell, geocomposite, geogrid, geomat, geomembran, geopipe, non-woven, woven.

## Mengubah konten
| Yang diubah | File |
|---|---|
| Nomor WA, email, alamat, link Google Maps | `src/data/site.ts` |
| Teks produk, SEO tiap produk, spesifikasi | `src/data/produk.ts` |
| Profil, keunggulan, layanan, aplikasi | `src/data/konten.ts` |
| Proyek | `src/data/proyek.ts` |
| Warna | `src/styles/global.css` (bagian `@theme`) |

Catatan: deskripsi produk bersifat umum dan belum berisi spesifikasi. Periksa ulang bersama pemilik perusahaan sebelum rilis. Kolom `spesifikasi` sengaja kosong sampai ada data resmi.

## Google Maps
Di Google Maps: Bagikan, Sematkan peta, salin HTML. Ambil **hanya isi `src="..."`** dan tempel ke `mapsEmbed` di `src/data/site.ts`.

## SEO yang sudah ada
Title/description unik per halaman, canonical, Open Graph, JSON-LD (Organization, BreadcrumbList, Article), sitemap (`/sitemap-index.xml`), `robots.txt`, breadcrumb, `lang="id"`. Google Analytics 4: isi `PUBLIC_GA_ID` di `.env`.

## Deploy
Situs ini statis. Jalankan `npm run build`, lalu unggah isi folder `dist/` ke `public_html` di Hostinger (File Manager atau FTP).
Otomatis lewat GitHub: lihat `.github/workflows/deploy.yml` (butuh secret FTP_SERVER, FTP_USERNAME, FTP_PASSWORD, FTP_DIR).

## Tahap 2: WordPress Headless
Belum dikerjakan. Titik sambungnya: ganti isi fungsi di `src/lib/content.ts` dengan pemanggilan REST API. Jangan pernah memakai prefix `PUBLIC_` untuk password atau secret.
