# Ngaji VMT — Design System & UI/UX Specification (`DESIGN.md`)

Dokumen ini merupakan spesifikasi lengkap dan komprehensif sistem desain (*design system*), token UI, komponen antarmuka, tata letak (*layout*), tipografi, serta aturan UX untuk aplikasi **Ngaji VMT**.

---

## 1. Filosofi & Karakter Visual

Ngaji VMT dirancang untuk mencatat absensi dan setoran ngaji anak-anak di Musholla Al-Hidayah VMT (komplek perumahan, ~15 siswa, 1 admin, beberapa guru). Pengguna utamanya adalah guru ngaji dan orang tua siswa dari berbagai rentang usia di perangkat ponsel Android.

### 1.1. Prinsip Desain Inti
1. **Utilitarian & Editorial Paper Aesthetic (Neo-Brutalis Hangat):**
   - Menyerupai buku catatan/jurnal kertas ngaji tradisional yang bersih, tegas, dan berwibawa.
   - Menghindari gradien (*no gradients*), tanpa *glassmorphism*, tanpa ornamen bayangan berlebihan.
   - Kartu (*card*) memiliki sudut tegas tanpa *border-radius* (`border-radius: 0`), dipadukan dengan garis batas hitam pekat 1px (*1px solid ink*).
   - Kontrol interaktif (tombol, input, segmented, badge) memiliki lengkungan ramah (`border-radius: 8px`) untuk ergonomi jempol.
2. **Tanpa Dekorasi Kosong (No Fluff):**
   - Tanpa emoji di antarmuka fungsional.
   - Tanpa tanda pisah panjang em-dash (`—`) pada teks UI.
   - Tanpa panah dekoratif acak.
   - Label aksi bersifat langsung dan deskriptif bahasa Indonesia: misal `"Simpan"` (bukan `"Submit"`), `"Ubah Sesi"`, `"Tutup"`.
3. **Mobile-First & Universal Constraint:**
   - Didesain mulai dari layar sempit **360px** hingga batas maksimal lebar wadah **800px** (`--maxw`).
   - Shell 800px selalu rata tengah (*centered*) di layar tablet dan desktop dengan *bottom tab bar* yang tetap konsisten di bawah layar.
   - **Nol Horizontal Scroll:** Halaman tidak boleh bocor secara horizontal di resolusi mana pun. Tabel yang lebar dibungkus dalam kontainer `.table-wrap` berskrol lokal.
4. **Ergonomi Tap Target Minimum 48px:**
   - Seluruh elemen interaktif utama (input, tombol, segmented item, baris combobox, tanggal kalender) memiliki target sentuh minimal **48px** (`--tap: 48px`).

---

## 2. Token Desain (Design Tokens)

Seluruh token visual didefinisikan secara sentral di `src/app/globals.css` melalui variabel CSS `:root` dan diintegrasikan dengan modul Tailwind v4 `@theme inline`.

### 2.1. Palet Warna (Color Palette)

| Token CSS | Nilai HEX / RGBA | Peran & Penggunaan |
| :--- | :--- | :--- |
| `--cream` | `#f3ecd8` | Background utama kanvas aplikasi (`html`, `body`), state aktif opsi terpilih |
| `--paper` | `#fbf6e6` | Background kartu kontainer (`.card`), panel input, header, dan bottom tab bar |
| `--sand` | `#e7dcbc` | Background hover/sorot, pembatas halus (*separator*), indikator offline |
| `--ink` | `#000000` | Border utama, warna teks primer, tombol solid, judul, ikon |
| `--muted` | `#55503f` | Teks sekunder, label pembantu, placeholder, keterangan sub-ayat |
| `--hl` | `#c9d8a6` | Hijau zaitun pucat untuk penanda (*highlight*) tanggal jadwal hadir ngaji |
| `--danger` | `#8a1c1c` | Merah pekat untuk tombol hapus, badge kesalahan validasi, modal destruktif |

#### Warna Kontekstual Tambahan
- **Sesi Label Hijau Kontras:** `#14532d` (hijau tua pekat berbobot font 800 untuk nama sesi: MAGRIB, dsb.)
- **Peringatan (Warning):** `#b45309` (kuning-oranye tanah)
- **Sukses (Success):** `#15803d` (hijau status konfirmasi)
- **Backdrop Modal:** `rgba(0, 0, 0, 0.45)` dipadu dengan `backdrop-filter: blur(2px)`

