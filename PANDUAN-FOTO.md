# Panduan memasukkan foto

Semua foto diletakkan di `src/assets/`. Aturannya hanya dua:
1. Nama file **dua angka**: `01.jpg`, `02.jpg`, `03.jpg` dst (bukan `1.jpg`).
2. Letakkan di folder yang sesuai tabel di bawah, lalu simpan. Di `npm run dev` foto langsung berubah.

Format boleh JPG, PNG, atau WebP. Situs otomatis membuat versi WebP yang ringan.

## A. Foto produk (wajib, dari folder Google Drive Anda)
Folder Drive -> folder proyek. Unduh semua foto, ganti nama jadi 01.jpg, 02.jpg, ... (jumlah bebas).
Foto **01** = foto utama (thumbnail kartu dan hero). Pilih foto terbaik sebagai 01.

| Folder Drive | Folder proyek |
|---|---|
| drainase cell | `src/assets/produk/drainase-cell/` |
| GEOCELL | `src/assets/produk/geocell/` |
| geocomposite | `src/assets/produk/geocomposite/` |
| geogrid | `src/assets/produk/geogrid/` |
| Geomat | `src/assets/produk/geomat/` |
| Geomembran | `src/assets/produk/geomembran/` |
| GEOPIPE | `src/assets/produk/geopipe/` |
| NON WOVEN | `src/assets/produk/non-woven/` |
| WOVEN | `src/assets/produk/woven/` |

## B. Foto halaman (opsional, tapi sangat disarankan)
Jika slot kosong, situs otomatis memakai foto produk Anda sebagai cadangan, jadi halaman tidak pernah kosong.
Isi slot ini dengan foto pilihan Anda dari Drive untuk mengganti cadangan itu.

| Folder | Isi | Jumlah | Dipakai di |
|---|---|---|---|
| `hero/` | **Latar bagian atas tiap halaman**, foto lebar (landscape) | 7 | 01 Beranda, 02 Tentang Kami, 03 Produk, 04 Layanan, 05 Proyek, 06 Artikel, 07 Kontak |
| `beranda/` | Kolase perkenalan (01-03), foto samping keunggulan (04) | 4 | Beranda |
| `tentang/` | Foto profil (01-02), sejarah (03), strip bawah (04-07) | 7 | Tentang Kami |
| `produk-intro/` | Dua foto pengantar katalog | 2 | Halaman Produk |
| `layanan/` | Satu foto per layanan | 4 | Layanan |
| `aplikasi/` | Foto bidang aplikasi: 01 jalan, 02 lereng, 03 drainase, 04 kolam/tambak, 05 timbunan, 06 bendungan/sungai | 6 | Beranda, Layanan, Proyek |
| `proyek/` | Galeri dokumentasi | 12 | Proyek, Beranda |
| `artikel/` | Sampul 6 artikel (urutan sesuai artikel) | 6 | Artikel |
| `kontak/` | Foto samping daftar info konsultasi | 1 | Kontak |
| `cta/` | Foto di kotak ajakan sebelum footer | 1 | Semua halaman |

Tips: foto hero sebaiknya berbeda satu sama lain. Foto bawaan HP (4-5 MB) boleh dipakai, tetapi build menjadi lebih lama.
Perkecil ke lebar sekitar 2000 px lewat squoosh.app bila ingin proses build lebih cepat.

## C. Saat `npm run dev`
Slot yang masih kosong menampilkan blok biru berpola. Saat `npm run build` (produksi), blok kosong tampil tanpa tulisan.
Pastikan semua slot penting terisi sebelum rilis.
