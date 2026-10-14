/**
 * HALAQOH CLIENT CONTROLLER & BILINGUAL ENGINE
 * Standard: Vanilla ES Module, Zero external framework runtime
 * Compliance: antislop R-02 (no em dash), R-26 (interactive element behaviors), R-32 (keyboard a11y)
 */

const translations = {
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.roles': 'Alur Peran',
    'nav.curriculum': 'Kapabilitas',
    'nav.offline': 'Sistem Luring',
    'nav.faq': 'Tanya Jawab',
    'nav.cta': 'Request Demo',

    // Hero
    'hero.desc': 'Sistem pencatatan presensi dan setoran hafalan murid.',
    'hero.cta': 'Request Demo',
    'hero.scroll': 'Explore Features ↓',

    // Overview
    'overview.kicker': 'Pencatatan Berbasis Nilai',
    'overview.title': 'Pencatatan absensi dan setoran hafalan murid.',
    'overview.lead': 'Dibuat untuk guru ngaji dan pengurus majelis taklim. Orang tua murid dapat melihat rekap progres anak langsung tanpa perlu membuat akun.',
    'overview.cta': 'Request Demo',

    // Spec Sheet
    'spec.title': 'Spesifikasi Halaqoh',
    'spec.1.title': '1. Penyimpanan Luring Mandiri',
    'spec.1.desc': 'Data tersimpan di peramban via IndexedDB. Form tetap berjalan normal tanpa internet.',
    'spec.2.title': '2. Deteksi Otomatis 5 Sesi Shalat',
    'spec.2.desc': 'Subuh, Zuhur, Ashar, Magrib, dan Isya terdeteksi otomatis sesuai zona waktu lokal.',
    'spec.3.title': '3. Akses Publik Tanpa Sandi',
    'spec.3.desc': 'Orang tua membuka rekap lewat tautan unik via WhatsApp, tanpa perlu kata sandi.',
    'spec.4.title': '4. Cetak PDF A4 Standar',
    'spec.4.desc': 'Cetak laporan matriks bulanan format PDF A4 landscape langsung dari peramban.',

    // Roles
    'roles.kicker': 'Alur Tiga Peran',
    'roles.title': 'Tiga peran pengguna dengan hak akses terpisah.',
    'roles.lead': 'Hak akses dipisahkan di server: guru mencatat bimbingan, orang tua memantau progres, dan pengurus mengelola data.',
    'role.1.num': '1',
    'role.1.scope': 'Antarmuka: Absensi, Kalender, Riwayat, Statistik',
    'role.1.title': 'Guru Pengajar',
    'role.1.p1.title': 'Presensi Luring',
    'role.1.p1.desc': 'Catat kehadiran dan setoran langsung dari ponsel tanpa internet.',
    'role.1.p2.title': 'Kurikulum Lengkap',
    'role.1.p2.desc': "Dukungan Iqro 1 sampai 6 dan 114 surat Al-Qur'an.",
    'role.1.p3.title': 'Koreksi Fleksibel',
    'role.1.p3.desc': 'Ubah atau perbaiki catatan presensi harian jika keliru.',
    'role.1.p4.title': 'Berbagi Cepat',
    'role.1.p4.desc': 'Salin tautan profil murid langsung ke WhatsApp orang tua.',

    'role.2.num': '2',
    'role.2.scope': 'Antarmuka: Halaman murid via tautan aman (/[slug])',
    'role.2.title': 'Orang Tua Murid',
    'role.2.p1.title': 'Akses Tanpa Sandi',
    'role.2.p1.desc': 'Buka laporan di browser ponsel tanpa aplikasi dan tanpa password.',
    'role.2.p2.title': 'Matriks 5 Sesi Shalat',
    'role.2.p2.desc': 'Pantau rekap kehadiran harian di 5 waktu shalat.',
    'role.2.p3.title': 'Tautan Multi-Murid',
    'role.2.p3.desc': 'Tampilan terpadu untuk kakak-beradik dalam satu tautan.',
    'role.2.p4.title': 'Unduh Laporan PDF',
    'role.2.p4.desc': 'Unduh rekap bulanan format PDF siap cetak.',

    'role.3.num': '3',
    'role.3.scope': 'Antarmuka: Dasbor administrasi (/admin)',
    'role.3.title': 'Pengurus Majelis',
    'role.3.p1.title': 'Manajemen Murid',
    'role.3.p1.desc': 'Daftarkan murid, atur status kelas, dan kelola tautan slug.',
    'role.3.p2.title': 'Akun Pengajar',
    'role.3.p2.desc': 'Atur akun guru, penugasan sesi, dan setel ulang sandi.',
    'role.3.p3.title': 'Kalender & Libur',
    'role.3.p3.desc': 'Jadwalkan kalender pengajian dan penetapan hari libur.',
    'role.3.p4.title': 'Cadangan & Ekspor',
    'role.3.p4.desc': 'Unduh arsip database JSON utuh dan ekspor data CSV aman.',

    // Capabilities (Updated)
    'curriculum.kicker': 'Kapabilitas',
    'curriculum.title': 'Fitur pokok untuk kegiatan mengaji harian.',
    'curriculum.lead': 'Formulir ringkas dan terarah, agar pengajar fokus mendampingi murid.',
    'curriculum.p2.1.title': 'Cetak PDF A4 Native',
    'curriculum.p2.1.desc': 'Dokumen matriks presensi landscape A4 terbuat langsung di peramban tanpa pihak ketiga.',
    'curriculum.p2.2.title': 'Cadangan JSON & Ekspor CSV',
    'curriculum.p2.2.desc': 'Unduh arsip database JSON lengkap atau CSV yang terlindung dari injeksi formula.',
    'curriculum.p2.3.title': 'Pemulihan Data Atomik',
    'curriculum.p2.3.desc': 'Pulihkan data dalam satu transaksi aman dengan proteksi kunci arsip cadangan.',
    'curriculum.p2.4.title': 'Privasi Murid No-Index',
    'curriculum.p2.4.desc': 'Halaman murid dilengkapi proteksi anti-perayapan agar tidak terindeks di mesin pencari.',

    // Offline Architecture (Updated)
    'offline.kicker': 'Arsitektur Luring',
    'offline.title': 'Pencatatan tetap aktif saat sinyal internet padam.',
    'offline.lead': 'Koneksi internet di musholla kerap tidak stabil. Sistem tetap mencatat data tanpa gangguan jaringan.',
    'offline.s1.title': '1. Cache Data Perangkat',
    'offline.s1.desc': 'Aplikasi dan daftar murid tersimpan di memori perangkat, siap dipakai saat offline.',
    'offline.s2.title': '2. Antrean Lokal IndexedDB',
    'offline.s2.desc': 'Saat menyimpan tanpa internet, data langsung masuk ke antrean lokal peramban.',
    'offline.s3.title': '3. Indikator Antrean Terbaca',
    'offline.s3.desc': 'Jumlah catatan yang belum tersinkron tampil di bilah atas layar secara transparan.',
    'offline.s4.title': '4. Sinkronisasi Otomatis',
    'offline.s4.desc': 'Saat koneksi kembali aktif, antrean tersinkronkan ke server secara kronologis.',

    // FAQ
    'faq.kicker': 'Tanya Jawab',
    'faq.title': 'Pertanyaan umum seputar operasional Halaqoh.',
    'faq.lead': 'Informasi penting seputar akses orang tua, privasi murid, dan pencatatan luring.',
    'faq.q1': 'Apakah orang tua murid harus mendaftar akun dan membuat kata sandi?',
    'faq.a1': 'Tidak. Orang tua cukup membuka tautan unik murid (contoh: /murid-7xK9p2) via WhatsApp tanpa perlu login atau unduh aplikasi.',
    'faq.q2': 'Bagaimana jika jaringan internet di musholla mati saat jam mengaji?',
    'faq.a2': 'Pencatatan tetap normal. Data disimpan di memori peramban (IndexedDB) dan otomatis disinkronkan saat internet kembali aktif.',
    'faq.q3': 'Apakah nama dan riwayat setoran murid dapat ditemukan di Google?',
    'faq.a3': 'Tidak. Seluruh halaman profil murid dilindungi tag noindex dan disallow agar tidak terindeks oleh mesin pencari publik.',
    'faq.q4': 'Apakah murid bisa dicatat membaca Iqro sekaligus setoran surat dalam satu pertemuan?',
    'faq.a4': "Bisa. Pengajar dapat menginput capaian halaman Iqro dan setoran surat Al-Qur'an pada sesi yang sama tanpa saling menimpa.",
    'faq.q5': 'Bagaimana cara pengurus memindahkan data jika berganti perangkat?',
    'faq.a5': 'Pengurus dapat mengunduh cadangan database JSON utuh dan CSV kapan saja melalui dasbor /admin, lalu memulihkannya ke perangkat baru.',

    // Demo Section
    'demo.kicker': 'Penerapan Pengajian',
    'demo.title': 'Mulai pencatatan pengajian yang lebih teratur.',
    'demo.lead': 'Gunakan Halaqoh untuk kemudahan guru ngaji, transparansi orang tua, dan ketertiban administrasi. Coba demo langsung melalui formulir.',
    'demo.btn': 'Request Demo Sekarang',

    // Footer
    'footer.mission': 'Sistem pencatatan presensi dan setoran hafalan murid.',
    'footer.col1.title': 'Produk',
    'footer.col1.l1': 'Alur Peran',
    'footer.col1.l2': 'Kapabilitas & PDF',
    'footer.col1.l3': 'Sistem Luring',
    'footer.col1.l4': 'Tanya Jawab',
    'footer.col2.title': 'Komunitas',
    'footer.col2.l1': 'Panduan Pengajar',
    'footer.col2.l2': 'Akses Wali Murid',
    'footer.col2.l3': 'Dasbor Pengurus',
    'footer.col2.l4': 'Request Demo',
    'footer.col3.title': 'Keamanan',
    'footer.col3.l1': 'Privasi Murid No-Index',
    'footer.col3.l2': 'Ekspor Cadangan JSON',
    'footer.col3.l3': 'Bebas Biaya Langganan',
    'footer.col3.l4': 'Formulir Demo Tally',
    'footer.copyright': '© 2026 Halaqoh. ikhlasulabda.',
    'footer.backToTop': 'Kembali ke Atas ↑',
    'footer.ctaBtn': 'Request Demo →'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.roles': 'Roles',
    'nav.curriculum': 'Capabilities',
    'nav.offline': 'Offline-First',
    'nav.faq': 'FAQ',
    'nav.cta': 'Request Demo',

    // Hero
    'hero.desc': 'A student attendance and recitation tracking system.',
    'hero.cta': 'Request Demo',
    'hero.scroll': 'Explore Features ↓',

    // Overview
    'overview.kicker': 'Values-First Progress Tracking',
    'overview.title': 'Simple attendance and recitation records for students.',
    'overview.lead': 'Built for Quranic teachers and study circles. Parents access progress reports directly without creating an account.',
    'overview.cta': 'Request Demo',

    // Spec Sheet
    'spec.title': 'Halaqoh Specifications',
    'spec.1.title': '1. Offline Storage',
    'spec.1.desc': 'Stores data in browser IndexedDB. Forms work normally without internet.',
    'spec.2.title': '2. Automatic 5 Prayer Sessions',
    'spec.2.desc': 'Subuh, Zuhur, Ashar, Magrib, and Isya detected automatically by local time.',
    'spec.3.title': '3. Passwordless Parent Access',
    'spec.3.desc': 'Parents view monthly reports via unique WhatsApp links with zero login.',
    'spec.4.title': '4. A4 Landscape PDF Export',
    'spec.4.desc': 'Print monthly attendance reports in landscape A4 directly from the browser.',

    // Roles
    'roles.kicker': 'Role Workflow',
    'roles.title': 'Three distinct user roles with separated access.',
    'roles.lead': 'Access is enforced at the server: teachers record lessons, parents view progress, and admins manage records.',
    'role.1.num': '1',
    'role.1.scope': 'Interface: Attendance, Calendar, Logs, Statistics',
    'role.1.title': 'Teachers & Instructors',
    'role.1.p1.title': 'Offline Attendance Logging',
    'role.1.p1.desc': 'Record attendance and recitation milestones without internet.',
    'role.1.p2.title': 'Full Curriculum Support',
    'role.1.p2.desc': 'Covers Iqro volumes 1 to 6 and 114 Quranic Surahs.',
    'role.1.p3.title': 'Flexible Corrections',
    'role.1.p3.desc': 'Edit or correct daily attendance records anytime.',
    'role.1.p4.title': 'Quick Progress Sharing',
    'role.1.p4.desc': 'Copy and share student profile links directly to WhatsApp.',

    'role.2.num': '2',
    'role.2.scope': 'Interface: Student portal via secure slug (/[slug])',
    'role.2.title': 'Parents & Guardians',
    'role.2.p1.title': 'Zero Login Friction',
    'role.2.p1.desc': 'Open reports in mobile browsers with no apps or passwords.',
    'role.2.p2.title': '5-Prayer Attendance Matrix',
    'role.2.p2.desc': 'Track daily attendance across all five prayer times.',
    'role.2.p3.title': 'Multi-Student View',
    'role.2.p3.desc': 'Unified dashboard for siblings within a single link.',
    'role.2.p4.title': 'A4 PDF Download',
    'role.2.p4.desc': 'Download monthly report PDFs ready for printing.',

    'role.3.num': '3',
    'role.3.scope': 'Interface: Administration suite (/admin)',
    'role.3.title': 'Administrators & Staff',
    'role.3.p1.title': 'Student Directory Control',
    'role.3.p1.desc': 'Register students, manage classes, and update link slugs.',
    'role.3.p2.title': 'Teacher Account Control',
    'role.3.p2.desc': 'Manage instructor accounts, assign sessions, and reset credentials.',
    'role.3.p3.title': 'Calendar & Recess Scheduling',
    'role.3.p3.desc': 'Schedule weekly circles, holidays, and makeup sessions.',
    'role.3.p4.title': 'Self-Hosted Backups',
    'role.3.p4.desc': 'Download complete JSON database snapshots and secure CSV exports.',

    // Capabilities (Updated)
    'curriculum.kicker': 'Capabilities',
    'curriculum.title': 'Core tools built for daily recitation circles.',
    'curriculum.lead': 'Streamlined forms keep teachers focused on students, not data entry.',
    'curriculum.p2.1.title': 'Native A4 PDF Generator',
    'curriculum.p2.1.desc': 'Produces clean landscape A4 attendance sheets in-browser with zero external tools.',
    'curriculum.p2.2.title': 'JSON Backup & CSV Export',
    'curriculum.p2.2.desc': 'Export complete JSON snapshots or CSV tables protected against spreadsheet formula injection.',
    'curriculum.p2.3.title': 'Atomic Data Restore',
    'curriculum.p2.3.desc': 'Restore database snapshots in one safe transaction with mandatory backup locks.',
    'curriculum.p2.4.title': 'Search Engine Privacy Shield',
    'curriculum.p2.4.desc': 'Public student pages use strict noindex rules to protect children from web crawlers.',

    // Offline Architecture (Updated)
    'offline.kicker': 'Offline Architecture',
    'offline.title': 'Keep recording even when internet connectivity drops.',
    'offline.lead': 'Classrooms often experience weak signal. The app records data locally without interruption.',
    'offline.s1.title': '1. Local Shell & Data Cache',
    'offline.s1.desc': 'Assets and student lists are cached locally, ready even in airplane mode.',
    'offline.s2.title': '2. Local IndexedDB Queue',
    'offline.s2.desc': 'Entries save directly into the local browser queue when offline.',
    'offline.s3.title': '3. Pending Queue Counter',
    'offline.s3.desc': 'A top-bar indicator displays unsynced records clearly.',
    'offline.s4.title': '4. Automatic Background Sync',
    'offline.s4.desc': 'Records sync chronologically to the database once connection restores.',

    // FAQ
    'faq.kicker': 'FAQ',
    'faq.title': 'Frequently asked questions about Halaqoh.',
    'faq.lead': 'Key details on parent access, student privacy, and offline recording.',
    'faq.q1': 'Do parents need an account or password?',
    'faq.a1': 'No. Parents simply open their unique link via WhatsApp without accounts, apps, or passwords.',
    'faq.q2': 'What happens if the internet cuts out during class?',
    'faq.a2': 'Recording continues normally. Data queues locally in IndexedDB and syncs automatically once back online.',
    'faq.q3': 'Can student names and records be found on Google?',
    'faq.a3': 'No. All student profiles use strict noindex and disallow tags to block search engines.',
    'faq.q4': 'Can teachers log both Iqro and Surah recitations in one session?',
    'faq.a4': 'Yes. Teachers can record an Iqro milestone and a Quranic surah recitation in the same attendance entry.',
    'faq.q5': 'How do admins migrate data to a new device?',
    'faq.a5': 'Admins can download complete JSON database snapshots from /admin and restore them instantly on the new device.',

    // Demo Section
    'demo.kicker': 'Get Started',
    'demo.title': 'Bring clear, calm record keeping to your study circle.',
    'demo.lead': 'Simplify tracking for teachers, keep parents updated, and organize records. Fill out the short form to request a walkthrough.',
    'demo.btn': 'Request Demo Now',

    // Footer (English Mission Only)
    'footer.mission': 'A student attendance and recitation tracking system.',
    'footer.col1.title': 'Product',
    'footer.col1.l1': 'Roles Workflow',
    'footer.col1.l2': 'Capabilities & PDF',
    'footer.col1.l3': 'Offline-First',
    'footer.col1.l4': 'FAQ',
    'footer.col2.title': 'Community',
    'footer.col2.l1': 'Teachers Guide',
    'footer.col2.l2': 'Parent Portal',
    'footer.col2.l3': 'Admin Suite',
    'footer.col2.l4': 'Request Demo',
    'footer.col3.title': 'Security',
    'footer.col3.l1': 'No-Index Student Shield',
    'footer.col3.l2': 'Atomic JSON Export',
    'footer.col3.l3': 'Zero Subscription',
    'footer.col3.l4': 'Tally Demo Form',
    'footer.copyright': '© 2026 Halaqoh. ikhlasulabda.',
    'footer.backToTop': 'Back to Top ↑',
    'footer.ctaBtn': 'Request Demo →'
  }
};

