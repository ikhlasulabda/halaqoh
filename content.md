# Dokumen Seluruh Isi Konten Website: Halaqoh (Rancangan Revisi)

Dokumen ini memuat **seluruh isi rancangan struktur, teks konten (copywriting bilingual ID & EN), serta spesifikasi interaksi** dari situs web **Halaqoh** (`c:\Users\abda\Desktop\WebApp\halaqoh`).

### Catatan Perubahan & Prinsip Desain Revisi:
1. **Terminologi Pengguna**: Seluruh kata *"santri"* telah diubah secara konsisten menjadi ***"murid"*** (termasuk *wali murid*, *data murid*, *profil murid*).
2. **CTA Tunggal (Single CTA)**: Satu-satunya CTA di seluruh halaman adalah **"Request Demo"** (ID: *"Minta Demo"* / *"Request Demo"*), yang memicu **Aesthetic Modal Popup Tally** (`https://tally.so/r/WOGdZJ`) dan terhubung rapi ke seksi form embed di bagian bawah halaman. Tidak ada lagi CTA sekunder (seperti *mailto*, *konsultasi*, dll.).
3. **Dukungan Dwibahasa (Bilingual: ID & EN)**: Setiap seksi memiliki naskah resmi dalam **Bahasa Indonesia** (bahasa utama) dan **English** (terjemahan presisi & natural). Sistem dilengkapi pemilih bahasa (*Language Switcher*: `ID | EN`) di bilah navigasi.
4. **Halaman Pembuka / First-Fold Screen (Initial Screen)**: Tampilan visual saat situs pertama kali dibuka menyajikan **Typography Logo besar yang bersih**, deskripsi singkat di bawahnya, penanda scroll / CTA Request Demo, serta **placeholder Video Background** (full-bleed immersive video).

---

## 0. METADATA & IDENTITAS HALAMAN (ROOT METADATA & SEO)

| Parameter | Versi Bahasa Indonesia (Utama) | Versi English |
| :--- | :--- | :--- |
| **Judul Halaman (Meta Title)** | `Halaqoh: Aplikasi Pencatatan Absensi & Setoran Murid` | `Halaqoh: Attendance & Recitation Tracker App for Students` |
| **Deskripsi (Meta Description)** | `Aplikasi pencatatan absensi dan setoran hafalan murid. Rekapitulasi transparan bagi orang tua murid tanpa perlu akun.` | `Progressive attendance and Quran recitation tracking for students. Transparent, passwordless progress reports for parents.` |
| **Kata Kunci (Keywords)** | `halaqoh, ngaji, aplikasi ngaji, manajemen tpa, setoran iqro, absensi murid, aplikasi pengajian musholla, pwa murid, offline first` | `halaqoh, quran tracker, islamic school management, attendance app, student recitation, offline first education app` |
| **Penulis (Author)** | `Ikhlaashul Abda` | `Ikhlaashul Abda` |
| **Robots** | `index, follow` | `index, follow` |
| **URL Kanonikal** | `https://halaqoh.app` | `https://halaqoh.app` |
| **Tema Warna (Theme Color)** | `#121212` / `#23201a` (Deep Obsidian Umber) | `#121212` / `#23201a` (Deep Obsidian Umber) |
| **Favicon & App Icon** | `/images/logo-with-bg.png` | `/images/logo-with-bg.png` |
| **Open Graph Image (og:image)** | `/images/typography-logo-with-bg.png` | `/images/typography-logo-with-bg.png` |
| **Tally Form Link** | `https://tally.so/r/WOGdZJ` | `https://tally.so/r/WOGdZJ` |

### 0.1 PANDUAN PEMETAAN ASET VISUAL MEREK (BRAND ASSETS GUIDE)

Empat berkas gambar aset resmi yang telah disiapkan di folder `images/`:

| Nama Berkas | Karakter Visual | Peruntukan Utama & Lokasi Implementasi | Alasan Desain (Clean & Luxury) |
| :--- | :--- | :--- | :--- |
| **`images/logo-no-bg.png`** | Simbol lambang logo tanpa latar belakang (*transparent*) | **Watermark lembut di dasar halaman (Footer backdrop)** serta ikon aksen di elemen floating | Memberikan sentuhan monogram luxury yang elegan tanpa batas kotak latar belakang. |
| **`images/logo-with-bg.png`** | Simbol logo dengan latar belakang solid berkontras tinggi | **Favicon tab browser (`favicon.ico`) & Apple Touch Icon** | Tampil tajam dan jelas di tab browser gelap maupun terang, serta home screen ponsel. |
| **`images/typography-logo-no-bg.png`** | Logotype tipografi `HALAQOH` tanpa latar belakang (*transparent*) | **Hero / Halaman Pembuka Utama (First-Fold 100vh)** & Logo Header | Menyatu mulus secara sinematik di atas video background gelap tanpa kotak pembatas. |
| **`images/typography-logo-with-bg.png`** | Logotype tipografi `HALAQOH` dengan latar belakang solid | **Open Graph Meta Tag (`og:image`, `twitter:image`)** | Menjamin tampilan kartu pratinjau saat tautan web dibagikan di WhatsApp/Telegram/X selalu kontras & rapi. |

*Catatan Fleksibilitas*: Masing-masing aset dapat disesuaikan penempatannya di elemen web lain jika dibutuhkan, dengan prinsip utama: **menjaga tampilan tetap bersih (*clean*), berwibawa, dan bernuansa premium.**

### JSON-LD Structured Data (`WebApplication`)
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Halaqoh",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All (Web, iOS, Android)",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "IDR"
  },
  "featureList": [
    "Offline-first record keeping with IndexedDB",
    "Curriculum support for Iqro 1-6 & 114 Surahs of the Holy Quran",
    "Automatic 5 Islamic prayer prayer sessions detection",
    "Passwordless parent access via unique secure slugs",
    "Print-ready PDF report generator (A4 Landscape)",
    "Secure JSON backup and sanitized CSV data export"
  ]
}
```

---

## 1. HEADER & NAVIGASI UTAMA (TOP APP-BAR)

Bilah navigasi mengapung (*floating glassmorphism header*) yang tetap berada di atas layar saat pengguna menggulir halaman.

### A. Komponen Navigasi
- **Identitas Merek (Logo)**: Typography `HALAQOH` (Tautan: `#top`)
- **Penanda Bahasa (Language Switcher)**: Toggle interaktif `ID | EN` (default: `ID`)
- **Tautan Menu Navigasi**:
  1. **ID**: `Beranda` | **EN**: `Home` &rarr; `#top`
  2. **ID**: `Alur Peran` | **EN**: `Roles` &rarr; `#roles`
  3. **ID**: `Kurikulum` | **EN**: `Curriculum` &rarr; `#curriculum`
  4. **ID**: `Sistem Luring` | **EN**: `Offline-First` &rarr; `#offline`
  5. **ID**: `Tanya Jawab` | **EN**: `FAQ` &rarr; `#faq`
- **Satu-Satunya Tombol Aksi (Primary CTA Button)**:
  - **Teks ID**: `Request Demo`
  - **Teks EN**: `Request Demo`
  - **Aksi / Target**: Membuka **Tally Modal Popup** (`https://tally.so/r/WOGdZJ`) atau *smooth scroll* ke `#demo`

### B. Menu Seluler (Mobile Drawer)
- Tombol burger menu estetis (*hamburger trigger*)
- Drawer menu menyajikan daftar tautan navigasi (`Beranda`, `Alur Peran`, `Kurikulum`, `Sistem Luring`, `Tanya Jawab`), Switcher `ID | EN`, dan tombol lebar penuh `Request Demo`.

---

## 2. HALAMAN PEMBUKA / FIRST FOLD SCREEN (INITIAL SCREEN - TYPOGRAPHY LOGO & BACKGROUND VIDEO)

Layar pertama yang tampil saat situs dibuka (100vh / Full Viewport Height). Dirancang sinematik, hening, dan berkelas tinggi.

### A. Elemen Visual & Layout
- **Background Video Container**:
  - Full-width & full-height video latar belakang (`autoplay`, `muted`, `loop`, `playsinline`).
  - *Placeholder URL video*: `/videos/hero-background.mp4` (didukung poster fallback `/images/hero-fallback.webp`).
  - *Overlay Gradient*: Scrim gelap lembut (*vignette & semi-transparent deep umber backdrop*) untuk memastikan teks memiliki kontras yang sempurna (WCAG AAA).
