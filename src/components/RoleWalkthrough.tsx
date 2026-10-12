import React, { useState } from 'react';

type TabId = 'tab-guru' | 'tab-ortu' | 'tab-admin';

export default function RoleWalkthrough() {
  const [activeTab, setActiveTab] = useState<TabId>('tab-guru');

  const triggerToast = (msg: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('halaqoh:toast', { detail: msg }));
    }
  };

  return (
    <section className="section-space scroll-mt-20" id="peran">
      <div id="demo" className="scroll-mt-20"></div>
      <div className="container">
        <div className="section-head text-center max-w-[680px] mx-auto mb-14">
          <span className="section-eyebrow text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--forest)] mb-2 block">
            Tampilan Antarmuka
          </span>
          <h2 className="section-title text-[clamp(1.8rem,3.2vw,2.5rem)] mb-4">
            Satu Sistem untuk Tiga Peran Berbeda
          </h2>
          <p className="section-subtitle text-[1.05rem] text-[var(--ink-secondary)]">
            Setiap pihak mendapatkan pengalaman yang disesuaikan dengan perannya tanpa kerumitan yang tidak perlu.
          </p>
        </div>

        <div className="demo-container bg-[var(--paper)] border-2 border-[var(--border-strong)] rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] overflow-hidden">
          <div className="demo-tabs-bar flex bg-[var(--sand)] border-b-2 border-[var(--border-strong)] overflow-x-auto" role="tablist" aria-label="Pilihan Peran Pengguna">
            <button
              type="button"
              className={`demo-tab-btn flex items-center gap-2 px-5 sm:px-6 py-4 bg-transparent border-r-[1.5px] border-[var(--border-strong)] text-[0.925rem] font-bold cursor-pointer whitespace-nowrap min-h-[48px] transition-colors ${
                activeTab === 'tab-guru' ? 'bg-[var(--paper)] text-[var(--forest)] relative shadow-none' : 'text-[var(--ink-secondary)] hover:bg-white/40 hover:text-[var(--ink)]'
              }`}
              onClick={() => setActiveTab('tab-guru')}
              role="tab"
              aria-selected={activeTab === 'tab-guru'}
              aria-controls="panel-guru"
              id="tab-button-guru"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
              1. Guru Pengajar (Mode Absensi & Offline)
            </button>

            <button
              type="button"
              className={`demo-tab-btn flex items-center gap-2 px-5 sm:px-6 py-4 bg-transparent border-r-[1.5px] border-[var(--border-strong)] text-[0.925rem] font-bold cursor-pointer whitespace-nowrap min-h-[48px] transition-colors ${
                activeTab === 'tab-ortu' ? 'bg-[var(--paper)] text-[var(--forest)] relative shadow-none' : 'text-[var(--ink-secondary)] hover:bg-white/40 hover:text-[var(--ink)]'
              }`}
              onClick={() => setActiveTab('tab-ortu')}
              role="tab"
              aria-selected={activeTab === 'tab-ortu'}
              aria-controls="panel-ortu"
              id="tab-button-ortu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              2. Orang Tua Santri (Tautan Publik Tanpa Login)
            </button>

            <button
              type="button"
              className={`demo-tab-btn flex items-center gap-2 px-5 sm:px-6 py-4 bg-transparent border-r-[1.5px] border-[var(--border-strong)] text-[0.925rem] font-bold cursor-pointer whitespace-nowrap min-h-[48px] transition-colors ${
                activeTab === 'tab-admin' ? 'bg-[var(--paper)] text-[var(--forest)] relative shadow-none' : 'text-[var(--ink-secondary)] hover:bg-white/40 hover:text-[var(--ink)]'
              }`}
              onClick={() => setActiveTab('tab-admin')}
              role="tab"
              aria-selected={activeTab === 'tab-admin'}
              aria-controls="panel-admin"
              id="tab-button-admin"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              3. Pengurus / Admin (Kalender & Cadangan Data)
            </button>
          </div>

          {/* TAB 1: GURU VIEW */}
          {activeTab === 'tab-guru' && (
            <div className="demo-content-panel p-6 sm:p-8" id="panel-guru" role="tabpanel" aria-labelledby="tab-button-guru">
              <div className="demo-panel-grid grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-8 sm:gap-10 items-start">
                <div className="panel-explanation flex flex-col gap-5">
                  <h4 className="text-[1.5rem] font-bold">Fokus Mengajar, Pencatatan Cepat</h4>
                  <p className="text-[var(--ink-secondary)] leading-relaxed">
                    Guru tidak perlu membuang waktu mengutak-atik menu yang rumit. Saat membuka form absensi di ponsel, sistem langsung mendeteksi sesi shalat yang aktif dan memuat nama santri dari memori lokal.
                  </p>
                  <ul className="panel-feature-checklist flex flex-col gap-3 list-none">
                    <li className="flex items-start gap-2.5 text-[0.925rem] text-[var(--ink-secondary)]">
                      <svg className="text-[var(--forest)] shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><strong>Mode Offline Tangguh:</strong> Tetap bisa menyimpan absensi di dalam masjid meski sinyal internet hilang sama sekali.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-[0.925rem] text-[var(--ink-secondary)]">
                      <svg className="text-[var(--forest)] shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><strong>Materi Lengkap:</strong> Pilihan Iqro Jilid 1 sampai 6, 114 Surat Al-Qur'an (dengan validasi batas ayat), atau pencatatan per nomor halaman mushaf standar.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-[0.925rem] text-[var(--ink-secondary)]">
                      <svg className="text-[var(--forest)] shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><strong>Multi-Catatan Sekaligus:</strong> Bisa mencatat bacaan Iqro sekaligus setoran hafalan surat pendek dalam satu kedatangan santri.</span>
                    </li>
                  </ul>
                </div>

                <div className="mockup-frame bg-[var(--cream-light)] border-[1.5px] border-[var(--border-strong)] rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] overflow-hidden">
                  <div className="mockup-topbar bg-[var(--sand)] px-3.5 py-2.5 border-b border-[var(--border-strong)] flex items-center justify-between">
                    <div className="mockup-dots flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full border border-[var(--border-strong)] bg-white"></span>
                      <span className="w-2.5 h-2.5 rounded-full border border-[var(--border-strong)] bg-white"></span>
                      <span className="w-2.5 h-2.5 rounded-full border border-[var(--border-strong)] bg-white"></span>
                    </div>
                    <span className="text-[0.725rem] font-mono bg-white px-3 py-0.5 rounded-[var(--radius-pill)] border border-[var(--border-soft)] text-[var(--ink-secondary)]">
                      app.halaqoh / absensi
                    </span>
                    <span className="text-[0.725rem] font-bold text-[var(--forest)]">Peran: Guru</span>
                  </div>

                  <div className="mockup-inner p-4 sm:p-5">
                    <div className="mockup-offline-alert bg-[var(--hl-olive-subtle)] border border-dashed border-[var(--forest)] rounded-[var(--radius-sm)] px-3 py-2 flex items-center justify-between text-[0.775rem] font-semibold text-[var(--forest)] mb-4">
                      <span>⚡ Antrean Lokal Aktif (2 data tersimpan luring)</span>
                      <button
                        type="button"
                        onClick={() => triggerToast('Sinkronisasi: Mengirim 2 data tertunda ke database server...')}
                        className="text-[0.7rem] bg-[var(--forest)] text-white px-2 py-0.5 rounded cursor-pointer hover:bg-[var(--forest-hover)]"
                      >
                        Sinkronkan
                      </button>
                    </div>

                    <div className="mock-form-group mb-3">
                      <label className="mock-label text-[0.75rem] font-bold uppercase text-[var(--ink-secondary)] block mb-1">Pilih Santri</label>
                      <div className="mock-input w-full px-3 py-2 bg-white border border-[var(--border-strong)] rounded-[var(--radius-sm)] text-[0.85rem] font-semibold text-[var(--ink)] flex justify-between items-center cursor-default">
                        <span>Muhammad Rayhan (Iqro)</span>
                        <small className="text-[var(--ink-muted)]">▼</small>
                      </div>
                    </div>

                    <div className="mock-row grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
                      <div>
                        <label className="mock-label text-[0.75rem] font-bold uppercase text-[var(--ink-secondary)] block mb-1">Sesi Shalat</label>
                        <div className="mock-input w-full px-3 py-2 bg-[var(--sand)] border border-[var(--border-strong)] rounded-[var(--radius-sm)] text-[0.85rem] font-semibold text-[var(--ink)]">
                          Magrib (17:30 - 19:00)
                        </div>
                      </div>
                      <div>
                        <label className="mock-label text-[0.75rem] font-bold uppercase text-[var(--ink-secondary)] block mb-1">Metode</label>
                        <div className="mock-input w-full px-3 py-2 bg-white border border-[var(--border-strong)] rounded-[var(--radius-sm)] text-[0.85rem] font-semibold text-[var(--ink)]">
                          Tahsin (Bimbingan)
                        </div>
                      </div>
                    </div>

                    <div className="mock-row grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
                      <div>
                        <label className="mock-label text-[0.75rem] font-bold uppercase text-[var(--ink-secondary)] block mb-1">Jilid Iqro</label>
                        <div className="mock-input w-full px-3 py-2 bg-white border border-[var(--border-strong)] rounded-[var(--radius-sm)] text-[0.85rem] font-semibold text-[var(--ink)]">
                          Jilid 4
                        </div>
                      </div>
                      <div>
                        <label className="mock-label text-[0.75rem] font-bold uppercase text-[var(--ink-secondary)] block mb-1">Rentang Halaman</label>
                        <div className="mock-input w-full px-3 py-2 bg-white border border-[var(--border-strong)] rounded-[var(--radius-sm)] text-[0.85rem] font-semibold text-[var(--ink)]">
                          Hal 14 s.d. 16
                        </div>
                      </div>
                    </div>

                    <button
                      className="mock-btn-submit w-full bg-[var(--forest)] text-white border-[1.5px] border-[var(--border-strong)] py-3 px-3 font-bold text-[0.875rem] rounded-[var(--radius-sm)] cursor-pointer shadow-[2px_2px_0_var(--border-strong)] mt-1.5 min-h-[44px] hover:bg-[var(--forest-hover)] active:translate-x-0.5 active:translate-y-0.5"
                      type="button"
                      onClick={() => triggerToast('Form Guru: Setoran Muhammad Rayhan (Iqro Jilid 4 Hal 14-16) berhasil disimpan!')}
                    >
                      Simpan Absensi & Setoran
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ORANG TUA VIEW */}
          {activeTab === 'tab-ortu' && (
            <div className="demo-content-panel p-6 sm:p-8" id="panel-ortu" role="tabpanel" aria-labelledby="tab-button-ortu">
              <div className="demo-panel-grid grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-8 sm:gap-10 items-start">
                <div className="panel-explanation flex flex-col gap-5">
                  <h4 className="text-[1.5rem] font-bold">Transparansi Penuh untuk Orang Tua</h4>
                  <p className="text-[var(--ink-secondary)] leading-relaxed">
                    Orang tua tidak perlu repot mendaftar akun baru, mengunduh aplikasi tambahan, atau menghafal kata sandi. Guru atau admin cukup membagikan tautan acak unik melalui WhatsApp.
                  </p>
                  <ul className="panel-feature-checklist flex flex-col gap-3 list-none">
                    <li className="flex items-start gap-2.5 text-[0.925rem] text-[var(--ink-secondary)]">
                      <svg className="text-[var(--forest)] shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><strong>Tautan Acak Unik (Slug):</strong> Aman dan rahasia, tautan dapat diganti kapan saja oleh pengurus jika diperlukan.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-[0.925rem] text-[var(--ink-secondary)]">
                      <svg className="text-[var(--forest)] shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><strong>Multi-Santri (Kakak-Adik):</strong> Mendukung penggabungan tautan (contoh: <code>/anak-a+anak-b</code>), orang tua bisa memantau semua anaknya dalam satu layar.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-[0.925rem] text-[var(--ink-secondary)]">
                      <svg className="text-[var(--forest)] shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><strong>Cetak PDF Langsung:</strong> Unduh dokumen PDF resmi tanpa iklan atau watermark yang mengganggu.</span>
                    </li>
                  </ul>
                </div>

                <div className="mockup-frame bg-[var(--cream-light)] border-[1.5px] border-[var(--border-strong)] rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] overflow-hidden">
                  <div className="mockup-topbar bg-[var(--sand)] px-3.5 py-2.5 border-b border-[var(--border-strong)] flex items-center justify-between">
                    <div className="mockup-dots flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full border border-[var(--border-strong)] bg-white"></span>
                      <span className="w-2.5 h-2.5 rounded-full border border-[var(--border-strong)] bg-white"></span>
                      <span className="w-2.5 h-2.5 rounded-full border border-[var(--border-strong)] bg-white"></span>
                    </div>
                    <span className="text-[0.725rem] font-mono bg-white px-3 py-0.5 rounded-[var(--radius-pill)] border border-[var(--border-soft)] text-[var(--ink-secondary)] truncate max-w-[190px]">
                      app.halaqoh / dafi-a7k3q9+zahra-b4m1x8
                    </span>
                    <span className="text-[0.725rem] font-bold text-[var(--clay)]">Akses Publik</span>
                  </div>

                  <div className="mockup-inner p-4 sm:p-5">
                    <div className="mock-child-tabs flex gap-2 mb-3">
                      <span className="mock-child-tab px-3 py-1 text-[0.75rem] font-bold border border-[var(--border-strong)] rounded-[var(--radius-pill)] bg-[var(--forest)] text-white">
                        Dafi Ahmad (Kelas Tahfidz)
                      </span>
                      <span className="mock-child-tab px-3 py-1 text-[0.75rem] font-bold border border-[var(--border-strong)] rounded-[var(--radius-pill)] bg-white text-[var(--ink)]">
                        Zahra Annisa (Iqro 3)
                      </span>
                    </div>

                    <div className="mock-parent-header border-b-[1.5px] border-[var(--border-strong)] pb-2.5 mb-3 flex flex-wrap justify-between items-center gap-2">
                      <div>
                        <strong className="text-[0.95rem]">Rekap Bulan Oktober</strong>
                        <div className="text-[0.75rem] text-[var(--ink-secondary)]">Total 18 Hari Kehadiran</div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="btn btn-secondary btn-sm py-1.5 px-3 text-[0.75rem] min-h-[36px]"
                          type="button"
                          onClick={() => triggerToast('Web Share: Membuka WhatsApp untuk membagikan rekap santri...')}
                        >
                          Bagikan
                        </button>
                        <button
                          className="btn btn-primary btn-sm py-1.5 px-3 text-[0.75rem] min-h-[36px]"
                          type="button"
                          onClick={() => triggerToast('Generator PDF: Mengunduh Rekap Mengaji Dafi Ahmad A4 Landscape...')}
                        >
                          Unduh PDF
                        </button>
                      </div>
                    </div>

                    <div className="overflow-x-auto -mx-1 px-1">
                      <table className="mock-sessions-table w-full min-w-[380px] border-collapse text-[0.75rem] bg-white border border-[var(--border-soft)]">
                        <thead>
                          <tr className="bg-[var(--sand)] font-bold text-[var(--ink)]">
                            <th className="p-2 border border-[var(--border-soft)] text-left">Tgl</th>
                            <th className="p-2 border border-[var(--border-soft)] text-left">Subuh</th>
                            <th className="p-2 border border-[var(--border-soft)] text-left">Ashar</th>
                            <th className="p-2 border border-[var(--border-soft)] text-left">Magrib</th>
                            <th className="p-2 border border-[var(--border-soft)] text-left">Capaian Bacaan</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2 border border-[var(--border-soft)]">12 Okt</td>
                            <td className="p-2 border border-[var(--border-soft)]">-</td>
                            <td className="p-2 border border-[var(--border-soft)]"><span className="badge-hadir bg-[var(--hl-olive)] text-[var(--forest)] px-1.5 py-0.5 rounded font-bold text-[0.7rem]">Hadir</span></td>
                            <td className="p-2 border border-[var(--border-soft)]"><span className="badge-hadir bg-[var(--hl-olive)] text-[var(--forest)] px-1.5 py-0.5 rounded font-bold text-[0.7rem]">Hadir</span></td>
                            <td className="p-2 border border-[var(--border-soft)]">An-Naba' (1-20)</td>
                          </tr>
                          <tr>
                            <td className="p-2 border border-[var(--border-soft)]">10 Okt</td>
                            <td className="p-2 border border-[var(--border-soft)]">-</td>
                            <td className="p-2 border border-[var(--border-soft)]"><span className="badge-hadir bg-[var(--hl-olive)] text-[var(--forest)] px-1.5 py-0.5 rounded font-bold text-[0.7rem]">Hadir</span></td>
                            <td className="p-2 border border-[var(--border-soft)]">-</td>
                            <td className="p-2 border border-[var(--border-soft)]">An-Nazi'at (1-15)</td>
                          </tr>
                          <tr>
                            <td className="p-2 border border-[var(--border-soft)]">08 Okt</td>
                            <td className="p-2 border border-[var(--border-soft)]">-</td>
                            <td className="p-2 border border-[var(--border-soft)]">-</td>
                            <td className="p-2 border border-[var(--border-soft)]"><span className="badge-hadir bg-[var(--hl-olive)] text-[var(--forest)] px-1.5 py-0.5 rounded font-bold text-[0.7rem]">Hadir</span></td>
                            <td className="p-2 border border-[var(--border-soft)]">'Abasa (Lengkap)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ADMIN VIEW */}
          {activeTab === 'tab-admin' && (
            <div className="demo-content-panel p-6 sm:p-8" id="panel-admin" role="tabpanel" aria-labelledby="tab-button-admin">
              <div className="demo-panel-grid grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-8 sm:gap-10 items-start">
                <div className="panel-explanation flex flex-col gap-5">
                  <h4 className="text-[1.5rem] font-bold">Kendali Penuh, Keamanan Terjaga</h4>
                  <p className="text-[var(--ink-secondary)] leading-relaxed">
                    Pengurus memiliki dashboard terpadu untuk mengatur jadwal operasional rutin, mengelola data santri & guru, serta memastikan kedaulatan data masjid tetap terjaga.
                  </p>
                  <ul className="panel-feature-checklist flex flex-col gap-3 list-none">
                    <li className="flex items-start gap-2.5 text-[0.925rem] text-[var(--ink-secondary)]">
                      <svg className="text-[var(--forest)] shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><strong>Jadwal & Kalender Fleksibel:</strong> Atur hari pengajian rutin dan tandai hari libur nasional atau acara khusus.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-[0.925rem] text-[var(--ink-secondary)]">
                      <svg className="text-[var(--forest)] shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><strong>Cadangan Data JSON Utuh:</strong> Unduh salinan database sewaktu-waktu dan pulihkan secara atomik dengan proteksi konfirmasi ketat.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-[0.925rem] text-[var(--ink-secondary)]">
                      <svg className="text-[var(--forest)] shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><strong>Ekspor CSV Aman Spreadsheet:</strong> Sanitasi formula otomatis untuk mencegah injeksi berbahaya saat dibuka di Microsoft Excel.</span>
                    </li>
                  </ul>
                </div>

                <div className="mockup-frame bg-[var(--cream-light)] border-[1.5px] border-[var(--border-strong)] rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] overflow-hidden">
                  <div className="mockup-topbar bg-[var(--sand)] px-3.5 py-2.5 border-b border-[var(--border-strong)] flex items-center justify-between">
                    <div className="mockup-dots flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full border border-[var(--border-strong)] bg-white"></span>
                      <span className="w-2.5 h-2.5 rounded-full border border-[var(--border-strong)] bg-white"></span>
                      <span className="w-2.5 h-2.5 rounded-full border border-[var(--border-strong)] bg-white"></span>
                    </div>
                    <span className="text-[0.725rem] font-mono bg-white px-3 py-0.5 rounded-[var(--radius-pill)] border border-[var(--border-soft)] text-[var(--ink-secondary)]">
                      app.halaqoh / admin
                    </span>
                    <span className="text-[0.725rem] font-bold text-[#8a1c1c]">Peran: Administrator</span>
                  </div>

                  <div className="mockup-inner p-4 sm:p-5">
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-white border border-[var(--border-soft)] p-2.5 rounded-[var(--radius-sm)] text-center">
                        <span className="text-[0.7rem] text-[var(--ink-secondary)] block">Total Santri</span>
                        <strong className="text-[1.2rem] text-[var(--forest)]">48 Anak</strong>
                      </div>
                      <div className="bg-white border border-[var(--border-soft)] p-2.5 rounded-[var(--radius-sm)] text-center">
                        <span className="text-[0.7rem] text-[var(--ink-secondary)] block">Guru Aktif</span>
                        <strong className="text-[1.2rem] text-[var(--ink)]">5 Ustadz</strong>
                      </div>
                      <div className="bg-white border border-[var(--border-soft)] p-2.5 rounded-[var(--radius-sm)] text-center">
                        <span className="text-[0.7rem] text-[var(--ink-secondary)] block">Sesi Shalat</span>
                        <strong className="text-[1.2rem] text-[var(--forest)]">5 Sesi</strong>
                      </div>
                    </div>

                    <div className="bg-white border border-[var(--border-soft)] rounded-[var(--radius-sm)] p-3">
                      <span className="text-[0.75rem] font-bold uppercase text-[var(--ink-secondary)] block mb-2">
                        Pencadangan & Pemulihan Sistem
                      </span>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button
                          className="btn btn-secondary btn-sm flex-1 text-[0.8rem] min-h-[40px]"
                          type="button"
                          onClick={() => triggerToast('Ekspor Cadangan: Mengunduh salinan utuh database format JSON (atomik)...')}
                        >
                          Unduh Backup JSON
                        </button>
                        <button
                          className="btn btn-secondary btn-sm flex-1 text-[0.8rem] min-h-[40px]"
                          type="button"
                          onClick={() => triggerToast('Ekspor Spreadsheet: Menghasilkan tabel CSV yang telah disanitasi dari formula berbahaya...')}
                        >
                          Ekspor CSV Excel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
