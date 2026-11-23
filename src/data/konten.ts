// Konten teks halaman. Nanti dapat dipindah ke WordPress.
export const stat = [
  { icon: 'building', angka: '2020', label: 'Tahun berdiri' },
  { icon: 'grid', angka: '9', label: 'Kategori produk' },
  { icon: 'shield-check', angka: 'HDPE · PP · PET', label: 'Bahan polimer' },
  { icon: 'message', angka: 'WhatsApp', label: 'Konsultasi langsung' },
];

export const keunggulan = [
  { icon: 'grid', judul: '9 kategori produk', teks: 'Dari geotextile hingga geomembran, tersedia dalam satu katalog.' },
  { icon: 'message', judul: 'Konsultasi langsung', teks: 'Tanyakan kebutuhan proyek Anda langsung melalui WhatsApp.' },
  { icon: 'file', judul: 'Informasi produk yang jelas', teks: 'Fungsi, aplikasi, dan keunggulan tiap produk dijelaskan di situs ini.' },
  { icon: 'shield-check', judul: 'Bahan polimer terpilih', teks: 'Produk berbahan HDPE, polypropylene, dan polyester sesuai fungsi masing-masing.' },
  { icon: 'hardhat', judul: 'Untuk beragam proyek', teks: 'Jalan, lereng, kolam, drainase, hingga lapangan olahraga.' },
  { icon: 'building', judul: 'Berdiri sejak 2020', teks: 'Fokus pada geotextile dan geosynthetic untuk kebutuhan konstruksi.' },
];

export const aplikasi = [
  { icon: 'road', judul: 'Jalan dan perkerasan', teks: 'Perkuatan tanah dasar, pemisah lapisan, jalan raya, dan jalan rel.', produk: ['Woven', 'Geogrid', 'Non Woven', 'Geopipe'] },
  { icon: 'mountain', judul: 'Lereng dan dinding penahan', teks: 'Perkuatan tanah dan pengendalian erosi pada lereng curam.', produk: ['Geogrid', 'Geocell', 'Geomat'] },
  { icon: 'droplets', judul: 'Drainase dan filtrasi', teks: 'Mengalirkan air sambil menahan butiran tanah.', produk: ['Drainase Cell', 'Geopipe', 'Geocomposite', 'Non Woven'] },
  { icon: 'shield-check', judul: 'Kolam, tambak, dan penampung', teks: 'Lapisan kedap untuk kolam ikan, tambak, embung, dan landfill.', produk: ['Geomembran'] },
  { icon: 'hardhat', judul: 'Timbunan tanah lunak', teks: 'Menyebarkan beban dan menstabilkan tanah dasar lemah.', produk: ['Woven', 'Geogrid', 'Geocomposite'] },
  { icon: 'waves', judul: 'Bendungan, sungai, dan saluran', teks: 'Perlindungan sumber daya air dari gerusan dan erosi.', produk: ['Woven', 'Geocell', 'Geomat'] },
];

export const layanan = [
  { icon: 'message', judul: 'Konsultasi kebutuhan produk', teks: 'Ceritakan kebutuhan proyek Anda melalui WhatsApp, kami bantu arahkan ke kategori produk yang sesuai.', poin: ['Sampaikan jenis proyek dan kondisi lapangan', 'Dapatkan arahan kategori produk yang sesuai', 'Komunikasi langsung melalui WhatsApp'] },
  { icon: 'grid', judul: 'Penyediaan produk geosynthetic', teks: 'Produk dari 9 kategori: Drainase Cell, GEOCELL, Geocomposite, Geogrid, Geomat, Geomembran, GEOPIPE, NON WOVEN, dan WOVEN.', poin: ['Perkuatan tanah dan lereng', 'Drainase dan filtrasi', 'Lapisan kedap air dan pengendali erosi'] },
  { icon: 'file', judul: 'Informasi dan data produk', teks: 'Penjelasan fungsi, keunggulan, dan aplikasi setiap produk, serta permintaan data teknis.', poin: ['Fungsi, keunggulan, dan aplikasi produk', 'Permintaan data teknis melalui WhatsApp', 'Perbandingan antar produk'] },
  { icon: 'clipboard', judul: 'Permintaan penawaran', teks: 'Kirim kebutuhan Anda dan kami tanggapi untuk penawaran sesuai produk yang dipilih.', poin: ['Sebutkan produk dan jumlah atau luas kebutuhan', 'Cantumkan lokasi proyek', 'Diskusikan kebutuhan lanjutan'] },
];