- **Typography Logo Besar (Center Focal Point)**:
  - Tampilan visual logotype tipografi transparan: **`images/typography-logo-no-bg.png`** (dengan fallback teks CSS: `HALAQOH`).
  - Penempatan: Berada tepat di tengah layar (*center hero focal point*) di atas background video dengan efek hening, luas, dan berkelas.
- **Deskripsi Singkat di Bawah Logo**:
  - **ID**: `Sistem pencatatan presensi dan setoran hafalan murid.`
  - **EN**: `Attendance and Quran recitation tracker for students.`
- **Tombol Aksi Utama (Hero CTA)**:
  - **Teks (ID & EN)**: `Request Demo`
  - **Aksi**: Memicu Tally Modal Popup (`https://tally.so/r/WOGdZJ`)
- **Indikator Gulir ke Bawah (Scroll Indicator)**:
  - Ikon panah beranimasi halus atau teks lembut:
    - **ID**: `Jelajahi Fitur ↓`
    - **EN**: `Explore Features ↓`
    - Tautan: `#overview`

---

## 3. SEKSI IKHTISAR & SPESIFIKASI SISTEM (OVERVIEW & SPEC SHEET)

Seksi transisi setelah layar pembuka (`#overview`), menyajikan intisari kemampuan sistem dan kartu spesifikasi teknis.

### A. Tajuk Seksi (Display Intro)
- **Kicker / Eyebrow**:
  - **ID**: `Pencatatan Berbasis Nilai`
  - **EN**: `Values-First Architecture`
- **Judul Utama (H1 / H2 Display)**:
  - **ID**: `Pencatatan absensi dan setoran hafalan murid.`
  - **EN**: `Attendance and Quran recitation records.`
- **Paragraf Penjelas**:
  - **ID**: `Dibuat untuk guru ngaji dan pengurus majelis taklim. Orang tua murid dapat melihat rekap progres anak langsung tanpa perlu membuat akun.`
  - **EN**: `Built for Quran teachers and learning circles. Parents access student progress directly without creating an account.`
- **Tombol Aksi**:
  - `Request Demo` &rarr; Memicu Tally Modal (`https://tally.so/r/WOGdZJ`)

### B. Lembar Spesifikasi Sistem (Spec Sheet Card)
- **Judul Kartu (ID)**: `Spesifikasi Halaqoh` | **(EN)**: `Halaqoh Specifications`
- **Item Spesifikasi**:
  1. **01 | Penyimpanan Luring Mandiri** / *Offline-First Storage*
     - **ID**: Data tersimpan di peramban via IndexedDB. Form tetap berjalan normal tanpa internet.
     - **EN**: Data is stored locally via IndexedDB. Input forms remain operational offline.
  2. **02 | Deteksi Otomatis 5 Sesi Shalat** / *Automatic 5 Prayer Sessions*
     - **ID**: Subuh, Zuhur, Ashar, Magrib, dan Isya terdeteksi otomatis sesuai zona waktu lokal.
     - **EN**: Subuh, Zuhur, Ashar, Magrib, and Isya detected automatically from local time.
  3. **03 | Akses Publik Tanpa Sandi** / *Passwordless Parent Access*
     - **ID**: Orang tua membuka rekap lewat tautan unik via WhatsApp, tanpa perlu kata sandi.
     - **EN**: Parents view reports via unique links over WhatsApp, no passwords needed.
  4. **04 | Cetak PDF A4 Standar** / *Native A4 PDF Reporting*
     - **ID**: Cetak laporan matriks bulanan format PDF A4 landscape langsung dari peramban.
     - **EN**: Print monthly landscape A4 matrices directly from the browser.

