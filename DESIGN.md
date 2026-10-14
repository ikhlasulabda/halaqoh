# DESIGN.md: Halaqoh Design System & Visual Specification

Dokumen ini merupakan panduan arah desain resmi (*source of truth*) untuk situs web **Halaqoh**. Dibuat berdasarkan preferensi spesifik pemilik proyek dengan kepatuhan penuh terhadap filter **antislop** (`antislop-ui`, `antislop-copywriting`, `antislop-human`, `antislop-layoutmobile`, `antislop-code`).

---

## 0. PILIHAN FRAMEWORK TERBAIK & ARSITEKTUR RUNTIME (TECH STACK KEPUTUSAN)

Framework yang diputuskan dan ditetapkan sebagai **pilihan terbaik nomor satu** untuk proyek ini adalah:

### **Vite + Vanilla (HTML5 Semantik, Modern Vanilla CSS, ES Modules)**

### Mengapa Ini Pilihan Paling Sempurna untuk Kebutuhan Halaqoh:
1. **Performa Paling Ringan & Instan (Zero Runtime Bloat)**:
   - Framework seperti Next.js atau React membawa beban runtime *hydration* 50–150 KB sebelum halaman dapat disentuh.
   - Dengan **Vite + Vanilla**, bundle JavaScript total **di bawah 15 KB**. Web terbuka seketika (< 0.3 detik) bahkan di jaringan ponsel hemat kuota atau sinyal musholla yang lemah.
2. **Animasi Mulus 60 FPS Asli Hardware-Accelerated**:
   - Efek visual luxury (latar belakang video, blur tetesan air navbar, kartu melayang dengan *inner shadow*) ditangani langsung oleh GPU ponsel melalui native CSS (`transform`, `opacity`, `backdrop-filter`).
   - Tidak ada lag, stuttering, atau konsumsi baterai berlebih di perangkat Android maupun iPhone.
3. **Pengalihan Bahasa (Bilingual ID/EN) Instan Tanpa Kedip**:
   - Transisi teks antara Bahasa Indonesia dan English dieksekusi dalam hitungan milidetik melalui *data-dictionary DOM swapping* yang bersih tanpa perlu me-reload halaman atau mengimpor library i18n yang berat.
4. **Presisi Desain Mobile 100% di iPhone & Android**:
   - Kontrol native murni atas unit `100dvh` (Dynamic Viewport Height) dan `safe-area-inset`, memastikan video hero dan navbar mengapung tidak pernah terpotong atau meloncat ketika address bar Safari / Chrome muncul dan tenggelam.
5. **100% Bebas Biaya (Free) & Skor Google Lighthouse 98–100**:
   - Alat bantu build gratis berbasis Vite modern, siap di-deploy secara cuma-cuma selamanya di Cloudflare Pages, Vercel, Netlify, atau GitHub Pages dengan skor performa puncak.

---

## 1. DESIGN READ & DIALS (LIVELINESS SETTING)

> **Design Read:** Landing & showcase website untuk produk pendidikan Qur'ani luring (Halaqoh) bagi guru, pengurus, dan orang tua murid, dengan gaya **Elegan Luxury Futuristic & Architectural Dark Brown**, berdasar dials:
> **ENERGY 2 / RHYTHM 2 / MOTION 2**

### Penjelasan Dials:
- **ENERGY 2 (Balanced Luxury):** Tenang, berwibawa, dan mahal. Tidak berteriak seperti startup AI murahan, tetapi memiliki kehadiran visual yang kuat dan berkarakter.
- **RHYTHM 2 (Structured Architectural Flow):** Alur antar bagian konsisten dan terukur, diselingi variasi asimetris yang disengaja (misal: transisi dari hero sinematik ke kartu spesifikasi melayang).
- **MOTION 2 (Smooth Cinematic Transitions):** Animasi halus berbasis akselerasi perangkat keras (`transform`, `opacity`, `backdrop-filter`). Tanpa efek memantul (*bounce*) atau pergerakan liar yang tidak perlu.

---

## 2. PALET WARNA (COLOR SYSTEM)

