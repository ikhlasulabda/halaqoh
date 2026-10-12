import React, { useState, useEffect } from 'react';
import surahData from '../data/surah.json';

interface SurahItem {
  no: number;
  name: string;
  ayat: number;
}

interface Entry {
  id: string;
  student: string;
  type: 'setoran' | 'tahsin' | 'iqro';
  desc: string;
  time: string;
}

const SURAHS: SurahItem[] = (surahData as SurahItem[]).slice(0, 114);

export default function IphoneDemo() {
  const [activeTab, setActiveTab] = useState<'absen' | 'kalender' | 'riwayat' | 'statistik'>('absen');
  const [isOffline, setIsOffline] = useState(false);
  const [offlineQueueCount, setOfflineQueueCount] = useState(0);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Form states in Absen
  const [student, setStudent] = useState<'Smith' | 'Alyssa'>('Smith');
  const [recordType, setRecordType] = useState<'setoran' | 'tahsin' | 'iqro'>('setoran');
  const [recordMethod, setRecordMethod] = useState<'surat' | 'halaman'>('surat');
  const [surahNo, setSurahNo] = useState(67); // Al-Mulk
  const [ayatFrom, setAyatFrom] = useState(1);
  const [ayatTo, setAyatTo] = useState(15);
  const [pageFrom, setPageFrom] = useState(1);
  const [pageTo, setPageTo] = useState(2);
  const [iqroJilid, setIqroJilid] = useState(4);
  const [iqroPageFrom, setIqroPageFrom] = useState(12);
  const [iqroPageTo, setIqroPageTo] = useState(14);

  // Live entries
  const [entries, setEntries] = useState<Entry[]>([
    {
      id: '1',
      student: 'Smith',
      type: 'setoran',
      desc: 'Surat Al-Mulk (Ayat 1-15)',
      time: '18:15'
    },
    {
      id: '2',
      student: 'Alyssa',
      type: 'iqro',
      desc: 'Iqro Jilid 4 (Halaman 12-14)',
      time: '18:28'
    }
  ]);

  // Calendar selected date for Sheet
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  // PDF Preview Sheet
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  // Search in Riwayat
  const [searchQuery, setSearchQuery] = useState('');

  // Selected surah object
  const currentSurah = SURAHS.find((s) => s.no === surahNo) || SURAHS[0];

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((prev) => (prev === msg ? null : prev));
    }, 2800);
  };

  const handleSaveEntry = (e: React.FormEvent) => {
    e.preventDefault();

    let desc = '';
    if (recordType === 'iqro') {
      desc = `Iqro Jilid ${iqroJilid} (Halaman ${iqroPageFrom}${iqroPageTo ? `-${iqroPageTo}` : ''})`;
    } else if (recordMethod === 'surat') {
      desc = `Surat ${currentSurah.name} (Ayat ${ayatFrom}-${ayatTo})`;
    } else {
      desc = `Halaman Mushaf ${pageFrom}${pageTo ? `-${pageTo}` : ''}`;
    }

    const newEntry: Entry = {
      id: String(Date.now()),
      student,
      type: recordType,
      desc,
      time: '18:42'
    };

    setEntries((prev) => [newEntry, ...prev]);

    if (isOffline) {
      setOfflineQueueCount((c) => c + 1);
      showToast('Tersimpan di antrean luring IndexedDB HP');
    } else {
      showToast(`Data absensi ${student} berhasil disimpan`);
    }
  };

  const handleDeleteEntry = (id: string) => {
    setEntries((prev) => prev.filter((item) => item.id !== id));
    showToast('Entri absensi dihapus');
  };

  const handleToggleOffline = () => {
    const next = !isOffline;
    setIsOffline(next);
    if (next) {
      showToast('Mode luring aktif. Jaringan terputus.');
    } else {
      if (offlineQueueCount > 0) {
        showToast(`${offlineQueueCount} data tersinkronkan otomatis ke server`);
        setOfflineQueueCount(0);
      } else {
        showToast('Koneksi terhubung kembali');
      }
    }
  };

  return (
    <div className="demo__grid">
      {/* Kolom Kiri: Pilihan Tab & Penjelasan Teknis */}
      <div className="demo__tabs" role="tablist" aria-label="Layar Demo Aplikasi">
        <button
          type="button"
          role="tab"
          id="tab-btn-absen"
          aria-selected={activeTab === 'absen'}
          aria-controls="panel-demo"
          className="demo-tab"
          onClick={() => setActiveTab('absen')}
        >
          <span className="demo-tab__num">01</span>
          <span>Form Absensi &amp; Deteksi Sesi</span>
          <span className="demo-tab__desc">Input luring, Iqro &amp; Al-Qur'an</span>
        </button>

        <button
          type="button"
          role="tab"
          id="tab-btn-kalender"
          aria-selected={activeTab === 'kalender'}
          aria-controls="panel-demo"
          className="demo-tab"
          onClick={() => setActiveTab('kalender')}
        >
          <span className="demo-tab__num">02</span>
          <span>Kalender 7 Hari Jadwal Rutin</span>
          <span className="demo-tab__desc">Sorotan hijau, detail santri</span>
        </button>

        <button
          type="button"
          role="tab"
          id="tab-btn-riwayat"
          aria-selected={activeTab === 'riwayat'}
          aria-controls="panel-demo"
          className="demo-tab"
          onClick={() => setActiveTab('riwayat')}
        >
          <span className="demo-tab__num">03</span>
          <span>Log Riwayat &amp; Penelusuran</span>
          <span className="demo-tab__desc">Tabel rapi tanpa geser horizontal</span>
        </button>

        <button
          type="button"
          role="tab"
          id="tab-btn-statistik"
          aria-selected={activeTab === 'statistik'}
          aria-controls="panel-demo"
          className="demo-tab"
          onClick={() => setActiveTab('statistik')}
        >
          <span className="demo-tab__num">04</span>
          <span>Tautan Orang Tua &amp; Cetak PDF</span>
          <span className="demo-tab__desc">Slug acak tanpa kata sandi</span>
        </button>
      </div>

      <div className="demo__panel" id="panel-demo" role="tabpanel" aria-labelledby={`tab-btn-${activeTab}`}>
        {activeTab === 'absen' && (
          <>
            <div>
              <span className="app-sample-tag" style={{ marginBottom: '8px' }}>Layar Kerja Guru</span>
              <h3>Pencatatan Presensi Cepat, Bekerja Saat Jaringan Terputus</h3>
            </div>
            <p className="muted">
              Guru membuka aplikasi saat santri tiba di musholla. Sistem langsung mendeteksi sesi shalat aktif berdasarkan waktu server. Setiap sentuhan dirancang untuk jempol dengan target sentuh minimal 48px.
            </p>
            <ul className="demo__facts">
              <li>
                <span aria-hidden="true">&bull;</span>
                <div>
                  <strong>Deteksi Waktu Shalat Server:</strong> Waktu terbagi dalam 5 sesi (Subuh, Zuhur, Ashar, Magrib, Isya) berbasis zona Asia/Jakarta, mencegah manipulasi jam perangkat.
                </div>
              </li>
              <li>
                <span aria-hidden="true">&bull;</span>
                <div>
                  <strong>Dua Jalur Kurikulum Lengkap:</strong> Mendukung Iqro Jilid 1 sampai 6 beserta nomor halaman, serta 114 Surat Al-Qur'an lengkap dengan validasi batas total ayat.
                </div>
              </li>
              <li>
                <span aria-hidden="true">&bull;</span>
                <div>
                  <strong>Pola Simpan Luring (Offline-First):</strong> Jika internet musholla terputus, data tetap tersimpan di memori IndexedDB ponsel guru dan otomatis tersinkronisasi saat sinyal kembali.
                </div>
              </li>
            </ul>
            <div className="demo__try">
              <b>Coba di iPhone samping:</b> Pilih nama Smith atau Alyssa, ubah materi ke Iqro atau Surat Al-Qur'an, lalu tekan tombol hitam "Simpan Entri Absensi".
            </div>
          </>
        )}

        {activeTab === 'kalender' && (
          <>
            <div>
              <span className="app-sample-tag" style={{ marginBottom: '8px' }}>Kalender Akademik</span>
              <h3>Grid 7 Hari dengan Sorotan Tanggal Aktif Mengaji</h3>
            </div>
            <p className="muted">
              Minggu dimulai hari Senin sesuai kalender sekolah dan pengajian Indonesia. Tanggal yang memiliki jadwal ngaji diberi warna sorotan hijau zaitun khas buku ngaji tradisional.
            </p>
            <ul className="demo__facts">
              <li>
                <span aria-hidden="true">&bull;</span>
                <div>
                  <strong>Aturan Jadwal Dinamis:</strong> Admin dapat menentukan hari rutin (misal Selasa, Rabu, Jumat) dan menandai tanggal libur khusus tanpa mengubah kode sumber.
                </div>
              </li>
              <li>
                <span aria-hidden="true">&bull;</span>
                <div>
                  <strong>Lembar Rincian Sekali Ketuk:</strong> Mengetuk salah satu tanggal aktif akan memunculkan laci bawah (*bottom sheet*) yang merangkum capaian tiap santri pada tanggal tersebut.
                </div>
              </li>
              <li>
                <span aria-hidden="true">&bull;</span>
                <div>
                  <strong>Tanpa Hardcode Tahun:</strong> Rentang kalender dapat diperpanjang dari dasbor admin ke tahun berikutnya secara fleksibel.
                </div>
              </li>
            </ul>
            <div className="demo__try">
              <b>Coba di iPhone samping:</b> Ketuk tanggal yang memiliki sorotan hijau (misal tanggal 2, 7, 9, atau 12) untuk melihat riwayat kehadiran santri.
            </div>
          </>
        )}

        {activeTab === 'riwayat' && (
          <>
            <div>
              <span className="app-sample-tag" style={{ marginBottom: '8px' }}>Buku Catatan Log</span>
              <h3>Tabel Data Terstruktur dengan Pembungkus Skrol Aman</h3>
            </div>
            <p className="muted">
              Seluruh catatan setoran santri tersusun kronologis dalam tabel berbingkai 1px hitam pekat. Desain ini mengadopsi prinsip buku rekap fisik namun dilengkapi filter instan.
            </p>
            <ul className="demo__facts">
              <li>
                <span aria-hidden="true">&bull;</span>
                <div>
                  <strong>Bebas Masalah Skrol Layar:</strong> Tabel lebar dibungkus dalam kontainer bergeser lokal, sehingga halaman ponsel tidak pernah bocor atau miring ke kanan.
                </div>
              </li>
              <li>
                <span aria-hidden="true">&bull;</span>
                <div>
                  <strong>Kolom Nama Lengkap &amp; Pencatat:</strong> Menampilkan nama santri, sesi shalat, capaian ayat atau halaman, serta nama pengajar yang mencatat.
                </div>
              </li>
            </ul>
            <div className="demo__try">
              <b>Coba di iPhone samping:</b> Ketik nama "Smith" atau "Alyssa" pada kolom cari untuk memfilter baris catatan secara langsung.
            </div>
          </>
        )}

        {activeTab === 'statistik' && (
          <>
            <div>
              <span className="app-sample-tag" style={{ marginBottom: '8px' }}>Transparansi Wali Santri</span>
              <h3>Tautan Aman Tanpa Login &amp; Laporan PDF Standar A4</h3>
            </div>
            <p className="muted">
              Orang tua santri tidak dibebani keharusan mendaftar akun atau mengingat kata sandi. Cukup membuka tautan slug acak yang dibagikan guru melalui WhatsApp.
            </p>
            <ul className="demo__facts">
              <li>
                <span aria-hidden="true">&bull;</span>
                <div>
                  <strong>Slug Acak Kriptografis:</strong> Menggunakan pengidentifikasi acak unik (misal /smith-7xK9p2). Jika tautan bocor, admin dapat menerbitkan ulang tautan baru dengan satu klik.
                </div>
              </li>
              <li>
                <span aria-hidden="true">&bull;</span>
                <div>
                  <strong>Dukungan Multi-Santri Kakak-Adik:</strong> Guru dapat menggabungkan dua santri dalam satu tautan (contoh: /smith-7xK9p2+alyssa-3mQ8p1) sehingga orang tua melihat keduanya dalam satu layar.
                </div>
              </li>
              <li>
                <span aria-hidden="true">&bull;</span>
                <div>
                  <strong>Generator Dokumen PDF 1.4 Native:</strong> Dibuat langsung oleh peramban tanpa server berat, menghasilkan berkas A4 landscape rapi siap cetak untuk arsip rumah.
                </div>
              </li>
            </ul>
            <div className="demo__try">
              <b>Coba di iPhone samping:</b> Ketuk tombol "Buka Pratinjau Rekap PDF" untuk melihat lembar matriks 5 sesi shalat A4 Landscape.
            </div>
          </>
        )}

        {/* Simulator Switcher di Luar HP */}
        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--ink)' }}>
          <button
            type="button"
            className="switch"
            role="switch"
            aria-checked={isOffline}
            onClick={handleToggleOffline}
          >
            <span className="switch__track" aria-hidden="true"></span>
            <span>Simulasi Mode Luring (Offline)</span>
          </button>
          <div className="app-small" style={{ marginTop: '8px' }}>
            {isOffline
              ? 'Status: Sinyal dimatikan. Data yang diinput tersimpan aman di antrean memori IndexedDB lokal HP.'
              : 'Status: Sinyal internet normal terhubung ke server.'}
          </div>
        </div>
      </div>

      {/* Kolom Kanan: iPhone 17 Pro Mockup Frame */}
      <div className="demo__phone">
        <div className="phone-slot">
          <div className="iphone" role="region" aria-label="Simulasi Aplikasi Halaqoh di iPhone 17 Pro">
            {/* Tombol Fisik Frame iPhone 17 Pro */}
            <div className="iphone__btn iphone__btn--action" title="Action Button"></div>
            <div className="iphone__btn iphone__btn--vol-up" title="Volume Up"></div>
            <div className="iphone__btn iphone__btn--vol-down" title="Volume Down"></div>
            <div className="iphone__btn iphone__btn--power" title="Side Button"></div>
            <div className="iphone__btn iphone__btn--camera" title="Camera Control"></div>

            {/* Bezel Hitam Presisi */}
            <div className="iphone__bezel">
              <div className="iphone__screen">
                {/* Dynamic Island */}
                <div className="iphone__island" aria-hidden="true"></div>

                {/* Status Bar iPhone */}
                <div className="iphone__statusbar" aria-hidden="true">
                  <span>18:30</span>
                  <div className="iphone__status-icons">
                    {isOffline ? (
                      <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--danger)' }}>LURING</span>
                    ) : (
                      <svg width="14" height="11" viewBox="0 0 14 11" fill="currentColor">
                        <path d="M1 9.5h2v-2H1v2zm3 0h2v-4H4v4zm3 0h2v-6H7v6zm3 0h2v-9h-2v9z" />
                      </svg>
                    )}
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <rect x="0.5" y="0.5" width="12" height="10" rx="2" />
                      <path d="M13.5 3.5v4" strokeLinecap="round" />
                      <rect x="2" y="2" width="7" height="7" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* Aplikasi Halaqoh di Layar HP */}
                <div className="app">
                  {/* Toast Notifikasi di Layar HP */}
                  <div className="app-toast" data-show={Boolean(toastMsg)}>
                    {toastMsg}
                  </div>

                  {/* Header Aplikasi Halaqoh */}
                  <div className="app-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className="brand-logo">
                        <img src="/favicon.png" alt="Halaqoh" width="396" height="134" />
                      </span>
                    </div>
                    <div className="app-header__font">
                      <img src="/demo/fontsize-logo.png" alt="Ukuran Font" width="20" height="20" />
                    </div>
                    <div className="app-header__right">
                      <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Guru</span>
                    </div>
                  </div>

                  {/* Area Konten Ber-scroll */}
                  <div className="app-scroll">
                    {/* Banner Peringatan Luring jika Offline */}
                    {isOffline && (
                      <div className="app-offline">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="1" y1="1" x2="23" y2="23" />
                          <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
                          <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
                          <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
                          <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
                          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                          <line x1="12" y1="20" x2="12.01" y2="20" />
                        </svg>
                        <div>
                          <strong>Mode luring aktif.</strong> Entri absensi otomatis disimpan ke antrean memori HP ({offlineQueueCount} data tersimpan).
                        </div>
                      </div>
                    )}

                    {/* LAYAR 1: ABSEN */}
                    {activeTab === 'absen' && (
                      <div className="app-screen">
                        <div className="app-card">
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                            <div>
                              <div className="app-small">Senin, 12 Oktober 2026</div>
                              <div style={{ fontWeight: '800', color: 'var(--session-green)', fontSize: '15px' }}>
                                Sesi MAGRIB (17:30 - 19:00)
                              </div>
                            </div>
                            <span className="app-sample-tag">Aktif</span>
                          </div>

                          <form onSubmit={handleSaveEntry} className="app-stack">
                            <div>
                              <label className="app-label" htmlFor="demo-student">Nama Santri</label>
                              <select
                                id="demo-student"
                                className="app-input"
                                value={student}
                                onChange={(e) => setStudent(e.target.value as 'Smith' | 'Alyssa')}
                              >
                                <option value="Smith">Smith (Contoh)</option>
                                <option value="Alyssa">Alyssa (Contoh)</option>
                              </select>
                            </div>

                            <div>
                              <label className="app-label">Jenis Catatan</label>
                              <div className="app-seg" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                                <button
                                  type="button"
                                  aria-pressed={recordType === 'setoran'}
                                  onClick={() => setRecordType('setoran')}
                                >
                                  Setoran
                                </button>
                                <button
                                  type="button"
                                  aria-pressed={recordType === 'tahsin'}
                                  onClick={() => setRecordType('tahsin')}
                                >
                                  Tahsin
                                </button>
                                <button
                                  type="button"
                                  aria-pressed={recordType === 'iqro'}
                                  onClick={() => setRecordType('iqro')}
                                >
                                  Iqro
                                </button>
                              </div>
                            </div>

                            {recordType === 'iqro' ? (
                              <div className="app-stack">
                                <div>
                                  <label className="app-label" htmlFor="demo-iqro-jilid">Pilih Jilid Iqro</label>
                                  <select
                                    id="demo-iqro-jilid"
                                    className="app-input"
                                    value={iqroJilid}
                                    onChange={(e) => setIqroJilid(Number(e.target.value))}
                                  >
                                    {[1, 2, 3, 4, 5, 6].map((n) => (
                                      <option key={n} value={n}>Iqro Jilid {n}</option>
                                    ))}
                                  </select>
                                </div>
                                <div className="app-row">
                                  <div>
                                    <label className="app-label" htmlFor="demo-iqro-from">Dari Halaman</label>
                                    <input
                                      id="demo-iqro-from"
                                      type="number"
                                      min={1}
                                      max={100}
                                      className="app-input"
                                      value={iqroPageFrom}
                                      onChange={(e) => setIqroPageFrom(Number(e.target.value))}
                                    />
                                  </div>
                                  <div>
                                    <label className="app-label" htmlFor="demo-iqro-to">Sampai Halaman</label>
                                    <input
                                      id="demo-iqro-to"
                                      type="number"
                                      min={1}
                                      max={100}
                                      className="app-input"
                                      value={iqroPageTo}
                                      onChange={(e) => setIqroPageTo(Number(e.target.value))}
                                    />
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="app-stack">
                                <div>
                                  <label className="app-label">Metode Bacaan</label>
                                  <div className="app-seg" style={{ gridTemplateColumns: '1fr 1fr' }}>
                                    <button
                                      type="button"
                                      aria-pressed={recordMethod === 'surat'}
                                      onClick={() => setRecordMethod('surat')}
                                    >
                                      Surat &amp; Ayat
                                    </button>
                                    <button
                                      type="button"
                                      aria-pressed={recordMethod === 'halaman'}
                                      onClick={() => setRecordMethod('halaman')}
                                    >
                                      Halaman Mushaf
                                    </button>
                                  </div>
                                </div>

                                {recordMethod === 'surat' ? (
                                  <>
                                    <div>
                                      <label className="app-label" htmlFor="demo-surah">Pilih Surat</label>
                                      <select
                                        id="demo-surah"
                                        className="app-input"
                                        value={surahNo}
                                        onChange={(e) => {
                                          const no = Number(e.target.value);
                                          setSurahNo(no);
                                          const s = SURAHS.find((item) => item.no === no);
                                          setAyatFrom(1);
                                          setAyatTo(Math.min(10, s?.ayat || 10));
                                        }}
                                      >
                                        {SURAHS.map((s) => (
                                          <option key={s.no} value={s.no}>
                                            {s.no}. {s.name} ({s.ayat} ayat)
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                    <div className="app-row">
                                      <div>
                                        <label className="app-label" htmlFor="demo-ayat-from">Dari Ayat</label>
                                        <input
                                          id="demo-ayat-from"
                                          type="number"
                                          min={1}
                                          max={currentSurah.ayat}
                                          className="app-input"
                                          value={ayatFrom}
                                          onChange={(e) => setAyatFrom(Number(e.target.value))}
                                        />
                                      </div>
                                      <div>
                                        <label className="app-label" htmlFor="demo-ayat-to">Sampai Ayat</label>
                                        <input
                                          id="demo-ayat-to"
                                          type="number"
                                          min={1}
                                          max={currentSurah.ayat}
                                          className="app-input"
                                          value={ayatTo}
                                          onChange={(e) => setAyatTo(Number(e.target.value))}
                                        />
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <div className="app-row">
                                    <div>
                                      <label className="app-label" htmlFor="demo-page-from">Halaman Awal</label>
                                      <input
                                        id="demo-page-from"
                                        type="number"
                                        min={1}
                                        max={604}
                                        className="app-input"
                                        value={pageFrom}
                                        onChange={(e) => setPageFrom(Number(e.target.value))}
                                      />
                                    </div>
                                    <div>
                                      <label className="app-label" htmlFor="demo-page-to">Halaman Akhir</label>
                                      <input
                                        id="demo-page-to"
                                        type="number"
                                        min={1}
                                        max={604}
                                        className="app-input"
                                        value={pageTo}
                                        onChange={(e) => setPageTo(Number(e.target.value))}
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}

                            <button type="submit" className="app-btn app-btn--block" style={{ marginTop: '4px' }}>
                              Simpan Entri Absensi
                            </button>
                          </form>
                        </div>

                        {/* Daftar Entri Hari Ini */}
                        <div className="app-card">
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <div style={{ fontWeight: '700', fontSize: '14px' }}>
                              Entri Hari Ini ({entries.length})
                            </div>
                            <span className="app-small">Magrib</span>
                          </div>

                          <div>
                            {entries.map((item) => (
                              <div key={item.id} className="app-entry">
                                <div>
                                  <div className="app-entry__name">{item.student}</div>
                                  <div className="app-small">
                                    <span style={{ textTransform: 'capitalize', fontWeight: '600' }}>{item.type}</span>: {item.desc}
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  className="app-icon-btn"
                                  onClick={() => handleDeleteEntry(item.id)}
                                  title="Hapus entri ini"
                                  aria-label={`Hapus entri ${item.student}`}
                                >
                                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                  </svg>
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* LAYAR 2: KALENDER */}
                    {activeTab === 'kalender' && (
                      <div className="app-screen">
                        <div className="app-card">
                          <div style={{ textAlign: 'center', fontWeight: '700', fontSize: '15px', marginBottom: '12px' }}>
                            Oktober 2026
                          </div>

                          <div className="app-cal-grid" style={{ marginBottom: '6px' }}>
                            {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((day) => (
                              <div key={day} className="app-cal-head">{day}</div>
                            ))}
                          </div>

                          {/* Grid Tanggal Oktober 2026 (Kamis 1 Okt) */}
                          <div className="app-cal-grid">
                            <div className="app-cal-empty"></div>
                            <div className="app-cal-empty"></div>
                            <div className="app-cal-empty"></div>
                            {/* Hari 1: Kamis */}
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(1)}>1</button>
                            {/* Hari 2: Jum'at (Ngaji) */}
                            <button type="button" className="app-cal-day" data-has="true" onClick={() => setSelectedDate(2)}>
                              2<span className="app-cal-day__dot"></span>
                            </button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(3)}>3</button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(4)}>4</button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(5)}>5</button>
                            {/* Hari 6: Selasa (Ngaji) */}
                            <button type="button" className="app-cal-day" data-has="true" onClick={() => setSelectedDate(6)}>
                              6<span className="app-cal-day__dot"></span>
                            </button>
                            {/* Hari 7: Rabu (Ngaji) */}
                            <button type="button" className="app-cal-day" data-has="true" onClick={() => setSelectedDate(7)}>
                              7<span className="app-cal-day__dot"></span>
                            </button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(8)}>8</button>
                            {/* Hari 9: Jum'at (Ngaji) */}
                            <button type="button" className="app-cal-day" data-has="true" onClick={() => setSelectedDate(9)}>
                              9<span className="app-cal-day__dot"></span>
                            </button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(10)}>10</button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(11)}>11</button>
                            {/* Hari 12: Senin (Hari Ini) */}
                            <button type="button" className="app-cal-day" data-today="true" data-has="true" onClick={() => setSelectedDate(12)}>
                              12<span className="app-cal-day__dot"></span>
                            </button>
                            {/* Hari 13: Selasa (Ngaji) */}
                            <button type="button" className="app-cal-day" data-has="true" onClick={() => setSelectedDate(13)}>
                              13<span className="app-cal-day__dot"></span>
                            </button>
                            {/* Hari 14: Rabu (Ngaji) */}
                            <button type="button" className="app-cal-day" data-has="true" onClick={() => setSelectedDate(14)}>
                              14<span className="app-cal-day__dot"></span>
                            </button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(15)}>15</button>
                            {/* Hari 16: Libur */}
                            <button type="button" className="app-cal-day" data-libur="true" onClick={() => setSelectedDate(16)}>16</button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(17)}>17</button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(18)}>18</button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(19)}>19</button>
                            <button type="button" className="app-cal-day" data-has="true" onClick={() => setSelectedDate(20)}>
                              20<span className="app-cal-day__dot"></span>
                            </button>
                            <button type="button" className="app-cal-day" data-has="true" onClick={() => setSelectedDate(21)}>
                              21<span className="app-cal-day__dot"></span>
                            </button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(22)}>22</button>
                            <button type="button" className="app-cal-day" data-has="true" onClick={() => setSelectedDate(23)}>
                              23<span className="app-cal-day__dot"></span>
                            </button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(24)}>24</button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(25)}>25</button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(26)}>26</button>
                            <button type="button" className="app-cal-day" data-has="true" onClick={() => setSelectedDate(27)}>
                              27<span className="app-cal-day__dot"></span>
                            </button>
                            <button type="button" className="app-cal-day" data-has="true" onClick={() => setSelectedDate(28)}>
                              28<span className="app-cal-day__dot"></span>
                            </button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(29)}>29</button>
                            <button type="button" className="app-cal-day" data-has="true" onClick={() => setSelectedDate(30)}>
                              30<span className="app-cal-day__dot"></span>
                            </button>
                            <button type="button" className="app-cal-day" onClick={() => setSelectedDate(31)}>31</button>
                          </div>

                          <div className="app-legend">
                            <span><i style={{ background: 'var(--hl)' }}></i> Ada ngaji</span>
                            <span><i style={{ borderWidth: '2px' }}></i> Hari ini</span>
                            <span><i style={{ background: 'var(--sand)' }}></i> Libur</span>
                          </div>
                        </div>

                        <div className="app-card">
                          <div style={{ fontWeight: '700', fontSize: '14px', marginBottom: '6px' }}>
                            Jadwal Rutin: Selasa, Rabu, Jum'at
                          </div>
                          <div className="app-small">
                            Target bulan Oktober: 13 hari aktif. Sesi utama: Magrib (17:30 - 19:00 WIB).
                          </div>
                        </div>
                      </div>
                    )}

                    {/* LAYAR 3: RIWAYAT */}
                    {activeTab === 'riwayat' && (
                      <div className="app-screen">
                        <div className="app-card">
                          <label className="app-label" htmlFor="demo-search-history">Cari Riwayat Santri</label>
                          <input
                            id="demo-search-history"
                            type="search"
                            className="app-input"
                            placeholder="Ketik Smith atau Alyssa..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>

                        <div className="app-table-wrap">
                          <table className="app-table">
                            <thead>
                              <tr>
                                <th className="sticky-col">Santri</th>
                                <th>Tanggal</th>
                                <th>Sesi</th>
                                <th>Jenis</th>
                                <th>Capaian</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                { name: 'Smith', date: '12 Okt', sess: 'Magrib', type: 'Setoran', detail: 'Al-Mulk (1-15)' },
                                { name: 'Alyssa', date: '12 Okt', sess: 'Magrib', type: 'Iqro', detail: 'Iqro 4 (Hlm. 12-14)' },
                                { name: 'Smith', date: '09 Okt', sess: 'Magrib', type: 'Tahsin', detail: 'Al-Baqarah (1-10)' },
                                { name: 'Alyssa', date: '09 Okt', sess: 'Magrib', type: 'Iqro', detail: 'Iqro 4 (Hlm. 10-11)' },
                                { name: 'Smith', date: '07 Okt', sess: 'Magrib', type: 'Setoran', detail: 'An-Naba (1-20)' },
                                { name: 'Alyssa', date: '07 Okt', sess: 'Magrib', type: 'Iqro', detail: 'Iqro 4 (Hlm. 8-9)' }
                              ]
                                .filter((r) => r.name.toLowerCase().includes(searchQuery.toLowerCase()))
                                .map((row, idx) => (
                                  <tr key={idx}>
                                    <td className="sticky-col" style={{ fontWeight: '700' }}>{row.name}</td>
                                    <td>{row.date}</td>
                                    <td>{row.sess}</td>
                                    <td>{row.type}</td>
                                    <td>{row.detail}</td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* LAYAR 4: STATISTIK & TAUTAN ORANG TUA */}
                    {activeTab === 'statistik' && (
                      <div className="app-screen">
                        <div className="app-card">
                          <div style={{ fontWeight: '700', fontSize: '14px', marginBottom: '8px' }}>
                            Capaian Kehadiran Oktober 2026
                          </div>
                          <div className="app-small" style={{ marginBottom: '14px' }}>
                            Target kehadiran bulanan: 13 hari aktif mengaji
                          </div>

                          <div className="app-bar">
                            <span>Smith</span>
                            <div className="app-bar__track">
                              <div className="app-bar__fill" style={{ width: '92%' }}></div>
                              <div className="app-bar__target" style={{ left: '85%' }}></div>
                            </div>
                            <span style={{ fontWeight: '700', textAlign: 'right' }}>12/13</span>
                          </div>

                          <div className="app-bar">
                            <span>Alyssa</span>
                            <div className="app-bar__track">
                              <div className="app-bar__fill" style={{ width: '100%' }}></div>
                              <div className="app-bar__target" style={{ left: '85%' }}></div>
                            </div>
                            <span style={{ fontWeight: '700', textAlign: 'right' }}>13/13</span>
                          </div>
                        </div>

                        <div className="app-card">
                          <div style={{ fontWeight: '700', fontSize: '14px', marginBottom: '6px' }}>
                            Tautan Publik Wali Santri
                          </div>
                          <div className="app-small" style={{ marginBottom: '10px' }}>
                            Dapat dibuka di ponsel orang tua tanpa login atau sandi:
                          </div>

                          <div className="app-slug">
                            https://halaqoh.app/smith-7xK9p2+alyssa-3mQ8p1
                          </div>

                          <button
                            type="button"
                            className="app-btn app-btn--block"
                            style={{ marginTop: '12px' }}
                            onClick={() => setShowPdfPreview(true)}
                          >
                            Buka Pratinjau Rekap PDF
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* SHEET: DETAIL TANGGAL KALENDER */}
                  {selectedDate !== null && (
                    <>
                      <div className="app-sheet-backdrop" onClick={() => setSelectedDate(null)}></div>
                      <div className="app-sheet" role="dialog" aria-modal="true" aria-label="Detail Tanggal">
                        <div className="app-sheet__head">
                          <span>{selectedDate} Oktober 2026</span>
                          <button
                            type="button"
                            onClick={() => setSelectedDate(null)}
                            style={{ border: 0, background: 'none', cursor: 'pointer', fontWeight: '700' }}
                          >
                            Tutup
                          </button>
                        </div>
                        <div className="app-sheet__body">
                          <div style={{ fontWeight: '700', fontSize: '13px', marginBottom: '8px' }}>
                            Catatan Sesi Magrib:
                          </div>
                          <div className="app-entry">
                            <div>
                              <div className="app-entry__name">Smith</div>
                              <div className="app-small">Setoran: Surat Al-Mulk (Ayat 1-15)</div>
                            </div>
                            <span className="app-sample-tag">Hadir</span>
                          </div>
                          <div className="app-entry">
                            <div>
                              <div className="app-entry__name">Alyssa</div>
                              <div className="app-small">Iqro: Jilid 4 Halaman 12-14</div>
                            </div>
                            <span className="app-sample-tag">Hadir</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* SHEET: PRATINJAU PDF REKAP A4 */}
                  {showPdfPreview && (
                    <>
                      <div className="app-sheet-backdrop" onClick={() => setShowPdfPreview(false)}></div>
                      <div className="app-sheet" style={{ maxHeight: '90%' }} role="dialog" aria-modal="true" aria-label="Pratinjau PDF">
                        <div className="app-sheet__head">
                          <span>Dokumen PDF Native (A4 Landscape)</span>
                          <button
                            type="button"
                            onClick={() => setShowPdfPreview(false)}
                            style={{ border: 0, background: 'none', cursor: 'pointer', fontWeight: '700' }}
                          >
                            Tutup
                          </button>
                        </div>
                        <div className="app-sheet__body">
                          <div className="pdf-page">
                            <h4>Rekap Ngaji Smith &amp; Alyssa</h4>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                              <span>Periode: Oktober 2026</span>
                              <span>Standar PDF 1.4 Native</span>
                            </div>
                            <table>
                              <thead>
                                <tr>
                                  <th>Tanggal</th>
                                  <th>Subuh</th>
                                  <th>Zuhur</th>
                                  <th>Ashar</th>
                                  <th>Magrib</th>
                                  <th>Isya</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>02 Okt</td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>Hadir (Al-Mulk 1-10)</td>
                                  <td>-</td>
                                </tr>
                                <tr>
                                  <td>07 Okt</td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>Hadir (An-Naba 1-20)</td>
                                  <td>-</td>
                                </tr>
                                <tr>
                                  <td>09 Okt</td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>Hadir (Al-Baqarah 1-10)</td>
                                  <td>-</td>
                                </tr>
                                <tr>
                                  <td>12 Okt</td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>Hadir (Al-Mulk 1-15)</td>
                                  <td>-</td>
                                </tr>
                              </tbody>
                            </table>
                            <div style={{ marginTop: '8px', textAlign: 'center', opacity: 0.5, fontSize: '5.5px' }}>
                              Dokumen Resmi Sistem Halaqoh &bull; Siap Dicetak Lembar A4 Landscape
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* TabBar di Bawah Layar HP */}
                  <nav className="app-tabbar" aria-label="Menu Layar Ponsel">
                    <button
                      type="button"
                      className="app-tab"
                      aria-current={activeTab === 'absen' ? 'page' : undefined}
                      onClick={() => setActiveTab('absen')}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                      <span>Absen</span>
                    </button>

                    <button
                      type="button"
                      className="app-tab"
                      aria-current={activeTab === 'kalender' ? 'page' : undefined}
                      onClick={() => setActiveTab('kalender')}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>Kalender</span>
                    </button>

                    <button
                      type="button"
                      className="app-tab"
                      aria-current={activeTab === 'riwayat' ? 'page' : undefined}
                      onClick={() => setActiveTab('riwayat')}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="8" y1="6" x2="21" y2="6" />
                        <line x1="8" y1="12" x2="21" y2="12" />
                        <line x1="8" y1="18" x2="21" y2="18" />
                        <line x1="3" y1="6" x2="3.01" y2="6" />
                        <line x1="3" y1="12" x2="3.01" y2="12" />
                        <line x1="3" y1="18" x2="3.01" y2="18" />
                      </svg>
                      <span>Riwayat</span>
                    </button>

                    <button
                      type="button"
                      className="app-tab"
                      aria-current={activeTab === 'statistik' ? 'page' : undefined}
                      onClick={() => setActiveTab('statistik')}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </svg>
                      <span>Statistik</span>
                    </button>
                  </nav>
                </div>

                {/* Home Indicator iPhone */}
                <div className="iphone__home" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
        <p className="demo__caption">
          Simulasi antarmuka iPhone 17 Pro. Seluruh tombol interaktif bekerja langsung pada peramban Anda.
        </p>
      </div>
    </div>
  );
}