### C. Lajur Metrik Kunci (Metric Strip)
| Metrik | Versi Bahasa Indonesia | Versi English |
| :---: | :--- | :--- |
| **100%** | **Luring & Offline-First**<br>Pencatatan lancar tanpa kuota internet. | **100% Offline-First**<br>Logging works without internet access. |
| **5 Sesi** | **Waktu Shalat**<br>Subuh hingga Isya otomatis jam server. | **5 Prayer Times**<br>Subuh to Isya mapped to local prayer hours. |
| **114** | **Surat Al-Qur'an & Iqro**<br>Kurikulum lengkap jilid 1 sampai 6. | **114 Surahs & Iqro**<br>Full curriculum from Iqro 1-6 to all 114 Surahs. |
| **Rp 0** | **Bebas Biaya Langganan**<br>Bebas biaya bulanan untuk pengajian. | **Zero Subscription**<br>Zero recurring software fees for circles. |

---

## 4. SOLUSI & ALUR TIGA PERAN PENGGUNA (ROLE WORKFLOW)

Seksi `#roles` menjabarkan pembagian wewenang yang tegas antara Guru, Orang Tua Murid, dan Pengurus.

### A. Tajuk Seksi
- **Eyebrow**:
  - **ID**: `Alur Tiga Peran`
  - **EN**: `Three User Roles`
- **Judul Seksi (H2)**:
  - **ID**: `Tiga peran pengguna dengan hak akses terpisah.`
  - **EN**: `Three roles with separate access rights.`
- **Paragraf Pengantar**:
  - **ID**: `Hak akses dipisahkan di server: guru mencatat bimbingan, orang tua memantau progres, dan pengurus mengelola data.`
  - **EN**: `Access is separated at the server: teachers record sessions, parents track growth, and administrators manage data.`

### B. Tiga Kartu Peran

#### Peran 01: Guru Pengajar (Teachers)
- **Tag**: `Operasional Harian` / `Daily Operations`
- **Judul**: `Guru Pengajar` / `Teachers`
- **Cakupan Antarmuka**:
  - **ID**: `Antarmuka: Absensi, Kalender, Riwayat, Statistik`
  - **EN**: `Interface: Attendance, Calendar, Recitation Log, Statistics`
- **Poin Kemampuan**:
  1. **ID**: **Presensi Luring:** Catat kehadiran dan setoran langsung dari ponsel tanpa internet.  
     **EN**: **Offline Logging:** Log attendance and recitations directly from phones without internet.
  2. **ID**: **Kurikulum Lengkap:** Dukungan Iqro 1 sampai 6 dan 114 surat Al-Qur'an.  
     **EN**: **Full Curriculum:** Supports Iqro 1-6 and all 114 Quranic surahs.
  3. **ID**: **Koreksi Fleksibel:** Ubah atau perbaiki catatan presensi harian jika keliru.  
     **EN**: **Flexible Edits:** Edit or correct daily attendance records anytime.
  4. **ID**: **Berbagi Cepat:** Salin tautan profil murid langsung ke WhatsApp orang tua.  
     **EN**: **Fast Sharing:** Copy student report links directly to WhatsApp.

#### Peran 02: Orang Tua Murid (Parents & Guardians)
- **Tag**: `Transparansi Publik` / `Public Transparency`
- **Judul**: `Orang Tua Murid` / `Parents`
- **Cakupan Antarmuka**:
  - **ID**: `Antarmuka: Halaman murid via tautan aman (/[slug])`
  - **EN**: `Interface: Student page via secure link (/[slug])`
- **Poin Kemampuan**:
  1. **ID**: **Akses Tanpa Sandi:** Buka laporan di browser ponsel tanpa aplikasi dan tanpa password.  
     **EN**: **No-Password Access:** Open reports directly in mobile browsers with zero logins.
  2. **ID**: **Matriks 5 Sesi Shalat:** Pantau rekap kehadiran harian di 5 waktu shalat.  
     **EN**: **5 Prayer Matrix:** Review daily attendance across all 5 prayer sessions.
  3. **ID**: **Tautan Multi-Murid:** Tampilan terpadu untuk kakak-beradik dalam satu tautan.  
     **EN**: **Multi-Student Link:** Unified view for siblings within a single link.
  4. **ID**: **Unduh Laporan PDF:** Unduh rekap bulanan format PDF siap cetak.  
     **EN**: **PDF Reports:** Download print-ready monthly summary PDFs.

