import React, { useState, useEffect } from 'react';

interface SessionData {
  name: string;
  start: number;
  end: number;
  label: string;
}

const SESSIONS: SessionData[] = [
  { name: 'Sesi Subuh', start: 4 * 60, end: 6 * 60, label: '04:00 - 06:00' },
  { name: 'Sesi Zuhur', start: 11 * 60 + 30, end: 13 * 60 + 30, label: '11:30 - 13:30' },
  { name: 'Sesi Ashar', start: 14 * 60 + 30, end: 16 * 60 + 30, label: '14:30 - 16:30' },
  { name: 'Sesi Magrib', start: 17 * 60 + 30, end: 19 * 60, label: '17:30 - 19:00' },
  { name: 'Sesi Isya', start: 19 * 60, end: 21 * 60, label: '19:00 - 21:00' }
];

export default function LiveSessionCard() {
  const [currentTimeStr, setCurrentTimeStr] = useState<string>('--:-- WIB');
  const [sessionTitle, setSessionTitle] = useState<string>('Sesi Magrib');
  const [sessionTiming, setSessionTiming] = useState<string>('17:30 - 19:00');

  useEffect(() => {
    function computeSession() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentMins = hours * 60 + minutes;

      const hh = String(hours).padStart(2, '0');
      const mm = String(minutes).padStart(2, '0');
      setCurrentTimeStr(`${hh}:${mm} WIB`);

      const active = SESSIONS.find(s => currentMins >= s.start && currentMins < s.end);

      if (active) {
        setSessionTitle(`${active.name} (Aktif)`);
        setSessionTiming(active.label);
      } else {
        let next = SESSIONS.find(s => s.start > currentMins);
        if (!next) next = SESSIONS[0];
        setSessionTitle(`Berikutnya: ${next.name}`);
        setSessionTiming(next.label);
      }
    }

    computeSession();
    const timer = setInterval(computeSession, 20000);
    return () => clearInterval(timer);
  }, []);

  const triggerToast = (message: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('halaqoh:toast', { detail: message }));
    }
  };

  const handleCopyLink = async () => {
    const sampleUrl = 'https://app.halaqoh.app/dafi-ahmad-x7k9p2';
    try {
      await navigator.clipboard.writeText(sampleUrl);
      triggerToast('Tautan orang tua berhasil disalin ke clipboard!');
    } catch {
      triggerToast('Tautan tersalin: app.halaqoh.app/dafi-ahmad-x7k9p2');
    }
  };

  const handleSimulatePdf = () => {
    triggerToast('Simulasi PDF: Laporan Rekap Bulanan A4 Landscape siap diunduh.');
  };

  return (
    <div className="hero-card-preview bg-[var(--paper)] border-[1.5px] border-[var(--border-strong)] rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] overflow-hidden" id="hero-preview-box">
      <div className="preview-card-header px-4.5 py-3 bg-[var(--sand)] border-b-[1.5px] border-[var(--border-strong)] flex items-center justify-between">
        <span className="font-bold text-[0.85rem] text-[var(--ink)] tracking-tight">Simulasi Sesi Berjalan</span>
        <span className="preview-badge-status inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-[var(--radius-pill)] text-[0.775rem] font-bold text-[var(--ink)] border border-[var(--border-strong)]" aria-live="polite">
          <span className="w-2 h-2 rounded-full bg-[#10b981] inline-block"></span>
          {currentTimeStr}
        </span>
      </div>

      <div className="preview-card-body p-5 flex flex-col gap-4">
        <div className="session-indicator-box bg-[var(--cream-light)] border border-[var(--border-soft)] rounded-[var(--radius-md)] p-3.5 sm:p-4">
          <span className="session-label text-[0.75rem] font-bold uppercase tracking-wider text-[var(--ink-secondary)] block mb-1">
            Deteksi Jadwal Otomatis
          </span>
          <div className="session-active-name font-[var(--font-display)] text-[1.15rem] font-bold text-[var(--forest)] flex items-center justify-between">
            <span id="hero-current-session">{sessionTitle}</span>
            <span className="session-timing text-[0.8rem] font-[var(--font-body)] font-bold text-[var(--ink)] bg-[var(--sand)] px-2.5 py-0.5 rounded-[var(--radius-pill)] border border-[rgba(23,22,20,0.15)]" id="hero-session-hours">
              {sessionTiming}
            </span>
          </div>
        </div>

        <div className="demo-student-snippet bg-white border border-[var(--border-soft)] rounded-[var(--radius-md)] p-3.5 sm:p-4 flex flex-col gap-2">
          <div className="student-snippet-top flex justify-between items-baseline">
            <span className="student-name-text font-bold text-[0.975rem] text-[var(--ink)]">Ahmad Ziyad Fauzi</span>
            <span className="student-target-tag text-[0.75rem] font-semibold bg-[var(--hl-olive-subtle)] text-[var(--forest)] px-2 py-0.5 rounded-[var(--radius-pill)] border border-[rgba(42,90,68,0.2)]">
              Al-Qur'an & Hafalan
            </span>
          </div>
          <div className="student-reading-detail text-[0.85rem] text-[var(--ink-secondary)] leading-relaxed p-2.5 bg-[var(--cream-light)] rounded-[var(--radius-sm)] border-l-[3px] border-[var(--forest)]">
            <strong>Catatan Terakhir:</strong> Surat Al-Mulk (Ayat 1-15), tahsin lancar dan makhraj huruf 'Ain & Qaf sudah tepat.
          </div>
        </div>

        <div className="demo-student-snippet bg-[var(--cream-light)] border border-[var(--border-soft)] rounded-[var(--radius-md)] p-3.5 sm:p-4 flex flex-col gap-2">
          <div className="student-snippet-top flex justify-between items-baseline">
            <span className="student-name-text font-bold text-[0.975rem] text-[var(--ink)]">Fatimah Azzahra</span>
            <span className="student-target-tag text-[0.75rem] font-semibold bg-[var(--clay-subtle)] text-[var(--clay)] px-2 py-0.5 rounded-[var(--radius-pill)] border border-[rgba(166,88,44,0.2)]">
              Iqro 4
            </span>
          </div>
          <div className="student-reading-detail text-[0.85rem] text-[var(--ink-secondary)] leading-relaxed p-2.5 bg-white rounded-[var(--radius-sm)] border-l-[3px] border-[var(--clay)]">
            <strong>Catatan Terakhir:</strong> Halaman 18 s.d. 20, kaidah mad thobi'i 2 harakat telah dipahami dengan baik.
          </div>
        </div>

        <div className="card-quick-actions grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <button
            type="button"
            className="btn btn-secondary min-h-[44px] text-[0.85rem]"
            onClick={handleCopyLink}
            id="btn-copy-sample-slug"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            Salin Link Orang Tua
          </button>
          <button
            type="button"
            className="btn btn-primary min-h-[44px] text-[0.85rem]"
            onClick={handleSimulatePdf}
            id="btn-simulate-pdf"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Unduh PDF Contoh
          </button>
        </div>
      </div>
    </div>
  );
}
