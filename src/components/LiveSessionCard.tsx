import { useState, useEffect } from 'react';

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
      triggerToast('Tautan disalin: app.halaqoh.app/dafi-ahmad-x7k9p2');
    }
  };

  const handleSimulatePdf = () => {
    triggerToast('Simulasi PDF: Laporan Rekapitulasi A4 Landscape siap diunduh.');
  };

  return (
    <div className="bg-[var(--tm-dark-surface)] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* Card Header */}
      <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
        <span className="font-serif text-lg tracking-wide text-white">
          Deteksi Waktu Shalat &amp; Sesi
        </span>
        <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-[var(--tm-accent-gold)]">
          <span className="w-2 h-2 rounded-full bg-[var(--tm-accent-gold)] animate-pulse"></span>
          {currentTimeStr}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col gap-5">
        
        {/* Active Session Banner */}
        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 flex items-center justify-between">
          <div>
            <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--tm-accent-gold)] font-medium block mb-1">
              Siklus Waktu Shalat Aktual
            </span>
            <div className="font-serif text-2xl text-white">
              {sessionTitle}
            </div>
          </div>
          <span className="text-xs uppercase tracking-wider bg-white/10 text-white px-3 py-1.5 rounded-full border border-white/10 font-sans">
            {sessionTiming}
          </span>
        </div>

        {/* Student 1 snippet */}
        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
          <div className="flex justify-between items-baseline mb-2">
            <span className="font-serif text-lg text-white font-medium">Ahmad Ziyad Fauzi</span>
            <span className="text-[0.6875rem] uppercase tracking-wider text-[var(--tm-accent-gold)] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
              Al-Qur&#39;an &amp; Hafalan
            </span>
          </div>
          <p className="text-xs text-[var(--tm-stone)]/80 leading-relaxed font-light">
            Surat Al-Mulk (Ayat 1-15): Tahsin lancar, pelafalan makharijul huruf &lsquo;Ain dan Qaf tuntas.
          </p>
        </div>

        {/* Student 2 snippet */}
        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
          <div className="flex justify-between items-baseline mb-2">
            <span className="font-serif text-lg text-white font-medium">Fatimah Azzahra</span>
            <span className="text-[0.6875rem] uppercase tracking-wider text-[var(--tm-accent-gold)] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
              Iqro Jilid 4
            </span>
          </div>
          <p className="text-xs text-[var(--tm-stone)]/80 leading-relaxed font-light">
            Halaman 18 sampai 20: Kaidah mad thobi&#39;i 2 harakat dipahami dan dibaca konsisten.
          </p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full py-3 px-4 rounded-full border border-white/15 bg-white/5 text-[var(--tm-stone)] hover:bg-white/10 hover:text-white text-xs uppercase tracking-wider font-medium transition-all"
          >
            Salin Tautan Orang Tua
          </button>
          <button
            type="button"
            onClick={handleSimulatePdf}
            className="w-full py-3 px-4 rounded-full bg-[var(--tm-stone)] text-[var(--tm-dark)] hover:bg-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md"
          >
            Unduh Laporan PDF
          </button>
        </div>

      </div>
    </div>
  );
}