### 2.2. Ukuran, Geometri, dan Spacing

| Token CSS | Nilai | Implementasi |
| :--- | :--- | :--- |
| `--maxw` | `800px` | Lebar maksimum kontainer aplikasi (`.app-shell`, `.tabbar-inner`) |
| `--tap` | `48px` | Tinggi minimal sentuhan jempol pada tombol dan input (`min-height: var(--tap)`) |
| `--radius-ctl` | `8px` | Radius sudut elemen kontrol (tombol, input, toast, segmented) |
| *Card Radius* | `0px` | Sudut kotak presisi dan tegas untuk kartu data dan kalender |
| `--shadow` | `0 1px 2px rgba(0, 0, 0, 0.14)` | Bayangan mikro sangat tipis untuk membedakan lapisan kertas |
| *Modal Shadow* | `0 8px 24px rgba(0, 0, 0, 0.25)` | Elevasi dialog konfirmasi dan *bottom sheet* |

### 2.3. Safe-Area & Viewport Fit
Aplikasi menerapkan `viewport-fit=cover` dengan kompensasi *notch* dan *home bar*:
```css
.app-shell {
  box-sizing: border-box;
  max-width: var(--maxw);
  margin: 0 auto;
  padding: calc(16px + env(safe-area-inset-top)) 16px calc(80px + env(safe-area-inset-bottom));
}

.tabbar {
  padding-bottom: env(safe-area-inset-bottom);
}
```

---

## 3. Sistem Tipografi & Aksesibilitas Skala Font