#### Peran 03: Pengurus Majelis (Administrators)
- **Tag**: `Tata Kelola & Keamanan` / `Governance & Security`
- **Judul**: `Pengurus Majelis` / `Administrators`
- **Cakupan Antarmuka**:
  - **ID**: `Antarmuka: Dasbor administrasi (/admin)`
  - **EN**: `Interface: Administrative suite (/admin)`
- **Poin Kemampuan**:
  1. **ID**: **Manajemen Murid:** Daftarkan murid, atur status kelas, dan kelola tautan slug.  
     **EN**: **Student Management:** Register students, update status, and manage slugs.
  2. **ID**: **Akun Pengajar:** Atur akun guru, penugasan sesi, dan setel ulang sandi.  
     **EN**: **Teacher Accounts:** Manage teacher access, assign sessions, and reset passwords.
  3. **ID**: **Kalender & Libur:** Jadwalkan kalender pengajian dan penetapan hari libur.  
     **EN**: **Calendar & Recess:** Schedule study calendar and holidays.
  4. **ID**: **Cadangan & Ekspor:** Unduh arsip database JSON utuh dan ekspor data CSV aman.  
     **EN**: **Backup & Export:** Download complete JSON backups and sanitized CSV tables.

---

## 5. KURIKULUM & KAPABILITAS TEKNIS (FEATURES & CURRICULUM)

Seksi `#curriculum` mengupas tuntas kapabilitas pencatatan kurikulum di lapangan.

### A. Tajuk Seksi
- **Eyebrow**:
  - **ID**: `Kapabilitas`
  - **EN**: `Core Capabilities`
- **Judul Seksi (H2)**:
  - **ID**: `Fitur pokok untuk kegiatan mengaji harian.`
  - **EN**: `Essential tools for daily Quranic learning.`
- **Paragraf Pengantar**:
  - **ID**: `Formulir ringkas dan terarah, agar pengajar fokus mendampingi murid.`
  - **EN**: `Concise and focused forms so teachers can focus on guiding students.`

### B. 4 Kapabilitas Utama
1. **Cetak PDF A4 Native** / *Native A4 PDF Reporting*
   - **ID**: Dokumen matriks presensi landscape A4 terbuat langsung di peramban tanpa pihak ketiga.
   - **EN**: Landscape A4 attendance sheets generated directly in the browser with zero external services.
2. **Cadangan JSON & Ekspor CSV** / *JSON Backup & CSV Export*
   - **ID**: Unduh arsip database JSON lengkap atau CSV yang terlindung dari injeksi formula.
   - **EN**: Download full JSON database backups or CSV exports safe from formula injection.
3. **Pemulihan Data Atomik** / *Atomic Restore & Safety*
   - **ID**: Pulihkan data dalam satu transaksi aman dengan proteksi kunci arsip cadangan.
   - **EN**: Restore data in a single transaction with automated backup verification safeguards.
4. **Privasi Murid No-Index** / *Student Privacy No-Index*
   - **ID**: Halaman murid dilengkapi proteksi anti-perayapan agar tidak terindeks di mesin pencari.
   - **EN**: Student pages are protected with anti-crawl rules to prevent indexing by search engines.
---

## 6. ARSITEKTUR & FILOSOFI LURING (OFFLINE-FIRST ARCHITECTURE)

Seksi `#offline` menggarisbawahi keandalan aplikasi di area minim sinyal.

### A. Tajuk Seksi
- **Eyebrow**:
  - **ID**: `Arsitektur Luring`
  - **EN**: `Offline Architecture`
- **Judul Seksi (H2)**:
  - **ID**: `Pencatatan tetap aktif saat sinyal internet padam.`
  - **EN**: `Keep logging even when internet connectivity drops.`
- **Paragraf Pengantar**:
  - **ID**: `Koneksi internet di musholla kerap tidak stabil. Sistem tetap mencatat data tanpa gangguan jaringan.`
  - **EN**: `Mosque connectivity can be unstable. The system preserves records without interruption.`

### B. Alur Kerja 4 Langkah Luring (4-Step Offline Flow)
1. **01 | Cache Data Perangkat** / *Local Device Cache*
   - **ID**: Aplikasi dan daftar murid tersimpan di memori perangkat, siap dipakai saat offline.
   - **EN**: App shell and student lists are cached locally, accessible even in airplane mode.
