import React, { useState } from 'react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah aplikasi ini benar-benar bisa dipakai saat tidak ada sinyal internet?',
    answer: 'Ya, halaqoh dirancang dengan prinsip offline-first menggunakan Service Worker dan IndexedDB lokal. Form absensi tetap dapat dibuka di dalam musholla tanpa koneksi. Begitu guru kembali mendapatkan internet, seluruh antrean lokal otomatis disinkronkan ke server di latar belakang.'
  },
  {
    id: 'faq-2',
    question: 'Bagaimana cara orang tua melihat rekap ngaji anaknya tanpa login?',
    answer: 'Setiap santri memiliki tautan web publik acak yang dibuat secara kriptografis (misalnya halaqoh.app/dafi-ahmad-a7k3q9). Guru atau admin cukup membagikan tautan tersebut melalui WhatsApp. Orang tua langsung dapat melihat riwayat kehadiran dan capaian ayat tanpa perlu membuat akun atau menghafal kata sandi.'
  },
  {
    id: 'faq-3',
    question: 'Apakah orang tua yang memiliki lebih dari satu anak harus membuka tautan terpisah?',
    answer: 'Tidak perlu. Halaqoh mendukung tautan gabungan multi-santri. Guru dapat menggabungkan tautan anak (misalnya /anak-a+anak-b) sehingga orang tua cukup membuka satu halaman dan dapat berpindah profil anak dengan tab interaktif.'
  },
  {
    id: 'faq-4',
    question: 'Materi apa saja yang didukung dalam pencatatan bacaan santri?',
    answer: 'Aplikasi memuat basis data lengkap Iqro jilid 1 sampai 6 beserta rentang halaman, serta seluruh 114 surat Al-Qur\'an dengan validasi batas ayat riil. Guru juga dapat mencatat berdasarkan nomor halaman mushaf standar (1 sampai 604) dan menandai metode bacaan (tahsin atau setoran hafalan).'
  },
  {
    id: 'faq-5',
    question: 'Bagaimana format laporan rekapitulasi yang didapatkan orang tua?',
    answer: 'Orang tua dapat mengunduh berkas laporan bulanan dalam format dokumen PDF standar A4 Landscape resmi. Generator PDF diproses langsung di peramban secara instan tanpa perlu menunggu render server atau membuka jendela dialog print yang lambat.'
  },
  {
    id: 'faq-6',
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
    <section id="faq" className="section-space">
      <div className="container scroll-reveal">
        <div className="section-head">
          <span className="section-eyebrow">Tanya Jawab</span>
          <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
          <p className="section-subtitle">
            Segala hal yang perlu Anda ketahui mengenai cara kerja teknis dan kepraktisan penggunaan Halaqoh.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3.5">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            const headingId = `heading-${item.id}`;
            const panelId = `panel-${item.id}`;

            return (
              <div
                key={item.id}
                className="bg-[var(--paper)] border-2 border-[var(--border-strong)] rounded-[var(--radius-md)] overflow-hidden shadow-[var(--shadow-sm)] transition-all"
              >
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(item.id)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-base md:text-lg text-[var(--ink)] hover:bg-[var(--sand)]/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--forest)]"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`w-7 h-7 rounded-full border border-[var(--border-strong)] flex items-center justify-center shrink-0 bg-[var(--cream)] transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[var(--forest)] text-white' : 'text-[var(--ink)]'
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  hidden={!isOpen}
                  className={`px-5 pb-5 pt-1 text-sm md:text-base text-[var(--ink-secondary)] leading-relaxed border-t border-[var(--border-soft)] ${
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