### 3.1. Rupa Huruf (Font Family)
- **Primary Typeface:** `Bricolage Grotesque` via `next/font/google` (`subsets: ["latin"]`, `variable: "--font-bricolage"`).
- **Fallback:** `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Huruf bergaya geometris-humanis kontemporer dengan legibilitas tinggi pada angka dan teks bahasa Indonesia.

### 3.2. Skala Hierarki Tipografi Default (Normal Mode)

| Elemen / Level | Ukuran (Font Size) | Ketebalan (Weight) | Jarak Baris (Line Height) |
| :--- | :--- | :--- | :--- |
| **Page Title (H1)** | `22px` - `24px` | Bold (`700`) | `1.25` |
| **Section Header (H2)** | `18px` | Bold (`700`) | `1.3` |
| **Subheader / Form Label (H3)** | `14px` - `16px` | Semi-bold (`600`) | `1.4` |
| **Body / Konten Utama** | `15px` - `16px` | Regular (`400`) / Medium (`500`) | `1.5` |
| **Controls (Button, Input)** | `15px` - `16px` | Semi-bold (`600`) | `1.0` |
| **Caption / Sublabel / Waktu** | `12px` - `13px` | Regular (`400`) / Medium (`500`) | `1.4` |
| **Badge / Tab Bar Title** | `12px` | Medium (`500`) / Bold (`700`) | `1.2` |

### 3.3. Fitur Aksesibilitas: Pembesaran Font Global (+3px)
Untuk mempermudah lansia, orang tua murid, atau guru saat memeriksa data:
- Terdapat tombol *toggle* ukuran font khusus di bagian tengah Header atas (`/icons/fontsize-logo.png`).
- Mode disimpan di `localStorage("ngaji_font_size")` dan disinkronkan secara reaktif tanpa jeda (`useSyncExternalStore` + event `ngaji-font-change`).
- Mengaktifkan atribut DOM: `html[data-font-size="large"]`.
- Seluruh teks dinaikkan presisi **+3px**:
  - `html, body`: `16px` → `19px`
  - Inline style `11px` → `14px`, `12px` → `15px`, `13px` → `16px`, `14px` → `17px`, `16px` → `19px`, `18px` → `21px`, `24px` → `27px`.
  - Kontrol `.input`, `.btn`, `.cal-day`: `17px`.
  - Label tab bar `.tabbar span`: `13px`.

---

## 4. Kerangka Antarmuka (Layout & Navigation Shell)

Aplikasi memiliki satu struktur wadah yang konsisten untuk seluruh ukuran layar.

```
┌────────────────────────────────────────────────────────┐
│  Sticky Header (52px min-height, border-b: 1px ink)   │
│  [Logo + Ngaji VMT]       [Font Toggle]   [Admin][Keluar]│
├────────────────────────────────────────────────────────┤
│                                                        │
│  App Shell (.app-shell, max-width: 800px, centered)   │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │ .card (bg: paper, border: 1px solid ink, r: 0)  │  │
│  │                                                  │  │
│  │ Konten Halaman (Absensi / Kalender / Riwayat)     │  │
│  │                                                  │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
├────────────────────────────────────────────────────────┤
│  Fixed Bottom TabBar (56px min-height, z-index: 50)    │
│  [  Absen  ]  [ Kalender ]  [ Riwayat ]  [ Statistik ] │
└────────────────────────────────────────────────────────┘
```

### 4.1. Header Atas (`Header.tsx`)
- **Struktur Grid 3 Kolom:** `gridTemplateColumns: "1fr auto 1fr"` untuk memastikan tombol font scaler selalu persis di tengah tengah layar.
- **Kiri:** Logo resmi 26x26px (`/icons/icon-192x192.png`) bersanding dengan teks tebal `"Ngaji VMT"`.
- **Tengah:** Tombol interaktif ikon font toggle (`32x32px`, `borderRadius: 8px`). Bila aktif, berlatar `--sand`.
- **Kanan:** Link proteksi `Admin` (hanya tampil untuk role admin) dan tombol `Keluar` (logout).
- **Proteksi Mode Offline:** Jika perangkat sedang offline dan pengguna mengeklik `Admin`, modal peringatan muncul otomatis tanpa memecah aplikasi.

### 4.2. Navigasi Bawah (`TabBar.tsx`)
- **Fixed di Bawah Layar:** `position: fixed; bottom: 0; left: 0; right: 0; z-index: 50;`.
- **4 Tab Utama:**
  1. **Absen (`/absensi`):** Ikon `CheckSquare` (Checklist harian)
  2. **Kalender (`/kalender`):** Ikon `Calendar` (Jadwal & kehadiran)
  3. **Riwayat (`/riwayat`):** Ikon `List` (Pencarian & filter log)
  4. **Statistik (`/statistik`):** Ikon `BarChart3` (Progres & tautan publik)
- **Status Aktif:** Pembalikan warna kontras tinggi: berlatar belakang hitam pekat (`var(--ink)`), teks krem (`var(--cream)`), ketebalan huruf `700`.
- **Garis Pembatas:** Setiap item dipisahkan garis vertikal hitam `1px solid var(--ink)`.
- **Penjaga Offline:** Jika perangkat offline dan pengguna mencoba berpindah ke Kalender, Riwayat, atau Statistik, sistem memunculkan dialog peringatan bahwa halaman tersebut butuh koneksi internet dan mengarahkan pengguna tetap mencatat di tab Absen.

---

## 5. Komponen Desain Atomik (UI Components)

### 5.1. Button (`Button.tsx`)
Komponen tombol dengan tinggi sentuhan ergonomis minimal 48px.

| Varian | Style | Skenario Pemakaian |
| :--- | :--- | :--- |
| `primary` (default) | Background `--ink`, Teks `--cream`, Border `--ink`, Radius 8px | Aksi utama formulir ("Simpan", "Sinkronkan") |
| `outline` | Background `--paper`, Teks `--ink`, Border 1px `--ink`, Radius 8px | Aksi sekunder ("Ubah Sesi", "Batal", "Filter") |
| `ghost` | Background transparan, Teks `--ink`, Tanpa border | Tombol tutup modal, aksi baris minor |
| `danger` | Background `--danger`, Teks `--cream`, Border `--danger` | Aksi destruktif ("Hapus", "Reset") |

- **State Disabled:** `opacity: 0.45; cursor: not-allowed;`
- **Focus Ring:** `outline: 2px solid var(--ink); outline-offset: 2px;`

### 5.2. Input (`Input.tsx`)
- Elemen input teks, angka, kata sandi.
- Tinggi minimal `var(--tap)` (48px), padding horizontal `12px`.
- Background `var(--paper)`, teks `var(--ink)`, border `1px solid var(--ink)`, radius `8px`.
- Menyesuaikan ukuran font secara otomatis saat mode pembesaran aktif.

### 5.3. Card (`Card.tsx`)
- Wadah pengelompokan konten utama.
- Background `var(--paper)`, border `1px solid var(--ink)`, radius `0px` (*sharp edges*).
- Bayangan mikro `var(--shadow)` (`0 1px 2px rgba(0,0,0,0.14)`).

### 5.4. Segmented Control (`Segmented.tsx`)
- Tab pengalih opsi formulir berbentuk pil bersambung.
- Membungkus n-tombol dalam grid terbagi rata (`repeat(N, 1fr)`).
- Wadah bergaris batas `1px solid var(--ink)` dengan `border-radius: 8px` dan `overflow: hidden`.
- Item aktif berubah menjadi blok hitam solid (`background: var(--ink); color: var(--cream); font-weight: 700;`).
- Item tidak aktif berlatar transparan dengan teks hitam reguler.

### 5.5. Combobox Autocomplete (`Combobox.tsx`)
- Komponen pencarian cepat untuk nama siswa (15+ siswa) dan daftar 114 Surat Al-Quran.
- Dilengkapi normalisasi teks cerdas (menghilangkan tanda petik Arab, transliterasi, huruf besar/kecil).
- Navigasi penuh via keyboard: Panah Bawah (`ArrowDown`), Panah Atas (`ArrowUp`), `Enter` untuk memilih, `Escape` untuk menutup.
- Menu dropdown melayang (`position: absolute; z-index: 50;`) dengan batas tinggi `260px` ber-scroll vertikal lancar.
- Opsi yang sedang disorot berlatar `--sand`, opsi yang terpilih berlatar `--cream`.

### 5.6. Modal Dialog (`ModalDialog.tsx`)
- Dialog konfirmasi penting dan peringatan sistem.
- Menutup saat tombol `Escape` ditekan atau mengklik area luar (*backdrop click*).
- Mengunci scroll halaman latar (`document.body.style.overflow = "hidden"`).
- Varian visual badge ikon:
  - `danger`: Ikon tempat sampah merah pekat
  - `warning`: Ikon segitiga peringatan kuning-oranye tanah
  - `info`: Ikon informasi hitam netral
  - `success`: Ikon centang hijau sukses

### 5.7. Sheet Drawer (`Sheet.tsx`)
- Bottom sheet drawer yang muncul dari tepi bawah layar untuk menampilkan riwayat detail harian atau filter mendalam.
- Batas maksimal tinggi `85dvh` dengan area konten internal yang dapat di-scroll (`overflow-y: auto`).
- Garis tepi atas, kiri, dan kanan terikat hitam `1px solid var(--ink)` dengan sudut atas tegas.

### 5.8. Toast Notification (`Toast.tsx`)
- Feedback ringkas mengambang (*floating pill*) di bagian atas tengah layar (`position: fixed; top: 16px; left: 50%; transform: translateX(-50%); z-index: 200;`).
- Latar hitam pekat `--ink`, teks krem `--cream`, radius 8px, durasi default 3000ms.

---

## 6. Spesifikasi Antarmuka Per Halaman

### 6.1. Halaman Masuk (`/login`)
- Ditujukan untuk guru dan admin komplek.
- Kartu tunggal di tengah layar dengan lebar maksimal `420px`.
- Menampilkan logo resmi `44x44px`, judul `"Masuk"`, deskripsi `"Sistem absensi dan setoran Ngaji VMT"`.
- Bidang nama pengguna dan kata sandi dengan tombol aksi penuh `"Masuk"`.
- Catatan kaki minimalis berjarak `24px`: `"by ikhlasulabda"`.

### 6.2. Halaman Absensi (`/absensi`)
Halaman kerja utama guru saat sesi ngaji berlangsung.
1. **Header Status Sesi:**
   - Menampilkan tanggal format bahasa Indonesia lengkap (contoh: `"Kamis, 12 Oktober 2026"`).
   - Pemisah *double-spaced pipe* (`"  |  "`).
   - Label nama sesi berwarna hijau tua kontras tinggi (`#14532d`, font weight 800): contoh `"Sesi MAGRIB"`.
   - Tombol outline di kanan: `"Ubah Sesi"`.