2. **02 | Antrean Lokal IndexedDB** / *Local IndexedDB Queue*
   - **ID**: Saat menyimpan tanpa internet, data langsung masuk ke antrean lokal peramban.
   - **EN**: Submitting without internet immediately queues records in IndexedDB.
3. **03 | Indikator Antrean Terbaca** / *Transparent Queue Badge*
   - **ID**: Jumlah catatan yang belum tersinkron tampil di bilah atas layar secara transparan.
   - **EN**: Pending sync counts display clearly in the top header.
4. **04 | Sinkronisasi Otomatis** / *Automatic Sync*
   - **ID**: Saat koneksi kembali aktif, antrean tersinkronkan ke server secara kronologis.
   - **EN**: When connection restores, queued records sync chronologically.

---

## 7. TANYA JAWAB UMUM (FREQUENTLY ASKED QUESTIONS)

Seksi `#faq` menjawab pertanyaan mendasar pengurus dan orang tua murid.

### A. Tajuk Seksi
- **Eyebrow**:
  - **ID**: `Tanya Jawab`
  - **EN**: `Questions & Answers`
- **Judul Seksi (H2)**:
  - **ID**: `Pertanyaan umum seputar operasional Halaqoh.`
  - **EN**: `Frequently asked questions about Halaqoh.`
- **Paragraf Pengantar**:
  - **ID**: `Informasi penting seputar akses orang tua, privasi murid, dan pencatatan luring.`
  - **EN**: `Essential facts on parent access, student privacy, and offline recording.`

### B. Daftar 5 Tanya Jawab Bilingual

#### 1. Apakah orang tua murid harus mendaftar akun dan membuat kata sandi?
- **Tanya (ID)**: *Apakah orang tua murid harus mendaftar akun dan membuat kata sandi?*
- **Jawab (ID)**: Tidak. Orang tua cukup membuka tautan unik murid (contoh: `/murid-7xK9p2`) via WhatsApp tanpa perlu login atau unduh aplikasi.
- **Q (EN)**: *Do parents need to register an account or password?*
- **A (EN)**: No. Parents open a secure unique link (e.g. `/murid-7xK9p2`) via WhatsApp. No login or app installation required.

#### 2. Bagaimana jika jaringan internet di musholla mati saat jam mengaji?
- **Tanya (ID)**: *Bagaimana jika jaringan internet di musholla mati saat jam mengaji?*
- **Jawab (ID)**: Pencatatan tetap normal. Data disimpan di memori peramban (IndexedDB) dan otomatis disinkronkan saat internet kembali aktif.
- **Q (EN)**: *What happens if internet fails during class?*
- **A (EN)**: Logging continues normally. Records are saved locally in IndexedDB and sync automatically once online.

#### 3. Apakah nama dan riwayat setoran murid dapat ditemukan di Google?
- **Tanya (ID)**: *Apakah nama dan riwayat setoran murid dapat ditemukan di Google?*
- **Jawab (ID)**: Tidak. Seluruh halaman profil murid dilindungi tag noindex dan disallow agar tidak terindeks oleh mesin pencari publik.
- **Q (EN)**: *Can student names and records be found on Google?*
- **A (EN)**: No. Student pages are guarded with noindex and crawler disallow rules. Search engines will not index student records.

#### 4. Apakah murid bisa dicatat membaca Iqro sekaligus setoran surat dalam satu pertemuan?
- **Tanya (ID)**: *Apakah murid bisa dicatat membaca Iqro sekaligus setoran surat dalam satu pertemuan?*
- **Jawab (ID)**: Bisa. Pengajar dapat menginput capaian halaman Iqro dan setoran surat Al-Qur'an pada sesi yang sama tanpa saling menimpa.
- **Q (EN)**: *Can a student log both Iqro and Quran recitation in one session?*
- **A (EN)**: Yes. Teachers can record Iqro page progress and surah memorization in the same session without overwriting.