const BRAND_LOGO_HTML = '<img src="/images/typography-logo-no-bg.png" alt="Halaqoh" class="inline-brand-logo" />';

function renderTextWithLogo(text) {
  if (typeof text !== 'string') return text;
  return text.replace(/\bHalaqoh\b/g, BRAND_LOGO_HTML).replace(/\bhalaqoh\b/g, BRAND_LOGO_HTML);
}

let currentLang = 'id';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('halaqoh_lang', lang);

  // Update DOM elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      const val = translations[lang][key];
      if (val.includes('Halaqoh') || val.includes('halaqoh')) {
        el.innerHTML = renderTextWithLogo(val);
      } else {
        el.textContent = val;
      }
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update toggle buttons active state
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });
}

function initLanguage() {
  const saved = localStorage.getItem('halaqoh_lang');
  const browserLang = navigator.language && navigator.language.startsWith('en') ? 'en' : 'id';
  const initial = saved || browserLang;
  setLanguage(initial);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });
}

function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const links = drawer ? drawer.querySelectorAll('.mobile-drawer-link, .btn-luxury-cta') : [];

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    toggleBtn.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    toggleBtn.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('is-open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
      toggleBtn.focus();
    }
  });
}

function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Accessible toggle
      if (isOpen) {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard support: Enter / Space handled natively on button element
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links-desktop .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));
}

function initTallyFallback() {
  const tallyButtons = document.querySelectorAll('[data-tally-open]');
  tallyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // If Tally widget script is blocked or unavailable, open form directly
      if (typeof window.Tally === 'undefined') {
        const formId = btn.getAttribute('data-tally-open') || 'WOGdZJ';
        window.open(`https://tally.so/r/${formId}`, '_blank');
      }
    });
  });
}

// Initializer
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initMobileDrawer();
  initFaqAccordion();
  initScrollSpy();
  initTallyFallback();
});
