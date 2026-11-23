import { site } from '../data/site';

export const waLink = (pesan: string) => `https://wa.me/${site.waNumber}?text=${encodeURIComponent(pesan)}`;
export const waProduk = (nama: string) =>
  waLink(`Halo Geotex Karya Agung, saya ingin bertanya mengenai produk ${nama}. Mohon informasi lebih lanjut mengenai produk tersebut.`);
export const waUmum = waLink('Halo Geotex Karya Agung, saya ingin berkonsultasi mengenai kebutuhan geotextile dan geosynthetic.');
export const waLayanan = waLink('Halo Geotex Karya Agung, saya ingin bertanya mengenai layanan Anda.');

export const tanggalIndo = (iso: string) =>
  new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

export const waPesan = (pesan: string) => waLink(`Halo Geotex Karya Agung, ${pesan}`);
export const faqLd = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