#### 5. Bagaimana cara pengurus memindahkan atau mengamankan data jika berganti perangkat?
- **Tanya (ID)**: *Bagaimana cara pengurus memindahkan data jika berganti perangkat?*
- **Jawab (ID)**: Pengurus dapat mengunduh cadangan database JSON utuh dan CSV kapan saja melalui dasbor `/admin`, lalu memulihkannya ke perangkat baru.
- **Q (EN)**: *How do administrators migrate data to another device?*
- **A (EN)**: Download complete JSON database snapshots and CSV files from `/admin`, then restore them on the new device.

---

## 8. SEKSI PENUTUP & INTEGRASI FORMULIR DEMO (REQUEST DEMO SECTION & MODAL EMBED)

Seksi `#demo` merupakan bagian penutup utama di atas footer, sekaligus pendaratan dari seluruh CTA "Request Demo".

### A. Banner Ajakan Bertindak (Closing CTA Hero)
- **Eyebrow**:
  - **ID**: `Penerapan Pengajian`
  - **EN**: `Community Circles`
- **Judul Utama (H2)**:
  - **ID**: `Mulai pencatatan pengajian yang lebih teratur.`
  - **EN**: `Start organized recitation records today.`
- **Paragraf Ajakan**:
  - **ID**: `Gunakan Halaqoh untuk kemudahan guru ngaji, transparansi orang tua, dan ketertiban administrasi. Coba demo langsung melalui formulir.`
  - **EN**: `Adopt Halaqoh for teacher ease, parent transparency, and tidy administration. Request an interactive demo.`
- **Tombol Pemicu Modal Cepat**:
  - **Teks**: `Request Demo Sekarang` / `Request Demo`
  - **Aksi**: Memicu **Aesthetic Modal Popup Tally** (`https://tally.so/r/WOGdZJ`)

### B. Spesifikasi Integrasi Tally Form (`https://tally.so/r/WOGdZJ`)
Untuk menjaga layout tetap bersih, rapi, dan estetis tanpa mengganggu proporsi halaman, integrasi Tally diterapkan melalui 2 pendekatan harmonis:

1. **Aesthetic Pop-Up Modal (Primary Trigger)**:
   - Digunakan oleh semua tombol CTA `Request Demo` di Header, Hero, Banner, dan Footer.
   - Script resmi Tally Widget dimuat secara asinkron:
     ```html
     <script async src="https://tally.so/widgets/embed.js"></script>
     ```
   - Tombol menggunakan atribut bawaan Tally:
     ```html
     <button 
       data-tally-open="WOGdZJ" 
       data-tally-layout="modal" 
       data-tally-width="640" 
       data-tally-emoji-text="📖" 
       data-tally-emoji-animation="wave"
       class="cta-btn-primary">
       Request Demo
     </button>
     ```
   - Memberikan pengalaman modern, tanpa reload, dengan backdrop blur halus (*glassmorphic dim overlay*).

2. **In-Page Embed Container Rapi di Seksi `#demo` (Fallback & Direct Access)**:
   - Bagi pengunjung yang menggulir hingga ke dasar halaman, disediakan kartu embed berbingkai rapi (*responsive iframe wrapper*) dengan batas lebar terukur (*max-width: 680px*), sudut membulat (*border-radius: 16px*), dan bayangan lembut (*ambient elevation*).
   - Kode Iframe Embed:
     ```html
     <div class="tally-embed-wrapper" style="max-width: 720px; margin: 0 auto; border-radius: 16px; overflow: hidden; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
       <iframe 
         data-tally-src="https://tally.so/embed/WOGdZJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
         loading="lazy" 
         width="100%" 
         height="500" 
         frameborder="0" 
         marginheight="0" 
         marginwidth="0" 
         title="Request Demo Halaqoh">
       </iframe>
     </div>
     ```

---

## 9. FOOTER LENGKAP & HAK CIPTA (FOOTER DIRECTORY & COPYRIGHT)

Bagian penutup halaman yang rapi dan konsisten dengan palet tema.

### A. Kolom Merek & Visi
- **Nama Merek & Logo**: `HALAQOH` (Tautan: `#top`)
- **Watermark Latar Belakang Footer**: Menggunakan **`images/logo-no-bg.png`** dengan opasitas rendah (~4-6%) sebagai monogram dekoratif elegan di dasar halaman.
- **Deskripsi Penutup**:
  - **ID**: `Sistem pencatatan presensi dan setoran hafalan murid.`
  - **EN**: `Attendance and Quran recitation tracker for students.`