2. **Form Pilihan Dinamis:**
   - Dropdown Siswa (Combobox).
   - Pengalih Jenis Catatan (Segmented 3 opsi): **Setoran**, **Tahsin**, **Iqro**.
   - Mode Iqro: Memilih Jilid (Jilid 1 s.d. 6) dan rentang Halaman. Halaman awal otomatis menyamakan halaman akhir jika hanya satu halaman yang dibaca.
   - Mode Al-Quran (Setoran / Tahsin): Pilihan metode Surat (Surat 1 s.d. 114 + Ayat Dari-Sampai) atau Halaman (Halaman 1 s.d. 604).
3. **Tombol Simpan Utama:**
   - Tombol blok hitam besar di bagian bawah formulir: `"Simpan Entri Absensi"`.
4. **Daftar Entri Hari Ini:**
   - Kartu daftar riwayat yang dicatat pada hari dan sesi bersangkutan.
   - Setiap baris menampilkan nama siswa, jenis setoran, capaian, serta tombol ikon hapus (tempat sampah).
   - Hak hapus: Guru hanya dapat menghapus data inputannya sendiri pada hari itu; Admin memiliki hak menghapus data siapa pun.
5. **Indikator Mode Offline & Sinkronisasi:**
   - Saat koneksi putus: Banner kuning `--sand` mengumumkan mode offline aktif dengan ikon `WifiOff`.
   - Panel antrean menampilkan jumlah data tersimpan di IndexedDB lokal (`students_cache` dan `offline_queue`).
   - Tombol `"Sinkronkan Sekarang"` dengan animasi putar halus (`RefreshCw`) saat internet kembali aktif.

