import React, { useEffect, useState } from 'react';

interface ToastItem {
  id: string;
  message: string;
  type?: 'info' | 'success' | 'warn';
}

export default function ToastNotice() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const handleToast = (event: any) => {
      const id = `${Date.now()}-${Math.random()}`;
      const detail = event.detail;
      const message = typeof detail === 'string' ? detail : (detail?.message || 'Aksi disimulasikan');
      const type = typeof detail === 'object' ? detail.type || 'info' : 'info';

      const newToast: ToastItem = {
        id,
        message,
        type
      };

      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    };

    window.addEventListener('halaqoh:toast' as any, handleToast);
    return () => {
      window.removeEventListener('halaqoh:toast' as any, handleToast);
    };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div
      role="region"
      aria-live="polite"
      aria-label="Pemberitahuan Sistem"
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full px-4 sm:px-0 pointer-events-none"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[var(--paper)] text-[var(--ink)] border-2 border-[var(--border-strong)] p-3.5 rounded-[var(--radius-md)] shadow-[var(--shadow-md)] flex items-start gap-3 transition-all transform animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <span
            className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 bg-[var(--forest)]"
            aria-hidden="true"
          />
          <div className="flex-1 text-xs font-semibold leading-relaxed">
            {toast.message}
          </div>
          <button
            type="button"
            onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
            aria-label="Tutup pemberitahuan"
            className="text-[var(--ink-muted)] hover:text-[var(--ink)] text-xs font-bold px-1"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
