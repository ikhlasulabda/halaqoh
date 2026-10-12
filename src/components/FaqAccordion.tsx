import { useState } from 'react';

interface FaqItem {
  id: string;
  num: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    num: '01',
    question: 'Apakah aplikasi ini benar-benar dapat digunakan saat tidak ada sinyal internet?',
    answer: 'Ya, halaqoh dirancang dengan prinsip offline-first menggunakan Serwist Service Worker dan IndexedDB lokal. Form absensi tetap dapat dibuka di dalam musholla tanpa koneksi. Begitu guru kembali mendapatkan internet, seluruh antrean lokal otomatis disinkronkan ke server di latar belakang.'
  },
  {
    id: 'faq-2',
    num: '02',
    question: 'Bagaimana cara orang tua melihat rekap ngaji anaknya tanpa login?',
    answer: 'Setiap santri memiliki tautan web publik acak yang dibuat secara kriptografis (misalnya halaqoh.app/dafi-ahmad-a7k3q9). Guru atau admin cukup membagikan tautan tersebut melalui WhatsApp. Orang tua langsung dapat melihat riwayat kehadiran dan capaian ayat tanpa perlu membuat akun atau menghafal kata sandi.'
  },
  {
    id: 'faq-3',
    num: '03',
    question: 'Apakah orang tua yang memiliki lebih dari satu anak harus membuka banyak tautan?',
    answer: 'Tidak perlu. Halaqoh mendukung tautan gabungan multi-santri dengan operator tambah (misalnya /anak-a+anak-b). Di layar orang tua, akan muncul tab untuk berpindah antara profil anak secara instan dalam satu halaman.'
  },
  {
    id: 'faq-4',
    num: '04',
    question: 'Materi apa saja yang didukung dalam pencatatan bacaan santri?',
    answer: 'Aplikasi memuat basis data lengkap Iqro jilid 1 sampai 6 beserta rentang halaman, serta seluruh 114 surat Al-Qur\'an dengan validasi batas ayat riil. Guru juga dapat mencatat berdasarkan nomor halaman mushaf standar (1 sampai 604) dan menandai metode bacaan (tahsin atau setoran hafalan).'
  },
  {
    id: 'faq-5',
    num: '05',
    question: 'Bagaimana format laporan rekapitulasi yang didapatkan orang tua?',
    answer: 'Orang tua dapat mengunduh berkas laporan bulanan dalam format dokumen PDF standar A4 Landscape resmi. Generator PDF diproses langsung di peramban secara instan tanpa perlu menunggu render server atau membuka jendela dialog print yang lambat.'
  },
  {
    id: 'faq-6',
    num: '06',
    question: 'Apakah pengurus dapat mencadangkan dan memindahkan seluruh data?',
    answer: 'Tentu. Administrator memiliki akses penuh untuk mengunduh cadangan database dalam format JSON komprehensif serta mengekspor tabel ke CSV yang telah diamankan dari formula injection untuk dibuka di Microsoft Excel atau Google Sheets.'
  }
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 md:py-36 bg-[var(--tm-dark)] border-b border-white/10">
      <div className="container-tm max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="suptitle-tm">Tanya Jawab</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--tm-stone)] leading-tight mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm md:text-base text-[var(--tm-stone)]/80 font-light leading-relaxed">
            Penjelasan transparan seputar cara kerja teknis dan kepraktisan penggunaan Halaqoh.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            const headingId = `heading-${item.id}`;
            const panelId = `panel-${item.id}`;

            return (
              <div key={item.id} className="py-6 sm:py-8 transition-colors">
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(item.id)}
                    className="w-full text-left flex items-start justify-between gap-6 group focus:outline-none"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs uppercase tracking-[0.2em] text-[var(--tm-accent-gold)] font-mono mt-1 shrink-0">
                        {item.num}
                      </span>
                      <span className="font-serif text-xl sm:text-2xl text-white group-hover:text-[var(--tm-accent-gold)] transition-colors leading-snug">
                        {item.question}
                      </span>
                    </div>
                    <span className="text-lg font-light text-[var(--tm-stone)]/60 group-hover:text-white shrink-0 mt-0.5">
                      {isOpen ? '—' : '+'}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  hidden={!isOpen}
                  className={`pl-10 sm:pl-12 pr-6 pt-4 text-xs sm:text-sm text-[var(--tm-stone)]/80 font-light leading-relaxed ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