### 6.3. Halaman Kalender (`/kalender`)
- **Kalender Grid 7 Kolom:** Senin sampai Minggu (`.cal-grid`).
- **Sel Tanggal Kotak Presisi (`.cal-day`):** `aspect-ratio: 1`, border 1px solid ink, background paper.
- **Tanggal Ada Jadwal Ngaji:** Diberi highlight warna hijau pucat zaitun (`background: var(--hl); font-weight: 700;`).
- Mengklik salah satu tanggal membuka `Sheet` detail dari bawah yang memperinci daftar santri yang hadir dan capaian ayat/halaman pada tanggal tersebut.

### 6.4. Halaman Riwayat (`/riwayat`)
- Tabel data tabular dengan filter komprehensif: rentang tanggal, nama siswa, nama sesi, jenis rekaman.
- Pembungkus tabel `.table-wrap` mencegah halaman bergeser ke kanan.
- Fitur seleksi kolom dinamis (*show/hide columns*).

### 6.5. Halaman Statistik (`/statistik`)
- **Grafik Interaktif (Recharts):** Grafik batang kehadiran siswa terhadap target kalender aktif.
- **Tautan Profil Publik Siswa:** Kartu profil yang menampilkan nama setiap anak beserta tautan acak terproteksi slug uniknya.
- **Dukungan Multi-Siswa untuk Orang Tua:** Fitur menggabungkan beberapa anak dalam satu tautan khusus (pemisah tanda tambah `+` atau koma `,`).

### 6.6. Halaman Profil Publik Siswa (`/[slug]`)
Halaman transparan tanpa autentikasi untuk wali santri.
- **Grid Futuristik Minimalis Bulanan:** Menampilkan rekonsiliasi matriks 5 sesi per hari: **Subuh, Zuhur, Ashar, Magrib, Isya**.
- **Tab Switcher Multi-Siswa:** Jika link berisi beberapa anak (misal: `/dafi-8qRWe7+jeyhan-3xKp9A`), wali santri dapat berpindah antar anak dalam satu ketukan tab.
- **Tombol Bagikan & Unduh PDF:** Mendukung Web Share API (dengan fallback salin ke clipboard) dan tombol unduh PDF resmi.

---

## 7. Sistem Ekspor Dokumen & Standar Cetak (Print & PDF Specs)