- **CTA Footer**:
  - Tombol tunggal: `Request Demo` &rarr; Memicu Modal Popup Tally (`https://tally.so/r/WOGdZJ`)

### B. Direktori Navigasi 4-Kolom (Bilingual Links)
1. **Kolom 1: Solusi & Alur** / *Solutions & Roles*
   - `Alur Peran` / `Role Workflow` &rarr; `#roles`
   - `Kapabilitas & PDF` / `Capabilities & PDF` &rarr; `#curriculum`
   - `Sistem Luring` / `Offline-First` &rarr; `#offline`
   - `Tanya Jawab` / `FAQ` &rarr; `#faq`
2. **Kolom 2: Komunitas** / *Community*
   - `Panduan Pengajar` / `Teacher Guide` &rarr; `#roles`
   - `Akses Wali Murid` / `Parent Access` &rarr; `#roles`
   - `Dasbor Pengurus` / `Admin Dashboard` &rarr; `#roles`
   - `Request Demo` / `Request Demo` &rarr; `#demo`
3. **Kolom 3: Keamanan** / *Security*
   - `Privasi Murid No-Index` / `Student Privacy No-Index` &rarr; `#curriculum`
   - `Ekspor Cadangan JSON` / `JSON Backup Export` &rarr; `#curriculum`
   - `Bebas Biaya Langganan` / `Zero Subscription` &rarr; `#overview`
   - `Formulir Demo Tally` / `Tally Demo Form` &rarr; `https://tally.so/r/WOGdZJ`

### C. Baris Hak Cipta
- **Teks Hak Cipta**:
  - **ID**: `© 2026 Halaqoh. ikhlasulabda.`
  - **EN**: `© 2026 Halaqoh. ikhlasulabda.`
- **Tautan Kembali ke Puncak**:
  - **ID**: `Kembali ke Atas ↑` | **EN**: `Back to Top ↑` &rarr; `#top`

---

## 10. TABEL RINGKASAN STRUKTUR ARSITEKTUR SITUS

| Urutan | ID Bagian | Komponen | Peran & Konten Utama | Integrasi CTA / Aksi |
| :---: | :--- | :--- | :--- | :--- |
| **0** | `head` | Root Meta & SEO | Metadata dwibahasa, OpenGraph, JSON-LD, PWA configuration | - |
| **Bar** | `#nav` | Floating Header | Logo `HALAQOH`, Menu link, Language Toggle (`ID\|EN`), Single CTA | Tombol `Request Demo` (Modal Tally) |
| **1** | `#hero-initial` | First Fold Screen (100vh) | **Typography Logo Besar**, Deskripsi Singkat, **Background Video Placeholder**, Scroll hint | Tombol `Request Demo` + Scroll ke `#overview` |
| **2** | `#overview` | Hero Overview & Spec Sheet | H1 tajuk sistem, kartu 4 spesifikasi offline & matriks metrik 4-kolom | Tombol `Request Demo` |
| **3** | `#roles` | Solusi 3 Peran Pengguna | Guru Pengajar, Orang Tua/Wali Murid, Pengurus Administrator | Link info ke kurikulum & `#demo` |
| **4** | `#curriculum` | Kurikulum & Kapabilitas | Iqro 1-6, 114 Surat Al-Qur'an, 5 waktu shalat, Native PDF & audit JSON | Tautan demonstrasi & `#demo` |
| **5** | `#offline` | Arsitektur Luring | Filosofi & 4 tahapan IndexedDB + Service Worker sync | Tautan eksplorasi |
| **6** | `#faq` | Tanya Jawab Umum | 5 pertanyaan & jawaban esensial mengenai murid, data & akses | Tautan ke `#demo` |
| **7** | `#demo` | Closing Section & Tally Embed | Ajakan penerapan komunitas + In-page embed wrapper rapi Tally | **Embed Iframe & Tombol Modal Tally** (`https://tally.so/r/WOGdZJ`) |
| **8** | `#footer` | Footer Directory & Copyright | Ringkasan visi, tautan sitemap bilingual, tombol demo, copyright | Tombol `Request Demo` (Modal Tally) |