export const alur = [
  { icon: 'message', judul: 'Hubungi kami', teks: 'Mulai percakapan melalui tombol WhatsApp di situs ini.' },
  { icon: 'clipboard', judul: 'Sampaikan kebutuhan', teks: 'Jelaskan jenis proyek, lokasi, dan produk yang dicari.' },
  { icon: 'grid', judul: 'Pilih produk', teks: 'Dapatkan arahan produk dan informasi pendukungnya.' },
  { icon: 'file', judul: 'Minta penawaran', teks: 'Lanjutkan ke permintaan penawaran sesuai kebutuhan.' },
];

export const panduan = [
  { icon: 'hardhat', kebutuhan: 'Tanah dasar lunak dan timbunan', slugs: [['woven', 'Woven'], ['geogrid', 'Geogrid'], ['geocell', 'GEOCELL']] },
  { icon: 'droplets', kebutuhan: 'Menyaring tanah, meloloskan air', slugs: [['non-woven', 'Non Woven'], ['geocomposite', 'Geocomposite']] },
  { icon: 'mountain', kebutuhan: 'Lereng curam dan dinding penahan', slugs: [['geogrid', 'Geogrid'], ['geocell', 'GEOCELL']] },
  { icon: 'waves', kebutuhan: 'Erosi permukaan lereng dan saluran', slugs: [['geomat', 'Geomat'], ['geocell', 'GEOCELL']] },
  { icon: 'shield-check', kebutuhan: 'Kolam, tambak, dan penampung limbah', slugs: [['geomembran', 'Geomembran']] },
  { icon: 'building', kebutuhan: 'Roof garden, basement, dan lapangan', slugs: [['drainase-cell', 'Drainase Cell'], ['geocomposite', 'Geocomposite']] },
  { icon: 'pipe', kebutuhan: 'Drainase bawah permukaan dan gorong-gorong', slugs: [['geopipe', 'GEOPIPE']] },
];

export const bandingWoven = [
  { label: 'Bahan', woven: 'Polypropylene (PP) atau Polyester (PET), dianyam', non: 'Polyester (PET) atau Polypropylene (PP), tidak teranyam' },
  { label: 'Karakter utama', woven: 'Kuat tarik tinggi', non: 'Bukaan pori kecil, permeabilitas tinggi' },
  { label: 'Fungsi utama', woven: 'Perkuatan', non: 'Pemisah dan filtrasi' },
  { label: 'Aplikasi umum', woven: 'Perkerasan jalan, jalan rel, perlindungan bendungan', non: 'Filter drainase, pemisah lapisan, pelindung geomembran' },
];