Aplikasi memiliki dua metode ekspor dokumen dengan rancangan visual presisi:

### 7.1. Lembar Rekap PDF Otomatis (Generator Native PDF 1.4)
Dokumen resmi yang diunduh langsung (*direct download*) oleh orang tua santri:
- **Judul Dokumen:** `"Rekap Ngaji <Nama Siswa> Musholla Al-Hidayah VMT"` (Ukuran teks 14pt, tebal, rata tengah).
- **Blok Informasi Rata Kiri:**
  - `Periode          : <Bulan> <Tahun>`
  - `Tanggal Download: <Format Lengkap WIB, contoh: 12 Oktober 2026, 17:00 WIB>`
- **Gaya Tabel:** Garis batas hitam pekat 1px (*all-black border*), latar belakang putih bersih tanpa gradasi, teks hitam pekat.
- **Watermark Halus:** Teks watermark transparansi rendah (*low opacity*) di bagian bawah halaman.
- **Penamaan Berkas Otomatis:** `rekap ngaji <nama_siswa> <tanggal_download>.pdf`.

### 7.2. CSS Media Print (Cetak Browser Langsung)
Didefinisikan di `globals.css` pada blok `@media print`:
```css
@media print {
  @page {
    size: A4 landscape;
    margin: 8mm 10mm 12mm 10mm;
  }
  body {
    background: #ffffff !important;
    color: #000000 !important;
    font-size: 10pt !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  .no-print { display: none !important; }
  .print-only { display: block !important; }
  .table-wrap { overflow: visible !important; border: none !important; }
  table { width: 100% !important; border-collapse: collapse !important; }
  th, td { border: 1px solid #000000 !important; padding: 5px 6px !important; }
  thead th { background: #f2f2f2 !important; font-weight: 700 !important; }
}
```

---

## 8. Panduan Interaksi, Gerakan & Aksesibilitas (A11y)

### 8.1. Aturan Gerakan & Animasi
- **Animasi Fungsional Saja:** Animasi hanya dipakai sebagai umpan balik aksi langsung (seperti putaran ikon sinkronisasi `animate-spin` saat sinkronisasi aktif atau transisi fade modal).
- **Penghormatan Preferensi Pengguna (`prefers-reduced-motion`):**
  ```css
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
  }
  ```

### 8.2. Standar Kontras & Aksesibilitas Web
- Seluruh kombinasi warna teks dan latar belakang memenuhi rasio kontras minimum WCAG AA (teks hitam `#000000` di atas kertas `#fbf6e6` menghasilkan rasio kontras tinggi `~18:1`).
- Semua tombol dan link interaktif memiliki state fokus yang kentara:
  ```css
  :where(.btn, .input, a, button, select):focus-visible {
    outline: 2px solid var(--ink);
    outline-offset: 2px;
  }
  ```
- Seluruh dialog modal mengimplementasikan atribut ARIA semantik: `role="dialog"`, `aria-modal="true"`, dan fokus penutupan otomatis via tombol `Escape`.

---

## 9. Ringkasan Cheatsheet Pengembang (Quick Reference)

```tsx
// 1. Kartu Standar
<Card className="p-4 mb-4">...</Card>

// 2. Tombol Utama (Tinggi 48px, Radius 8px)
<Button variant="primary" onClick={handleSave}>Simpan</Button>

// 3. Tombol Outline / Sekunder
<Button variant="outline" onClick={handleCancel}>Batal</Button>

// 4. Input Teks
<Input placeholder="Ketik catatan..." value={val} onChange={...} />

// 5. Pemilih Segmen
<Segmented
  options={[
    { value: "setoran", label: "Setoran" },
    { value: "tahsin", label: "Tahsin" },
    { value: "iqro", label: "Iqro" }
  ]}
  value={type}
  onChange={setType}
/>

// 6. Pencarian Dropdown Autocomplete
<Combobox
  options={studentOptions}
  value={studentId}
  onChange={setStudentId}
  placeholder="Pilih nama santri..."
/>
```

*Dokumen ini merupakan panduan tunggal dan acuan mutlak dalam setiap implementasi komponen dan halaman baru di repositori Ngaji VMT.*
