import { useState } from 'react';

type TabId = 'tab-guru' | 'tab-ortu' | 'tab-admin';

export default function RoleWalkthrough() {
  const [activeTab, setActiveTab] = useState<TabId>('tab-guru');

  const triggerToast = (msg: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('halaqoh:toast', { detail: msg }));
    }
  };

  return (
    <section className="py-24 md:py-36 bg-[var(--tm-dark-surface)] border-b border-white/10 scroll-mt-20" id="demo">
      <div className="container-tm">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="suptitle-tm">Simulasi Antarmuka</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--tm-stone)] leading-tight mb-4">
            Eksplorasi Alur Kerja Tiga Peran
          </h2>
          <p className="text-sm md:text-base text-[var(--tm-stone)]/80 font-light leading-relaxed">
            Pilihlah salah satu peran di bawah ini untuk melihat bagaimana sistem menyajikan informasi tanpa kompleksitas berlebih.
          </p>
        </div>

        {/* Main Walkthrough Container */}
        <div className="bg-[var(--tm-dark)] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Tab Navigation Bar */}
          <div className="flex border-b border-white/10 overflow-x-auto bg-white/[0.02]" role="tablist" aria-label="Pilihan Peran Sistem">
            <button
              type="button"
              className={`flex items-center gap-3 px-6 sm:px-8 py-5 border-r border-white/10 text-xs uppercase tracking-[0.16em] font-medium transition-all whitespace-nowrap min-h-[52px] ${
                activeTab === 'tab-guru'
                  ? 'bg-white/10 text-white border-b-2 border-b-[var(--tm-accent-gold)]'
                  : 'text-[var(--tm-stone)]/70 hover:text-white hover:bg-white/[0.04]'
              }`}
              onClick={() => setActiveTab('tab-guru')}
              role="tab"
              aria-selected={activeTab === 'tab-guru'}
              id="tab-btn-guru"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-gold)]"></span>
              1. Guru Pengajar (Absensi &amp; Luring)
            </button>

            <button
              type="button"
              className={`flex items-center gap-3 px-6 sm:px-8 py-5 border-r border-white/10 text-xs uppercase tracking-[0.16em] font-medium transition-all whitespace-nowrap min-h-[52px] ${
                activeTab === 'tab-ortu'
                  ? 'bg-white/10 text-white border-b-2 border-b-[var(--tm-accent-gold)]'
                  : 'text-[var(--tm-stone)]/70 hover:text-white hover:bg-white/[0.04]'
              }`}
              onClick={() => setActiveTab('tab-ortu')}
              role="tab"
              aria-selected={activeTab === 'tab-ortu'}
              id="tab-btn-ortu"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-gold)]"></span>
              2. Wali Santri (Rekap &amp; Unduh PDF)
            </button>

            <button
              type="button"
              className={`flex items-center gap-3 px-6 sm:px-8 py-5 text-xs uppercase tracking-[0.16em] font-medium transition-all whitespace-nowrap min-h-[52px] ${
                activeTab === 'tab-admin'
                  ? 'bg-white/10 text-white border-b-2 border-b-[var(--tm-accent-gold)]'
                  : 'text-[var(--tm-stone)]/70 hover:text-white hover:bg-white/[0.04]'
              }`}
              onClick={() => setActiveTab('tab-admin')}
              role="tab"
              aria-selected={activeTab === 'tab-admin'}
              id="tab-btn-admin"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-gold)]"></span>
              3. Administrator (Kalender &amp; Cadangan)
            </button>
          </div>

          {/* Tab Content Area */}
          <div className="p-6 sm:p-10">

            {/* TAB 1: GURU */}
            {activeTab === 'tab-guru' && (
              <div className="flex flex-col gap-6 animate-fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--tm-accent-gold)] font-medium block mb-1">
                      Operasional Musholla
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white">
                      Formulir Absensi &amp; Setoran Cepat
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Mode Offline-First Aktif (IndexedDB Siap)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Form Simulation */}
                  <div className="lg:col-span-2 bg-white/[0.02] border border-white/10 rounded-xl p-6 flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[var(--tm-stone)]/70 mb-2">Nama Santri</label>
                        <select className="w-full bg-[var(--tm-dark)] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--tm-accent-gold)]">
                          <option>Ahmad Ziyad Fauzi (Hadir)</option>
                          <option>Fatimah Azzahra</option>
                          <option>Muhammad Bilal Al-Ghifari</option>
                          <option>Maryam Khairunnisa</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[var(--tm-stone)]/70 mb-2">Sesi Waktu Shalat</label>
                        <select className="w-full bg-[var(--tm-dark)] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--tm-accent-gold)]">
                          <option>Sesi Magrib (17:30 - 19:00 WIB) [Terdeteksi]</option>
                          <option>Sesi Subuh (04:00 - 06:00 WIB)</option>
                          <option>Sesi Ashar (14:30 - 16:30 WIB)</option>
                          <option>Sesi Isya (19:00 - 21:00 WIB)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[var(--tm-stone)]/70 mb-2">Jenis Materi</label>
                        <select className="w-full bg-[var(--tm-dark)] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--tm-accent-gold)]">
                          <option>Al-Qur&#39;an (Surat)</option>
                          <option>Iqro (Jilid 1 - 6)</option>
                          <option>Al-Qur&#39;an (Halaman Standar)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[var(--tm-stone)]/70 mb-2">Nama Surat / Jilid</label>
                        <input
                          type="text"
                          defaultValue="67. Al-Mulk"
                          className="w-full bg-[var(--tm-dark)] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--tm-accent-gold)]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[var(--tm-stone)]/70 mb-2">Rentang Ayat / Halaman</label>
                        <input
                          type="text"
                          defaultValue="Ayat 1 s.d. 15"
                          className="w-full bg-[var(--tm-dark)] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--tm-accent-gold)]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[var(--tm-stone)]/70 mb-2">Catatan Tajwid / Capaian Guru</label>
                      <textarea
                        rows={2}
                        defaultValue="Tahsin lancar, makharijul huruf &lsquo;Ain dan Qaf sudah tepat. Boleh melanjutkan hafalan ayat berikutnya besok."
                        className="w-full bg-[var(--tm-dark)] border border-white/15 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[var(--tm-accent-gold)]"
                      />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <span className="text-xs text-[var(--tm-stone)]/70">
                        Otomatis masuk antrean offline jika internet mati.
                      </span>
                      <button
                        type="button"
                        onClick={() => triggerToast('Data absensi Ahmad Ziyad Fauzi berhasil disimpan ke antrean lokal!')}
                        className="btn-pill btn-pill-light text-xs tracking-wider"
                      >
                        Simpan Presensi Santri
                      </button>
                    </div>
                  </div>

                  {/* Offline Information Side Panel */}
                  <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 flex flex-col justify-between">
                    <div>
                      <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--tm-accent-gold)] font-medium block mb-2">
                        Keandalan Offline
                      </span>
                      <h4 className="font-serif text-xl text-white mb-3">
                        Koneksi Terputus? Tidak Menjadi Masalah
                      </h4>
                      <p className="text-xs text-[var(--tm-stone)]/80 leading-relaxed font-light mb-4">
                        Service Worker Serwist menyimpan seluruh komponen form dan daftar santri di IndexedDB lokal.
                      </p>
                      <ul className="text-xs text-[var(--tm-stone)]/80 space-y-2 font-light">
                        <li className="flex items-center gap-2">
                          <span className="text-[var(--tm-accent-gold)]">&bull;</span>
                          <span>Auto-sync latar belakang saat sinyal kembali</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[var(--tm-accent-gold)]">&bull;</span>
                          <span>Pencegahan duplikasi entri otomatis</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/10 text-xs text-[var(--tm-accent-gold)] font-medium">
                      Teruji stabil di jaringan seluler 3G dan tanpa sinyal.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: ORANG TUA */}
            {activeTab === 'tab-ortu' && (
              <div className="flex flex-col gap-6 animate-fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--tm-accent-gold)] font-medium block mb-1">
                      Tampilan Wali Santri
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white">
                      Rekap Harian &amp; Pengunduhan PDF
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-[var(--tm-stone)]">
                    <span>Tautan Publik Aman: halaqoh.app/dafi-ahmad-x7k9p2</span>
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <h4 className="font-serif text-2xl text-white">Dafi Ahmad Fauzi</h4>
                      <p className="text-xs text-[var(--tm-stone)]/70">Periode: Oktober 2026 &bull; Tingkat: Al-Qur&#39;an Juz 30</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => triggerToast('Laporan resmi PDF A4 Landscape berhasil diproses dan siap diunduh.')}
                      className="btn-pill btn-pill-light text-xs tracking-wider"
                    >
                      Unduh Laporan PDF A4
                    </button>
                  </div>

                  {/* Responsive Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-white/10 text-[var(--tm-stone)]/60 uppercase tracking-wider">
                          <th className="py-3 px-4">Tanggal</th>
                          <th className="py-3 px-4">Sesi Shalat</th>
                          <th className="py-3 px-4">Capaian Materi</th>
                          <th className="py-3 px-4">Metode</th>
                          <th className="py-3 px-4">Ustadz Pengajar</th>
                          <th className="py-3 px-4">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-[var(--tm-stone)]">
                        <tr>
                          <td className="py-3 px-4 font-mono">12 Okt 2026</td>
                          <td className="py-3 px-4">Magrib</td>
                          <td className="py-3 px-4 text-white">Al-Mulk (Ayat 1-15)</td>
                          <td className="py-3 px-4">Tahsin &amp; Setoran</td>
                          <td className="py-3 px-4">Ustadz Abdullah</td>
                          <td className="py-3 px-4 text-emerald-400 font-medium">Hadir</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-mono">10 Okt 2026</td>
                          <td className="py-3 px-4">Magrib</td>
                          <td className="py-3 px-4 text-white">Al-Waqi&#39;ah (Ayat 75-96)</td>
                          <td className="py-3 px-4">Setoran Hafalan</td>
                          <td className="py-3 px-4">Ustadz Abdullah</td>
                          <td className="py-3 px-4 text-emerald-400 font-medium">Hadir</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-mono">08 Okt 2026</td>
                          <td className="py-3 px-4">Ashar</td>
                          <td className="py-3 px-4 text-white">Ar-Rahman (Ayat 1-25)</td>
                          <td className="py-3 px-4">Bimbingan Tilawah</td>
                          <td className="py-3 px-4">Ustadz Firman</td>
                          <td className="py-3 px-4 text-emerald-400 font-medium">Hadir</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: ADMIN */}
            {activeTab === 'tab-admin' && (
              <div className="flex flex-col gap-6 animate-fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--tm-accent-gold)] font-medium block mb-1">
                      Panel Pengurus
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white">
                      Kendali Kalender, Santri &amp; Cadangan
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs bg-amber-950/40 text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
                    <span>Akses Khusus Administrator</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                    <span className="text-xs uppercase tracking-wider text-[var(--tm-accent-gold)] block mb-2">01. Santri &amp; Staf</span>
                    <h4 className="font-serif text-xl text-white mb-2">Manajemen Profil</h4>
                    <p className="text-xs text-[var(--tm-stone)]/80 font-light mb-4">
                      Tambah santri baru, regenerasi tautan slug publik, serta pengaturan akun pengajar.
                    </p>
                    <button
                      type="button"
                      onClick={() => triggerToast('Simulasi: Dialog tambah santri baru dibuka.')}
                      className="text-xs uppercase tracking-wider text-white hover:text-[var(--tm-accent-gold)] transition-colors"
                    >
                      Kelola Santri &rarr;
                    </button>
                  </div>

                  <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                    <span className="text-xs uppercase tracking-wider text-[var(--tm-accent-gold)] block mb-2">02. Kalender Sesi</span>
                    <h4 className="font-serif text-xl text-white mb-2">Jadwal &amp; Pengecualian</h4>
                    <p className="text-xs text-[var(--tm-stone)]/80 font-light mb-4">
                      Atur hari aktif rutin mingguan dan tentukan tanggal libur Idul Fitri / Ramadhan.
                    </p>
                    <button
                      type="button"
                      onClick={() => triggerToast('Simulasi: Kalender jadwal aktif dimuat.')}
                      className="text-xs uppercase tracking-wider text-white hover:text-[var(--tm-accent-gold)] transition-colors"
                    >
                      Konfigurasi Jadwal &rarr;
                    </button>
                  </div>

                  <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                    <span className="text-xs uppercase tracking-wider text-[var(--tm-accent-gold)] block mb-2">03. Kedaulatan Data</span>
                    <h4 className="font-serif text-xl text-white mb-2">Backup JSON &amp; CSV</h4>
                    <p className="text-xs text-[var(--tm-stone)]/80 font-light mb-4">
                      Unduh cadangan database utuh secara berkala. Ekspor aman dari serangan formula injection.
                    </p>
                    <button
                      type="button"
                      onClick={() => triggerToast('Simulasi: Berkas cadangan database halaqoh-backup.json siap diunduh.')}
                      className="text-xs uppercase tracking-wider text-white hover:text-[var(--tm-accent-gold)] transition-colors"
                    >
                      Unduh Backup JSON &rarr;
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