export const faq = [
  { q: 'Apa itu geotextile?', a: 'Geotextile adalah lembaran material polimer yang dipakai pada konstruksi tanah untuk memisahkan lapisan, menyaring air, mengalirkan air, atau memperkuat tanah. Dua jenis utamanya adalah woven (dianyam) dan non woven (tidak teranyam).' },
  { q: 'Apa perbedaan geotextile woven dan non woven?', a: 'Woven dianyam sehingga kuat tarik tinggi dan banyak dipakai untuk perkuatan. Non woven tidak teranyam dengan bukaan pori kecil dan permeabilitas tinggi, sehingga cocok sebagai pemisah dan filter.' },
  { q: 'Kapan memilih geogrid dan kapan geocell?', a: 'Geogrid berbentuk kisi yang mengunci agregat dan sering dipakai untuk perkuatan lereng, timbunan, dan jalan. Geocell berbentuk sel 3 dimensi seperti sarang lebah yang mengekang material isian, dipakai untuk perkuatan, pengendalian erosi, dan dinding penahan. Pilihan akhir bergantung pada kondisi proyek, jadi silakan konsultasikan.' },
  { q: 'Apa fungsi geomembran?', a: 'Geomembran berfungsi sebagai lapisan kedap air dan udara untuk menampung cairan atau gas, misalnya pada kolam ikan, tambak, embung, dan sanitary landfill.' },
  { q: 'Apakah saya bisa berkonsultasi sebelum memesan?', a: 'Bisa. Hubungi kami melalui WhatsApp, ceritakan kebutuhan proyek Anda, dan kami bantu arahkan ke produk yang sesuai.' },
  { q: 'Informasi apa yang perlu saya siapkan?', a: 'Jenis proyek, lokasi, produk yang diminati, serta perkiraan luas atau jumlah kebutuhan. Semakin jelas informasinya, semakin tepat arahan yang bisa kami berikan.' },
  { q: 'Bagaimana cara meminta penawaran?', a: 'Kirim kebutuhan Anda melalui WhatsApp dengan menyebutkan produk, jumlah atau luas, dan lokasi proyek.' },
  { q: 'Bagaimana jika saya membutuhkan data teknis produk?', a: 'Permintaan data teknis dapat disampaikan melalui WhatsApp. Sebutkan produk yang Anda maksud.' },
];

export const infoKonsultasi = [
  { icon: 'hardhat', judul: 'Jenis proyek', teks: 'Misalnya jalan, lereng, kolam, atau drainase.' },
  { icon: 'pin', judul: 'Lokasi proyek', teks: 'Kota atau daerah tempat proyek berada.' },
  { icon: 'grid', judul: 'Produk yang diminati', teks: 'Satu atau beberapa kategori produk.' },
  { icon: 'ruler', judul: 'Luas atau jumlah', teks: 'Perkiraan kebutuhan material.' },
  { icon: 'clock', judul: 'Waktu kebutuhan', teks: 'Perkiraan kapan material dibutuhkan.' },
];

/* Draf profil: mohon ditinjau dan disetujui pemilik perusahaan sebelum rilis. */
export const profil = {
  paragraf: [
    'Geotex Karya Agung adalah perusahaan yang bergerak di bidang geotextile dan geosynthetic, berdiri sejak tahun 2020.',
    'Kami menyediakan sembilan kategori produk untuk kebutuhan konstruksi dan geoteknik, mulai dari perkuatan tanah, drainase, hingga lapisan kedap air.',
    'Setiap kategori dilengkapi informasi fungsi, keunggulan, dan aplikasi agar Anda dapat memilih material yang sesuai dengan kebutuhan lapangan.',
  ],
  sejarah: 'Geotex Karya Agung berdiri pada tahun 2020 dengan fokus pada geotextile dan geosynthetic. Sejak itu, katalog kami berkembang menjadi sembilan kategori produk yang melayani kebutuhan perkuatan tanah, drainase, pengendalian erosi, dan lapisan kedap air.',
  visi: 'Menjadi mitra yang dipercaya dalam penyediaan solusi geotextile dan geosynthetic untuk pembangunan infrastruktur di Indonesia.',
  misi: [
    'Menyediakan produk geotextile dan geosynthetic yang sesuai kebutuhan proyek.',
    'Memberikan informasi produk yang jelas dan mudah dipahami.',
    'Melayani konsultasi dengan komunikasi yang cepat dan terbuka.',
    'Membangun hubungan jangka panjang dengan pelanggan dan mitra.',
  ],
  nilai: [
    { icon: 'eye', judul: 'Transparan', teks: 'Informasi produk disampaikan apa adanya.' },
    { icon: 'message', judul: 'Responsif', teks: 'Pertanyaan pelanggan ditanggapi langsung.' },
    { icon: 'target', judul: 'Tepat guna', teks: 'Produk diarahkan sesuai kebutuhan proyek.' },
    { icon: 'users', judul: 'Kemitraan', teks: 'Hubungan jangka panjang dengan pelanggan.' },
  ],
};