Sistem warna menggunakan tema **Dark Brown Elegan** berbasis espresso, umber, dan perunggu gelap, dipadukan dengan tipografi **putih murni (#ffffff)**.

### A. Palet Inti (Core Palette)
| Token Token CSS | Nilai Hex / HSL | Peruntukan | Alasan Desain (R-31) |
| :--- | :--- | :--- | :--- |
| `--bg-base` | `#120f0c` | Latar belakang canvas utama | Memberikan nuansa gelap yang hangat dan tenang, bukan hitam pekat dingin. |
| `--bg-surface-1` | `#1a1511` | Bidang seksi transisi & overlay video | Memisahkan kedalaman antar seksi secara natural tanpa garis border. |
| `--bg-surface-card` | `#221b15` | Bidang dasar kartu melayang (*floating cards*) | Kontras halus di atas `--bg-base` untuk mempertegas elevasi bayangan. |
| `--bg-nav` | `rgba(26, 21, 17, 0.72)` | Latar belakang navbar mengapung | Efek blur tetesan air tipis yang menyatu dengan konten di bawahnya. |
| `--accent-bronze` | `#c89d66` | Aksen tembaga hangat (fokus & indikator aktif) | Aksen tunggal yang mewah untuk status aktif dan garis sorot halus. |

### B. Tipografi: Wajib All Putih (`#ffffff`)
Seluruh teks menggunakan warna dasar **`#ffffff`**. Hierarki keterbacaan (*visual hierarchy*) diatur secara ketat melalui **skala ukuran, ketebalan (font-weight), letter-spacing, dan opacity terkontrol** agar tetap memenuhi standar kontras WCAG AAA:

| Tingkat Teks | Nilai Warna CSS | Opasitas | Peruntukan |
| :--- | :--- | :--- | :--- |
| **Primary Display & Headings** | `#ffffff` | 100% | Logo typography, H1, H2, H3, angka metrik utama |
| **Body & Paragraphs** | `rgba(255, 255, 255, 0.88)` | 88% | Paragraf penjelas, deskripsi fitur, teks navigasi |
| **Supporting / Meta Text** | `rgba(255, 255, 255, 0.68)` | 68% | Keterangan tambahan, label nomor urut, hak cipta |
| **Interactive Hover Text** | `#ffffff` | 100% | Teks saat disorot (hover) dengan pendaran halus |

---

## 3. ARSITEKTUR KARTU & ELEMEN MELAYANG (FLOATING CARD SYSTEM)

Sesuai arahan spesifik pemilik:
- **NO Rounded Card**: Sudut kartu berbentuk siku tegas (`border-radius: 0px`).
- **NO Border Card**: Tanpa garis tepi (`border: none` / `border: 0`).
- **NO Tag Card Kecil**: Tidak ada pill-badge atau tag kecil hiasan ("Operasional Harian", "Transparansi", dll).
- **NO Numbering 01, 02**: Penomoran menggunakan angka alami sederhana: **1, 2, 3, dst**.
- **Melayang & Inner Shadow**: Elevasi dicapai melalui bayangan luar dalam (*outer depth + aesthetic inner shadow*).

### Formula CSS Kartu Melayang (`.floating-card`):
```css
.floating-card {
  background: var(--bg-surface-card);
  border-radius: 0px; /* Siku tajam presisi */
  border: none;       /* Bersih tanpa garis tepi */
  
  /* Elevasi melayang luar + Inner shadow estetis */
  box-shadow: 
    0 24px 48px -12px rgba(0, 0, 0, 0.75),       /* Deep outer floating drop */
    0 4px 12px -2px rgba(0, 0, 0, 0.4),          /* Mid contact ambient */
    inset 0 1px 1px rgba(255, 255, 255, 0.09),   /* Delicate top rim inner light */
    inset 0 -2px 4px rgba(0, 0, 0, 0.55);        /* Bottom depth inner shade */

  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
  position: relative;
}

.floating-card:hover {
  transform: translateY(-4px); /* Mengangkat kartu secara anggun saat interaksi */
  box-shadow: 
    0 32px 64px -14px rgba(0, 0, 0, 0.85),
    0 8px 18px -3px rgba(0, 0, 0, 0.5),
    inset 0 1px 1px rgba(255, 255, 255, 0.14),
    inset 0 -2px 4px rgba(0, 0, 0, 0.6);
}
```

---

## 4. NAVBAR MENGAPUNG ESTETIS (WATER DROP HANGING NAVBAR)

Navbar dirancang melayang menggantung di tengah atas (*top center hanging*), menyerupai kontur tetesan air yang halus (*subtle organic teardrop shape*).

### A. Tampilan Desktop
- **Posisi**: `position: fixed; top: 1.5rem; left: 50%; transform: translateX(-50%); z-index: 100;`
- **Bentuk**: Rounded moderat elegan (`border-radius: 20px`), tidak berlebihan.
- **Efek Permukaan**: 
  - `backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);`
  - Latar belakang: `rgba(26, 21, 17, 0.75)`
  - Inner shadow halus untuk memberi kesan volume kaca tetesan air:
    `box-shadow: 0 16px 36px -10px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.12), inset 0 -1px 2px rgba(0,0,0,0.4);`
- **Isi**:
  1. Tipografi logo mini atau monogram transparan (`images/typography-logo-no-bg.png`).
  2. Tautan navigasi utama (`Beranda`, `Alur Peran`, `Kurikulum`, `Sistem Luring`, `Tanya Jawab`).
  3. Pemilih Bahasa (`ID | EN`).
  4. Tombol tunggal: **`Request Demo`** (memicu popup Tally).

### B. Tampilan Mobile (Android & iPhone)
- **Header Atas**: Bar minimalis yang tetap berada di atas dengan tombol **toggle garis 3** (hamburger) di sisi kanan atas.
- **Tombol Garis 3**: Tiga garis horizontal minimalis (`width: 22px; height: 1.5px; background: #ffffff;`).
- **Mobile Menu Drawer**:
  - Muncul halus dari atas/samping dengan latar belakang dark brown transparan (`backdrop-filter: blur(20px)`).
  - Tautan vertikal tersusun rapi dengan target sentuh (*tap target*) minimum 48px untuk kenyamanan jempol.
  - Terdapat toggle `ID | EN` dan tombol lebar penuh `Request Demo`.

---

## 5. FIRST-FOLD SCREEN (LAYAR PEMBUKA AWAL)

Layar pertama saat situs diakses (100dvh) dirancang hening, lapang, dan berbobot sinematik:

1. **Background Video Container**:
   - Membentang penuh (`width: 100%; height: 100%; object-fit: cover;`).
   - Placeholder sumber: `/videos/hero-background.mp4` didukung poster gambar fallback.
   - Dilapisi **Dark Brown Vignette Scrim**:
     `background: radial-gradient(circle at center, rgba(18, 15, 12, 0.45) 0%, rgba(18, 15, 12, 0.85) 100%);`
     memastikan teks putih di atasnya terbaca dengan sangat jernih.
2. **Typography Logo Besar (Focal Point)**:
   - Menampilkan berkas **`images/typography-logo-no-bg.png`** berukuran proporsional dan tajam di tengah layar.
3. **Deskripsi Singkat di Bawah Logo**:
   - Teks putih murni satu atau dua kalimat yang tenang, tanpa klaim palsu.
4. **Tombol Request Demo & Scroll Cue**:
   - Tombol tunggal `Request Demo` yang melayang elegan.
   - Penanda gulir (*scroll hint*) lembut di bagian bawah mengarahkan ke bagian ikhtisar.

---

## 6. TIPOGRAFI & SISTEM TULISAN (MODERN MINIMALIS)

- **Display, Headings & Body Font**: **Bricolage Grotesque** (`Google Fonts: Bricolage+Grotesque:opsz,wght@12..96,200..800`).
  - Menghadirkan karakter kontemporer modern minimalis yang berani, bersih, tajam, dan memiliki ritme tipografi yang kuat.
  - Menghilangkan gaya vintage/klasik editorial (tanpa font serif, tanpa angka miring/italic).
- **Aturan Copywriting (R-02 antislop)**:
  - **DILARANG MENGGUNAKAN EM DASH (`—`)**. Ganti dengan tanda koma (`,`), titik (`.`), titik dua (`:`), atau tanda kurung `()`.
  - Tanpa kata dengung AI (*buzzwords*) seperti "AI-powered", "revolutionary", "seamless". Teks harus jujur dan konkret.

---

## 7. STRUKTUR & RITME KONTEN (CONTENT SECTIONS)

Setiap bagian dibangun berdasarkan kebutuhan nyata produk Halaqoh, bukan template bawaan:

1. **#hero-initial (Layar Pembuka)**: Video background, typography logo besar, deskripsi tenang, CTA Request Demo.
2. **#overview (Ikhtisar & Spec Sheet)**: Judul display, lajur 4 metrik nyata (100% Luring, 5 Waktu Shalat, 114 Surat & Iqro, Rp 0 Bebas Langganan), dan kartu spesifikasi luring melayang tanpa rounded & tanpa border.
3. **#roles (Tiga Peran Pengguna)**: Tiga kartu melayang bernomor **1, 2, 3** (Guru Pengajar, Orang Tua Murid, Pengurus Admin) dengan rincian kewenangan konkret. Tanpa tag-pill kecil.
4. **#curriculum (Kurikulum & Kapabilitas)**: Penjelasan teknis modular mengenai 5 sesi shalat, kurikulum Iqro jilid 1 sampai 6, 114 surat Al-Qur'an, dan generator PDF A4 landscape native.
5. **#offline (Arsitektur Luring)**: Filosofi ketahanan saat sinyal padam dan 4 tahapan IndexedDB + Service Worker.
6. **#faq (Tanya Jawab Relevan)**: Accordion interaktif berisi 5 pertanyaan spesifik mengenai privasi murid dan backup data.
7. **#demo (Request Demo & Embed Tally)**: Kartu frame terpadu embed Tally (`https://tally.so/r/WOGdZJ`) yang rapi, melayang, dan presisi.
8. **#footer (Footer & Monogram)**: Watermark lembut `images/logo-no-bg.png` di latar belakang, peta tautan bilingual, dan copyright.

---

## 8. INTEGRASI TALLY MODAL & EMBED

- **CTA Tunggal**: Satu-satunya tombol aksi di seluruh web adalah **"Request Demo"**.
- **Aesthetic Pop-Up Modal**: Membuka popup resmi Tally dengan parameter estetis:
  ```html
  <button 
    data-tally-open="WOGdZJ" 
    data-tally-layout="modal" 
    data-tally-width="640" 
    data-tally-emoji-text="📖" 
    data-tally-emoji-animation="wave"
    class="cta-btn-luxury">
    Request Demo
  </button>
  ```
- **Fallback In-Page Embed**: Di seksi `#demo`, iframe dibungkus dalam container melayang berlatar dark brown dengan inner shadow rapi (`max-width: 720px`).

---

## 9. RESPONSIBILITAS MOBILE (ANDROID & IPHONE STANDARDS)

- **Unit Viewport**: Menggunakan `100dvh` (Dynamic Viewport Height) untuk menghindari glitch saat address bar peramban muncul atau tenggelam.
- **Safe Area Insets**: Mendukung `padding: env(safe-area-inset-top)` dan `env(safe-area-inset-bottom)` untuk notch serta dynamic island iPhone.
- **Target Sentuh**: Semua tautan, tombol, dan pengalih bahasa memiliki area klik minimum `44px x 44px`.
- **Zero Horizontal Scroll**: `overflow-x: hidden` terjamin di semua breakpoint.

---

## 10. REKAP KEPATUHAN ANTISLOP & ATURAN PENGGUNA

| Kriteria | Arahan Pengguna | Penanganan Antislop | Status |
| :--- | :--- | :--- | :--- |
| **Warna Latar** | Dark brown elegan (`#120f0c`) | Bukan hitam polos generic, berbasis brand identitas | **PASS** (R-21, R-29) |
| **Warna Font** | Wajib All Putih (`#ffffff`) | Hierarki diatur via font-size, weight, & opacity aman WCAG | **PASS** (R-25) |
| **Bentuk Kartu** | No rounded card (`0px`), No border card | Sharp architectural card, melayang dengan inner shadow | **PASS** (R-11, R-12) |
| **Tag & Numbering** | No tag kecil, penomoran alami (1, 2, dst) | Menghilangkan AI capsule badge & zero-padded 01 | **PASS** (R-09, R-05) |
| **Navbar** | Hanging water drop capsule, blur tipis, burger 3 garis | Floating teardrop capsule moderat, mobile toggle rapi | **PASS** (R-03, R-10, R-24) |
| **Copywriting** | Copy bilingual di [content.md](file:///c:/Users/abda/Desktop/WebApp/halaqoh/content.md) | Tanpa em dash (`—`), tanpa klaim palsu, data faktual | **PASS** (R-02, R-17, R-36) |
| **CTA** | Single CTA: Request Demo (Tally modal) | Tombol fungsional nyata, terhubung langsung | **PASS** (R-15, R-26) |
