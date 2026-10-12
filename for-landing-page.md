# Sumber Materi Landing Page: Ngaji VMT (Halaqoh)

Dokumen ini merupakan bahan mentah berbasis bukti kode (*code-based evidence*) untuk penyusunan halaman landing page pemasaran aplikasi manajemen pengajian anak.

---

## 1. IDENTITAS APP

- **Nama Aplikasi Saat Ini dalam Kode**: `Ngaji VMT`
  - Manifest: `"Ngaji VMT"` ([`src/app/manifest.ts:5`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/manifest.ts#L5))
  - Metadata Root Layout: `"Ngaji VMT"` ([`src/app/layout.tsx:12`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/layout.tsx#L12))
  - Header Aplikasi: `"Ngaji VMT"` ([`src/components/layout/Header.tsx:134`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/components/layout/Header.tsx#L134))
  - Repositori & Package: `ngaji-vmt` ([`package.json:2`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/package.json#L2))
- **Tujuan Aplikasi (Satu Kalimat)**:
  Aplikasi web progresif (PWA) untuk mencatat kehadiran dan progres setoran hafalan serta bacaan ngaji santri/anak-anak (Iqro dan Al-Qur'an) secara luring (*offline-first*) maupun daring, serta membagikan rekap transparan kepada orang tua.
- **Sasaran Pengguna Berdasarkan Peran dalam Kode**:
  1. Pengelola/Pengurus Pengajian (`admin`)
  2. Guru/Ustadz Pengajar (`guru`)
  3. Orang Tua/Wali Santri (`public/parent view` via tautan slug publik tanpa login)
- **Bahasa Antarmuka**:
  100% Bahasa Indonesia (`lang="id"` pada [`src/app/layout.tsx:44`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/layout.tsx#L44)).
- **Daftar Keterikatan Komunitas Spesifik (Perlu Digeneralisasi untuk Produk Umum)**:
  Berikut adalah daftar lokasi kode yang memuat nama komunitas spesifik *"Ngaji VMT"* atau *"Musholla Al-Hidayah VMT"*:
  1. [`src/lib/pdf-generator.ts:176`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/pdf-generator.ts#L176): Judul cetak PDF memuat `"Rekap Ngaji ${studentName} Musholla Al-Hidayah VMT"`. *(Perlu digeneralisasi)*
  2. [`src/lib/pdf-generator.ts:337`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/pdf-generator.ts#L337): Watermark dokumen PDF memuat `"Ngaji VMT by ikhlasulabda"`. *(Perlu digeneralisasi)*
  3. [`src/app/[slug]/StudentProfileView.tsx:91`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/StudentProfileView.tsx#L91): Judul Web Share API memuat `"Rekap Ngaji ${studentNames} Musholla Al-Hidayah VMT"`. *(Perlu digeneralisasi)*
  4. [`src/app/[slug]/StudentProfileView.tsx:92`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/StudentProfileView.tsx#L92): Teks pembuka pesan WhatsApp memuat `"Assalamu'alaikum, berikut rekap kehadiran dan setoran ngaji ${studentNames} di Musholla Al-Hidayah VMT:"`. *(Perlu digeneralisasi)*
  5. [`src/app/[slug]/StudentProfileView.tsx:164`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/StudentProfileView.tsx#L164): Heading level 1 halaman cetak memuat `"Rekap Ngaji {data.student.name} Musholla Al-Hidayah VMT"`. *(Perlu digeneralisasi)*
  6. [`src/app/[slug]/StudentProfileView.tsx:520`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/StudentProfileView.tsx#L520), [`527`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/StudentProfileView.tsx#L527): Alt teks logo `"Logo Ngaji VMT"` dan label nama instansi `"Musholla Al-Hidayah VMT"`. *(Perlu digeneralisasi)*
  7. [`src/app/[slug]/StudentProfileView.tsx:790`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/StudentProfileView.tsx#L790): Footer kartu web memuat `"Ngaji VMT by ikhlasulabda"`. *(Perlu digeneralisasi)*
  8. [`src/app/[slug]/page.tsx:67`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/page.tsx#L67), [`81`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/page.tsx#L81): Tag title meta halaman publik memuat `"Rekap Ngaji Musholla Al-Hidayah VMT"` dan `"Rekap Ngaji ${displayName} Musholla Al-Hidayah VMT"`. *(Perlu digeneralisasi)*
  9. [`src/app/(private)/statistik/StatistikClient.tsx:167-168`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/statistik/StatistikClient.tsx#L167-L168): Teks salin tautan multi-siswa memuat nama `"Musholla Al-Hidayah VMT"`. *(Perlu digeneralisasi)*
  10. [`src/app/manifest.ts:5-6`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/manifest.ts#L5-L6): Nama manifest aplikasi `"Ngaji VMT"`. *(Perlu digeneralisasi)*
  11. [`src/app/layout.tsx:12`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/layout.tsx#L12), [`46`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/layout.tsx#L46): Title root layout dan apple-mobile-web-app-title `"Ngaji VMT"`. *(Perlu digeneralisasi)*
  12. [`src/app/login/page.tsx:50`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/login/page.tsx#L50), [`61`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/login/page.tsx#L61): Subjudul halaman login `"Sistem absensi dan setoran Ngaji VMT"`. *(Perlu digeneralisasi)*
  13. [`src/components/layout/Header.tsx:128`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/components/layout/Header.tsx#L128), [`134`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/components/layout/Header.tsx#L134): Header navbar memuat logo dan teks `"Ngaji VMT"`. *(Perlu digeneralisasi)*
  14. [`src/lib/offline-db.ts:17`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/offline-db.ts#L17): Nama database IndexedDB lokal `"ngaji_offline_db"`. *(Perlu digeneralisasi)*
  15. [`src/lib/security.ts:23`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/security.ts#L23): Nama cookie autentikasi `"__Host-ngaji_session"` / `"ngaji_session"`. *(Perlu digeneralisasi)*
  16. [`src/app/api/admin/backup/route.ts:63`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/api/admin/backup/route.ts#L63): Nama cookie sesi backup `"ngaji_backup_session_token"`. *(Perlu digeneralisasi)*
  17. [`scripts/seed.ts:136`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/scripts/seed.ts#L136): Jalur berkas seed data Excel mengarah ke berkas data lokal perumahan VMT. *(Perlu digeneralisasi)*

---

## 2. PERAN PENGGUNA

### A. Peran Administrator (`admin`)
- **Akses Antarmuka**: Seluruh rute aplikasi (`/absensi`, `/kalender`, `/riwayat`, `/statistik`, `/admin`).
- **Bukti Otorisasi**: [`src/lib/auth.ts:138-144`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/auth.ts#L138-L144) (`requireRole("admin")`), [`src/app/(private)/admin/page.tsx:16-19`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/admin/page.tsx#L16-L19).
- **Kemampuan**:
  - Mengelola data santri (tambah santri baru, edit nama, regenerasi tautan slug publik, toggle status aktif/nonaktif, dan hapus santri) ([`src/app/(private)/admin/AdminClient.tsx:288-358`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/admin/AdminClient.tsx#L288-L358)).
  - Mengelola akun guru pengajar (buat akun, atur peran admin/guru, aktifkan/nonaktifkan guru, reset kata sandi, hapus akun guru) ([`src/app/(private)/admin/AdminClient.tsx:361-420`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/admin/AdminClient.tsx#L361-L420)).
  - Mengatur jadwal pengajian rutin mingguan (pilihan hari 0-6 dan pilihan sesi shalat) ([`src/app/(private)/admin/AdminClient.tsx:423-450`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/admin/AdminClient.tsx#L423-L450)).
  - Mengatur pengecualian kalender (menandai hari libur atau jadwal mengaji tambahan beserta catatan) ([`src/app/(private)/admin/AdminClient.tsx:453-485`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/admin/AdminClient.tsx#L453-L485)).
  - Mengubah batas rentang tanggal aktif kalender pengajian ([`src/app/(private)/admin/AdminClient.tsx:488-510`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/admin/AdminClient.tsx#L488-L510)).
  - Mengunduh berkas cadangan database JSON utuh (`/api/admin/backup`) dan ekspor berkas CSV per tabel (`/api/admin/export-csv`) ([`src/app/api/admin/backup/route.ts`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/api/admin/backup/route.ts), [`src/app/api/admin/export-csv/route.ts`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/api/admin/export-csv/route.ts)).
  - Memulihkan data (*restore*) secara atomik dari berkas JSON dengan konfirmasi kata kunci `RESTORE` ([`src/app/(private)/admin/AdminClient.tsx:550-580`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/admin/AdminClient.tsx#L550-L580)).
  - Menghapus data historis lama berbasis rentang tanggal (fitur terkunci sampai backup diunduh dalam sesi yang sama) ([`src/app/(private)/admin/AdminClient.tsx:583-620`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/admin/AdminClient.tsx#L583-L620)).
  - Memantau jejak audit (*audit log*) seluruh aktivitas keamanan dan login pengguna ([`src/app/(private)/admin/AdminClient.tsx:630-670`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/admin/AdminClient.tsx#L630-L670)).
  - Memiliki semua kemampuan operasional guru (mencatat absensi dan memantau riwayat/statistik).

### B. Peran Guru Pengajar (`guru`)
- **Akses Antarmuka**: Halaman operasional mengaji (`/absensi`, `/kalender`, `/riwayat`, `/statistik`). Ditolak saat membuka `/admin` (HTTP 403 / dialihkan) ([`src/lib/auth.ts:140-142`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/auth.ts#L140-L142), [`src/app/(private)/admin/page.tsx:18`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/admin/page.tsx#L18)).
- **Bukti Otorisasi**: [`src/lib/auth.ts:130-136`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/auth.ts#L130-L136) (`requireUser()`).
- **Kemampuan**:
  - Mencatat kehadiran santri secara langsung saat online maupun saat tidak ada internet (*offline*) ([`src/app/(private)/absensi/AbsensiClient.tsx`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/AbsensiClient.tsx)).
  - Memilih santri aktif, menentukan jenis materi (Iqro, Al-Qur'an Surat, Al-Qur'an Halaman), dan metode (tahsin atau setoran hafalan).
  - Mengubah sesi secara manual jika berada di luar jadwal otomatis.
  - Menghapus entri absensi harian yang salah input ([`src/app/(private)/absensi/actions.ts:167-217`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/actions.ts#L167-L217)).
  - Melihat kalender jadwal aktif pengajian dan hari libur ([`src/app/(private)/kalender/page.tsx`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/kalender/page.tsx)).
  - Melihat rekaman riwayat absensi seluruh santri ([`src/app/(private)/riwayat/page.tsx`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/riwayat/page.tsx)).
  - Memantau grafik kehadiran di halaman statistik dan membagikan tautan santri tunggal atau gabungan ke orang tua ([`src/app/(private)/statistik/StatistikClient.tsx:138-165`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/statistik/StatistikClient.tsx#L138-L165)).

### C. Tampilan Publik / Orang Tua Santri (`public/parent view`)
- **Akses Antarmuka**: Halaman profil santri berbasis slug acak: `/[slug]` (misal `/dafi-ahmad-x7k9p2` atau gabungan `/slugA+slugB`).
- **Bukti Otorisasi**: Rute publik tanpa memerlukan login sesi atau cookie ([`src/app/[slug]/page.tsx:89-95`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/page.tsx#L89-L95)). Dilindungi pembatas laju IP publik (30 req/menit) ([`src/app/[slug]/page.tsx:102`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/page.tsx#L102)).
- **Kemampuan**:
  - Melihat rekap kehadiran anak pada bulan berjalan atau bulan-bulan sebelumnya.
  - Memantau tabel rinci kehadiran per hari pada 5 sesi waktu shalat.
  - Membaca catatan capaian mengaji anak (jilid dan halaman Iqro, nama surat dan rentang ayat, atau nomor halaman Al-Qur'an).
  - Berpindah tab anak secara simultan jika membuka tautan gabungan beberapa anak (misal kakak-adik) ([`src/app/[slug]/StudentProfileView.tsx:145-160`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/StudentProfileView.tsx#L145-L160)).
  - Mengunduh berkas laporan bulanan dalam bentuk dokumen PDF resmi siap cetak layout A4 Landscape ([`src/app/[slug]/StudentProfileActions.tsx:55-70`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/StudentProfileActions.tsx#L55-L70), [`src/app/[slug]/StudentProfileView.tsx:118-140`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/StudentProfileView.tsx#L118-L140)).
  - Membagikan ulang tautan profil santri ke WhatsApp via Web Share API ([`src/app/[slug]/StudentProfileActions.tsx:23-41`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/StudentProfileActions.tsx#L23-L41)).

---

## 3. FITUR

### A. Absensi dan Deteksi Sesi
- **Sesi Shalat Berdasarkan Waktu Server Asia/Jakarta** `[IMPLEMENTED]`
  - Mendukung 5 sesi mengaji: Subuh (04:00-06:00), Zuhur (11:30-13:30), Ashar (14:30-16:30), Magrib (17:30-19:00), dan Isya (19:00-21:00).
  - Bukti: [`src/lib/sessions.ts:4-10`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/sessions.ts#L4-L10).
- **Deteksi Sesi Otomatis vs Pilihan Manual** `[IMPLEMENTED]`
  - Aplikasi otomatis mendeteksi sesi shalat yang sedang aktif berdasarkan jam server saat guru membuka form. Jika di luar jam sesi shalat atau menginput tanggal lampau, guru dapat beralih ke mode manual untuk memilih tanggal dan sesi secara eksplisit.
  - Bukti: [`src/lib/sessions.ts:34-38`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/sessions.ts#L34-L38), [`src/app/(private)/absensi/actions.ts:35-56`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/actions.ts#L35-L56).

### B. Pencatatan Bacaan Iqro dan Al-Qur'an
- **Cakupan Materi Iqro (Jilid 1 sampai 6)** `[IMPLEMENTED]`
  - Mencatat jilid Iqro 1 sampai 6 dan rentang halaman mulai hingga halaman akhir (halaman 1 sampai 100).
  - Bukti: [`src/lib/quran.ts:18-30`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/quran.ts#L18-L30), [`src/lib/quran.ts:82-96`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/quran.ts#L82-L96), [`src/lib/quran.ts:113-119`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/quran.ts#L113-L119).
- **Cakupan Materi Al-Qur'an (Surat dan Halaman)** `[IMPLEMENTED]`
  - Mendukung pencarian 114 surat Al-Qur'an (nama latin & nomor surat) dengan validasi batas total ayat per surat (berbasis basis data lokal `src/data/surah.json`).
  - Mendukung opsi pencatatan berbasis nomor halaman Mushaf Standar (halaman 1 sampai 604).
  - Mendukung klasifikasi metode: `tahsin` (bimbingan bacaan) dan `setoran` (hafalan).
  - Bukti: [`src/lib/quran.ts:1-16`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/quran.ts#L1-L16), [`src/lib/quran.ts:98-111`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/quran.ts#L98-L111).
- **Multi-Catatan per Sesi Kehadiran** `[IMPLEMENTED]`
  - Dalam satu kehadiran anak di satu sesi, guru dapat menginput lebih dari satu rekaman (misal santri membaca Iqro sekaligus menyetorkan hafalan surat pendek).
  - Bukti: [`src/db/schema.ts:48-61`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/db/schema.ts#L48-L61), [`src/app/(private)/absensi/actions.ts:132-141`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/actions.ts#L132-L141).

### C. Kalender, Aturan Jadwal, dan Pengecualian
- **Grid Kalender Interaktif** `[IMPLEMENTED]`
  - Kalender bulanan 7 kolom yang menandai hari-hari aktif jadwal ngaji dan status kehadiran santri.
  - Bukti: [`src/app/(private)/kalender/KalenderClient.tsx`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/kalender/KalenderClient.tsx), [`src/app/globals.css:83-96`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/globals.css#L83-L96).
- **Aturan Jadwal Mingguan Rutin** `[IMPLEMENTED]`
  - Admin dapat menentukan jadwal hari rutin dalam seminggu (misalnya setiap Selasa, Rabu, dan Jumat pada sesi Magrib).
  - Bukti: [`src/db/schema.ts:63-67`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/db/schema.ts#L63-L67).
- **Pengecualian Kalender (Libur dan Sesi Tambahan)** `[IMPLEMENTED]`
  - Admin dapat menetapkan tanggal tertentu sebagai `libur` atau `tambahan` di luar jadwal rutin beserta keterangan catatan.
  - Bukti: [`src/db/schema.ts:69-73`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/db/schema.ts#L69-L73).
- **Rentang Kalender Dinamis Tanpa Hardcode Tahun** `[IMPLEMENTED]`
  - Rentang tanggal operasional kalender tersimpan dinamis di database (`settings.calendar_start` dan `settings.calendar_end`), sehingga tahun ajaran baru dapat diperpanjang tanpa perubahan kode.
  - Bukti: [`src/db/schema.ts:75-79`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/db/schema.ts#L75-L79), [`README.md:94-99`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/README.md#L94-L99).

### D. Riwayat dan Statistik
- **Pencarian dan Filter Riwayat** `[IMPLEMENTED]`
  - Tabel riwayat absensi log harian/bulanan dengan detail nama santri, sesi, status input (otomatis/manual), nama guru pencatat, dan rincian bacaan.
  - Bukti: [`src/app/(private)/riwayat/RiwayatClient.tsx`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/riwayat/RiwayatClient.tsx).
- **Statistik & Visualisasi Grafik** `[IMPLEMENTED]`
  - Visualisasi kehadiran bulanan menggunakan Recharts (diagram tren absensi), metrik kehadiran total santri, dan rekap per sesi shalat.
  - Bukti: [`src/app/(private)/statistik/StatistikClient.tsx`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/statistik/StatistikClient.tsx).

### E. Halaman Publik Santri dan Berbagi ke Orang Tua
- **Halaman Profil Santri Berbasis Slug Acak** `[IMPLEMENTED]`
  - Santri memiliki slug unik publik berupa nama dan 6 karakter acak kriptografis (misal `budi-santoso-a9x2f1`). Slug dapat diganti (*regenerate*) oleh admin jika tautan bocor.
  - Bukti: [`src/lib/security.ts:97-104`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/security.ts#L97-L104), [`src/app/[slug]/page.tsx`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/page.tsx).
- **Tautan Gabungan Multi-Santri untuk Orang Tua (Operator `+` atau `,`)** `[IMPLEMENTED]`
  - Guru dapat memilih beberapa santri di halaman statistik dan membuat satu tautan gabungan (contoh: `/[slugA]+[slugB]` atau `/[slugA],[slugB]`). Orang tua yang memiliki lebih dari satu anak dapat melihat rekap seluruh anaknya dalam satu layar dengan tab interaktif.
  - Bukti: [`src/app/(private)/statistik/StatistikClient.tsx:115-117`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/statistik/StatistikClient.tsx#L115-L117), [`src/app/[slug]/StudentProfileView.tsx:145-160`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/StudentProfileView.tsx#L145-L160).
- **Integrasi Web Share API dan Salin Tautan** `[IMPLEMENTED]`
  - Tombol berbagi langsung membuka lembar share asli perangkat (WhatsApp, dsb.) dengan format pesan salam Islami otomatis, serta fallback salin ke clipboard jika API tidak didukung.
  - Bukti: [`src/app/[slug]/StudentProfileActions.tsx:23-49`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/StudentProfileActions.tsx#L23-L49).

### F. Ekspor Laporan PDF Native
- **Pembuatan PDF 1.4 Standar Tanpa Pustaka Eksternal Berat** `[IMPLEMENTED]`
  - Mesin generator biner PDF murni bawaan (*zero-dependency*) yang menghasilkan dokumen A4 Landscape (841.89 x 595.28 pt) secara instan.
  - Bukti: [`src/lib/pdf-generator.ts:13-35`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/pdf-generator.ts#L13-L35).
- **Tabel 5 Sesi Terstruktur dan Informasi Lengkap** `[IMPLEMENTED]`
  - Menampilkan tabel verbose 5 sesi waktu shalat per tanggal, nama santri, bulan periode, timestamp waktu unduh WIB lengkap, dan watermark penanda keaslian dokumen.
  - Bukti: [`src/lib/pdf-generator.ts:175-345`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/pdf-generator.ts#L175-L345).
- **Pengunduhan Otomatis Langsung (*Direct Auto-Download*)** `[IMPLEMENTED]`
  - Mengunduh langsung file `.pdf` ke perangkat tanpa membuka dialog browser print preview yang merepotkan.
  - Bukti: [`src/app/[slug]/StudentProfileView.tsx:118-140`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/StudentProfileView.tsx#L118-L140).

### G. Mode Offline-First dan Sinkronisasi
- **Penyimpanan Lokal IndexedDB** `[IMPLEMENTED]`
  - Menggunakan IndexedDB peramban (`ngaji_offline_db`) dengan object store `offline_queue` untuk antrean absensi dan `cached_students` untuk cache daftar santri aktif.
  - Bukti: [`src/lib/offline-db.ts:17-45`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/offline-db.ts#L17-L45).
- **Pencatatan Tanpa Internet pada Halaman Absensi** `[IMPLEMENTED]`
  - Shell halaman `/absensi` disimpan dalam cache Serwist (`absensi-shell-cache`). Guru tetap dapat membuka form dan menyimpan data saat offline.
  - Bukti: [`src/app/sw.ts:28-35`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/sw.ts#L28-L35), [`src/app/(private)/absensi/AbsensiClient.tsx:305-319`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/AbsensiClient.tsx#L305-L319).
- **Sinkronisasi Otomatis (*Auto-Sync*) saat Online** `[IMPLEMENTED]`
  - Mendeteksi event `online` peramban untuk langsung menyinkronkan antrean ke server di latar belakang tanpa reload halaman.
  - Bukti: [`src/app/(private)/absensi/AbsensiClient.tsx:120-164`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/AbsensiClient.tsx#L120-L164), [`192-195`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/AbsensiClient.tsx#L192-L195).
- **Indikator Jumlah Antrean Tertunda (*Pending Queue*)** `[IMPLEMENTED]`
  - Aplikasi menampilkan counter jumlah entri tertunda di UI dan pemberitahuan toast saat tersimpan offline maupun saat berhasil disinkronkan.
  - Bukti: [`src/app/(private)/absensi/AbsensiClient.tsx:157-163`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/AbsensiClient.tsx#L157-L163), [`311`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/AbsensiClient.tsx#L311).
- **Penanganan Konflik dan Duplikasi** `[IMPLEMENTED]`
  - Menggunakan pola *find-or-create* pada baris kehadiran unik `(studentId, date, session)`. Jika entri bacaan terdeteksi identik, server tetap menyimpan dan memberikan penanda `isDuplicate: true` tanpa membatalkan transaksi.
  - Bukti: [`src/app/(private)/absensi/actions.ts:79-130`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/actions.ts#L79-L130).
- **Halaman Fallback Offline (`/~offline`)** `[IMPLEMENTED]`
  - Jika pengguna mengakses halaman yang membutuhkan internet (seperti admin atau statistik) saat offline, Service Worker otomatis mengalihkan ke halaman fallback yang ramah pengguna.
  - Bukti: [`src/app/sw.ts:17-26`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/sw.ts#L17-L26), [`src/app/~offline/page.tsx`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/~offline/page.tsx).

### H. Kemampuan PWA (Progressive Web App)
- **Instalasi Layar Utama (*Add to Home Screen*)** `[IMPLEMENTED]`
  - Manifest terkonfigurasi untuk tampilan layar penuh mandiri (`display: "standalone"`) tanpa bilah peramban.
  - Bukti: [`src/app/manifest.ts:9`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/manifest.ts#L9).
- **Ikon Adaptif dan Maskable** `[IMPLEMENTED]`
  - Menyediakan ikon 192x192, 512x512, serta format maskable untuk tampilan bulat sempurna di Android.
  - Bukti: [`src/app/manifest.ts:13-36`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/manifest.ts#L13-L36).
- **Pembaruan Service Worker Cepat** `[IMPLEMENTED]`
  - Menggunakan `skipWaiting: true` dan `clientsClaim: true` sehingga versi rilis baru langsung mengontrol aplikasi tanpa perlu menutup peramban.
  - Bukti: [`src/app/sw.ts:14-15`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/sw.ts#L14-L15).

### I. Fitur Pengelolaan Admin & Perlindungan Data
- **Manajemen Santri dan Akun Guru** `[IMPLEMENTED]`
  - CRUD lengkap data santri dan staf guru langsung dari dashboard admin.
  - Bukti: [`src/app/(private)/admin/AdminClient.tsx`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/admin/AdminClient.tsx).
- **Cadangan Data Lengkap (Backup JSON)** `[IMPLEMENTED]`
  - Ekspor seluruh tabel data operasional (santri, kehadiran, bacaan, jadwal, audit log, pengguna) dalam satu berkas terstruktur tanpa mengekspos kata sandi atau token sesi.
  - Bukti: [`src/app/api/admin/backup/route.ts`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/api/admin/backup/route.ts).
- **Ekspor CSV per Tabel dengan Perlindungan Formula Injection** `[IMPLEMENTED]`
  - Ekspor format CSV untuk setiap tabel data dengan sanitasi otomatis formula berbahaya (`csvSafe`) agar aman dibuka di Microsoft Excel atau Google Sheets.
  - Bukti: [`src/app/api/admin/export-csv/route.ts`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/api/admin/export-csv/route.ts), [`src/lib/security.ts:107-112`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/security.ts#L107-L112).
- **Pemulihan Data Atomik (Restore JSON)** `[IMPLEMENTED]`
  - Admin dapat memulihkan database dari teks cadangan JSON. Seluruh data diverifikasi dengan Zod schema dan dieksekusi dalam satu transaksi atomik.
  - Bukti: [`src/app/(private)/admin/AdminClient.tsx:550-580`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/admin/AdminClient.tsx#L550-L580).
- **Pembersihan Data Lama Terproteksi** `[IMPLEMENTED]`
  - Tombol hapus data lama terkunci secara protektif sampai berkas cadangan JSON berhasil diunduh dalam sesi admin yang sama, serta mewajibkan ketik ulang konfirmasi kata `HAPUS`.
  - Bukti: [`src/app/(private)/admin/AdminClient.tsx:583-620`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/admin/AdminClient.tsx#L583-L620).
- **Pencatatan Jejak Audit (Audit Log)** `[IMPLEMENTED]`
  - Mencatat histori login berhasil/gagal, logout, dan tindakan administratif penting di database.
  - Bukti: [`src/lib/audit.ts`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/audit.ts), [`src/db/schema.ts:97-103`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/db/schema.ts#L97-L103).
- **Impor Data Awal dari Excel** `[PARTIAL]`
  - Dukungan impor Excel ada via skrip developer CLI (`scripts/seed.ts` menggunakan ExcelJS), **namun tidak tersedia antarmuka unggah berkas Excel pada panel web admin**.
  - Bukti: [`scripts/seed.ts:135-160`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/scripts/seed.ts#L135-L160).

---

## 4. ALUR PENGGUNAAN

### Alur 1: Guru Mencatat Absensi & Bacaan Santri Secara Offline Lalu Sinkronisasi
1. Guru membuka aplikasi web PWA di ponsel melalui tautan atau ikon layar utama.
2. Karena halaman `/absensi` telah di-cache oleh Service Worker, antarmuka absensi terbuka secara lancar meski tanpa koneksi internet.
3. Guru memilih nama santri dari daftar drop-down (data santri dimuat dari cache `cached_students` di IndexedDB).
4. Sesi waktu otomatis terdeteksi (atau guru memilih sesi manual), lalu guru memilih jenis bacaan (Iqro, Surat Al-Qur'an, atau Halaman) dan memasukkan rentang ayat/halaman.
5. Guru menekan tombol **"Simpan Absensi"**.
6. Aplikasi mendeteksi status offline, menyimpan data ke dalam antrean IndexedDB (`offline_queue`), mengosongkan form untuk santri berikutnya, dan menampilkan pesan: *"Tersimpan di antrean offline (X data menunggu sinkronisasi)"*.
7. Saat guru kembali mendapatkan sinyal internet / WiFi, event `online` terpicu otomatis.
8. Aplikasi memproses antrean di latar belakang secara kronologis, mengirimkannya ke server, menghapus item dari antrean lokal, dan menampilkan notifikasi: *"X data absensi offline berhasil disinkronkan ke server"*.

### Alur 2: Administrator Menambahkan Santri Baru & Membagikan Tautan
1. Admin membuka rute `/admin` dan masuk menggunakan akun administrator.
2. Admin memilih tab navigasi **"Siswa"**.
3. Admin mengetikkan nama lengkap santri pada formulir tambah santri.
4. Admin menekan tombol **"Tambah Siswa"**.
5. Server membuat entri santri baru dan secara otomatis membentuk slug acak unik kriptografis (misal `fio-ramadhan-k9m2x1`).
6. Nama santri baru langsung muncul di tabel daftar santri aktif.
7. Admin menekan tombol ikon tautan di samping nama santri untuk menyalin link publik santri (`https://<domain>/<slug>`).
8. Admin mengirimkan tautan tersebut ke WhatsApp orang tua santri.

### Alur 3: Orang Tua Membuka Tautan & Mengunduh Laporan PDF
1. Orang tua mengeklik tautan yang dibagikan guru/admin di WhatsApp (contoh: `https://<domain>/dafi-ahmad-a7k3q9`).
2. Halaman profil santri langsung terbuka di peramban tanpa memerlukan login atau memasukkan kata sandi.
3. Orang tua melihat rangkuman kehadiran dan tabel 5 sesi waktu mengaji anaknya pada bulan berjalan.
4. (Opsional) Jika orang tua ingin melihat bulan sebelumnya, orang tua memilih drop-down filter bulan.
5. (Opsional) Jika tautan yang dibuka adalah tautan gabungan kakak-adik (`/[slug1]+[slug2]`), orang tua mengeklik tab navigasi nama anak untuk berpindah santri.
6. Orang tua menekan tombol **"Unduh PDF"**.
7. Generator PDF bawaan di peramban memproses seluruh tabel kehadiran dan bacaan dalam hitungan detik.
8. Berkas resmi laporan mengaji berekstensi `.pdf` layout landscape langsung tersimpan otomatis di folder download ponsel orang tua.

---

## 5. KEAMANAN DAN PRIVASI (BAHASA YANG AMAN UNTUK MARKETING)

Tabel berikut menyajikan fakta keamanan yang terverifikasi dalam kode, padanan bahasa pemasaran yang aman, serta batasan klaim (*jangan klaim*):

| Fakta Teknis Terverifikasi | Bahasa Pemasaran yang Aman | Catatan "Jangan Klaim" (Batasan Ketat) |
|---|---|---|
| Kata sandi disimpan dalam bentuk hash satu arah `bcryptjs` (cost 10) dengan proteksi timing attack ([`src/lib/security.ts:5-14`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/security.ts#L5-L14)). | *"Kata sandi guru dan admin dienkripsi menggunakan standar industri yang kuat sehingga tidak dapat dibaca oleh siapa pun."* | **Jangan klaim** enkripsi ujung-ke-ujung (end-to-end encryption) untuk data mengaji, dan jangan klaim enkripsi database di luar fitur standar bawaan penyedia cloud. |
| Token sesi acak 32-byte disimpan dalam cookie `httpOnly`, `secure`, dan `sameSite: lax` dengan hash SHA-256 di database ([`src/lib/security.ts:25-33`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/security.ts#L25-L33)). | *"Sesi masuk dilindungi cookie aman berstandar modern untuk mencegah pencurian sesi oleh skrip berbahaya."* | **Jangan klaim** dukungan *Single Sign-On (SSO)* atau integrasi OAuth Google/Apple karena belum tersedia. |
| Sistem penguncian akun sementara setelah sejumlah percobaan login gagal berturut-turut pada akun atau IP ([`src/lib/security.ts:36-50`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/security.ts#L36-L50)). | *"Dilengkapi sistem proteksi otomatis terhadap upaya tebak kata sandi (brute-force) yang mencurigakan."* | **Jangan sebutkan** angka batas kegagalan atau durasi menit penguncian secara spesifik di materi promosi. |
| Verifikasi origin ketat (`assertSameOrigin`) pada seluruh request mutasi data POST/DELETE ([`src/lib/security.ts:54-81`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/security.ts#L54-L81)). | *"Aplikasi menerapkan validasi asal permintaan untuk mencegah serangan pemalsuan permintaan antar-situs (CSRF)."* | **Jangan klaim** menggunakan sistem token CSRF ganda atau Web Application Firewall (WAF) khusus. |
| Header keamanan ketat (HSTS preload, X-Content-Type nosniff, frame-ancestors none/DENY, CSP ketat) ([`next.config.ts:5-12`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/next.config.ts#L5-L12), [`src/proxy.ts:7-21`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/proxy.ts#L7-L21)). | *"Komunikasi jaringan diproteksi header keamanan HTTP mutakhir untuk mencegah pembajakan klik (clickjacking) dan penyisipan konten asing."* | **Jangan klaim** memiliki sertifikasi ISO 27001 atau kepatuhan SOC-2. |
| Seluruh halaman dipasangi instruksi anti-perayapan robot mesin pencari (`robots.ts disallow: /`, `X-Robots-Tag: noindex, nofollow`) ([`src/app/robots.ts`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/robots.ts), [`src/proxy.ts:61`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/proxy.ts#L61)). | *"Privasi santri terjaga; nama dan riwayat pengajian anak tidak diindeks oleh mesin pencari publik seperti Google."* | **Jangan klaim** data sepenuhnya privat jika orang tua sendiri menyebarkan tautan publik santri ke grup umum. |
| Halaman profil santri menggunakan slug acak 6-karakter alfanumerik yang dapat diganti kapan saja ([`src/lib/security.ts:97-104`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/security.ts#L97-L104)). | *"Setiap anak memiliki tautan acak unik tanpa mempublikasikan identitas sensitif seperti nomor telepon atau alamat rumah."* | **Jangan klaim** akses orang tua memerlukan kata sandi (halaman publik santri sengaja dirancang tanpa login). |
| Pembatasan laju (*rate limiting*) akses halaman publik per alamat IP ([`src/app/[slug]/page.tsx:102`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/page.tsx#L102), [`src/lib/rate-limit.ts`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/rate-limit.ts)). | *"Akses publik dilindungi pembatas laju otomatis untuk menjaga kestabilan sistem dari lonjakan trafik tidak wajar."* | **Jangan klaim** proteksi Anti-DDoS tingkat lanjut berbasis hardware/jaringan. |
| Pemisahan hak akses berbasis peran (guru tidak dapat mengakses menu admin atau data sensitif sistem) ([`src/lib/auth.ts:138-144`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/lib/auth.ts#L138-L144)). | *"Pemisahan peran yang tegas memastikan guru hanya mengelola kegiatan mengaji dan tidak dapat mengakses pengaturan sistem krusial."* | **Jangan klaim** multi-cabang atau permission granular kustom (hanya ada 2 peran tetap: admin dan guru). |

---

## 6. YANG BELUM ADA

Fitur-fitur berikut **TIDAK ADA** dalam kode aplikasi saat ini dan **TIDAK BOLEH DIJANJIKAN** pada materi landing page awal:

1. **Dukungan Multi-Komunitas / Multi-Tenant Mandiri** `[NOT FOUND]`
   - Saat ini tidak ada kolom organisasi/komunitas di database dan tidak ada pendaftaran mandiri untuk komunitas baru.
2. **Akun Login Khusus Orang Tua** `[NOT FOUND]`
   - Orang tua tidak memiliki akun login/kata sandi; akses melihat nilai hanya melalui tautan slug publik santri.
3. **Notifikasi Otomatis (WhatsApp Gateway / SMS / Push)** `[NOT FOUND]`
   - Tidak ada pengiriman pesan otomatis dari server. Pembagian laporan ke WhatsApp dilakukan secara manual oleh pengguna melalui Web Share API.
4. **Sistem Keuangan, SPP, dan Pembayaran Online** `[NOT FOUND]`
   - Tidak ada modul tagihan, pencatatan iuran, infak, maupun gerbang pembayaran (*payment gateway*).
5. **Autentikasi Dua Faktor (2FA / OTP)** `[NOT FOUND]`
   - Login admin dan guru hanya menggunakan nama pengguna dan kata sandi.
6. **Integrasi Email** `[NOT FOUND]`
   - Tidak ada sistem reset password via email atau notifikasi email.
7. **Antarmuka Multi-Bahasa (Termasuk Bahasa Inggris atau Arab)** `[NOT FOUND]`
   - Antarmuka aplikasi saat ini sepenuhnya dalam Bahasa Indonesia.
8. **Pengunggahan Foto Profil Santri / Guru** `[NOT FOUND]`
   - Tidak ada penyimpanan berkas media foto santri di server atau database (hanya teks nama dan bacaan).

---

## 7. TEKNOLOGI

Ringkasan teknologi untuk baris pendukung pemasaran (*"Dibangun dengan"*):

- **Kerangka Kerja (Framework)**: Next.js (App Router) & React modern
- **Pendekatan PWA**: Service Worker luring via Serwist
- **Basis Data**: Serverless PostgreSQL via Neon
- **ORM / Lapisan Data**: Drizzle ORM
- **Gaya Visual & Komponen**: Tailwind CSS dengan palet token ramah mata (*cream paper theme*)
- **Infrastruktur Hosting**: Vercel Serverless Edge Platform
- **Format Laporan**: Generator PDF Standar PDF 1.4 Native

---

## 8. BAHASA DAN NADA

### A. Contoh Kutipan Teks Asli Antarmuka (Microcopy)
1. [`src/app/login/page.tsx:61`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/login/page.tsx#L61): *"Sistem absensi dan setoran Ngaji VMT"*
2. [`src/app/login/page.tsx:103`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/login/page.tsx#L103): *"Masuk ke Sistem"*
3. [`src/app/~offline/page.tsx:29`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/~offline/page.tsx#L29): *"Anda Sedang dalam Mode Offline"*
4. [`src/app/~offline/page.tsx:33`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/~offline/page.tsx#L33): *"Halaman ini membutuhkan koneksi internet untuk memuat data terkini. Namun, Anda tetap dapat mencatat absensi siswa secara offline di halaman Absensi. Data akan otomatis masuk ke antrean lokal dan disinkronkan saat kembali online."*
5. [`src/app/~offline/page.tsx:56`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/~offline/page.tsx#L56): *"Buka Halaman Absensi"*
6. [`src/app/~offline/page.tsx:67`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/~offline/page.tsx#L67): *"Coba Muat Ulang"*
7. [`src/app/(private)/absensi/AbsensiClient.tsx:158`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/AbsensiClient.tsx#L158): *"${successCount} data absensi offline berhasil disinkronkan ke server"*
8. [`src/app/(private)/absensi/AbsensiClient.tsx:193`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/AbsensiClient.tsx#L193): *"Koneksi internet terhubung kembali. Memulai sinkronisasi..."*
9. [`src/app/(private)/absensi/AbsensiClient.tsx:198`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/AbsensiClient.tsx#L198): *"Koneksi terputus. Mode offline aktif."*
10. [`src/app/(private)/absensi/AbsensiClient.tsx:311`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/AbsensiClient.tsx#L311): *"Tersimpan di antrean offline (${updatedQueue.length} data menunggu sinkronisasi)"*
11. [`src/app/(private)/absensi/AbsensiClient.tsx:332`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/AbsensiClient.tsx#L332): *"Data disimpan (peringatan: entri identik)"*
12. [`src/app/(private)/absensi/AbsensiClient.tsx:334`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/AbsensiClient.tsx#L334): *"Data absensi berhasil disimpan"*
13. [`src/app/(private)/absensi/AbsensiClient.tsx:358`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/AbsensiClient.tsx#L358): *"Hapus Entri Absensi"*
14. [`src/app/(private)/absensi/AbsensiClient.tsx:359`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/absensi/AbsensiClient.tsx#L359): *"Apakah Anda yakin ingin menghapus catatan absensi ini? Tindakan ini tidak dapat dibatalkan."*
15. [`src/app/[slug]/StudentProfileView.tsx:92`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/StudentProfileView.tsx#L92): *"Assalamu'alaikum, berikut rekap kehadiran dan setoran ngaji ${studentNames} di Musholla Al-Hidayah VMT:"*
16. [`src/app/[slug]/StudentProfileActions.tsx:148`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/StudentProfileActions.tsx#L148): *"Unduh PDF"*
17. [`src/app/[slug]/page.tsx:107`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/page.tsx#L107): *"Terlalu Banyak Permintaan"*
18. [`src/app/[slug]/page.tsx:110`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%5Bslug%5D/page.tsx#L110): *"Silakan tunggu sebentar sebelum memuat ulang halaman ini."*
19. [`src/app/(private)/admin/AdminClient.tsx:346`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/admin/AdminClient.tsx#L346): *"Siswa berhasil dihapus"*
20. [`src/app/(private)/admin/AdminClient.tsx:357`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/%28private%29/admin/AdminClient.tsx#L357): *"Tautan publik disalin"*

### B. Karakteristik Nada Suara (*Tone of Voice*)
Nada komunikasi aplikasi menggunakan Bahasa Indonesia yang ringkas, jelas, fungsional, dan bersahabat. Aplikasi menyapa orang tua santri secara santun dengan salam Islami (*"Assalamu'alaikum"*), sementara pada pesan sistem teknis (seperti status offline, validasi form, dan dialog konfirmasi hapus) menggunakan kalimat lugas tanpa jargon yang membingungkan guru. Tidak ada penggunaan emoji di seluruh antarmuka aplikasi.

---

## 9. VISUAL DAN ASET

### A. Warna Brand & Tipografi (Berdasarkan Kode Nyata)
- **Variabel Warna CSS** ([`src/app/globals.css:4-15`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/globals.css#L4-L15)):
  - `--cream`: `#f3ecd8` (Latar belakang utama aplikasi & PWA theme color)
  - `--paper`: `#fbf6e6` (Latar belakang kartu / wadah form)
  - `--sand`: `#e7dcbc` (Warna aksen lembut & wadah ikon)
  - `--ink`: `#000000` (Warna teks utama & border garis tegas)
  - `--muted`: `#55503f` (Warna teks sekunder / petunjuk)
  - `--hl`: `#c9d8a6` (Aksen hijau lembut penanda tanggal aktif ngaji pada kalender)
  - `--danger`: `#8a1c1c` (Warna peringatan & aksi hapus data)
- **Tipografi**:
  - Font Utama: Google Fonts `Bricolage Grotesque` (`--font-bricolage`), dengan fallback `system-ui, sans-serif` ([`src/app/layout.tsx:5-9`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/layout.tsx#L5-L9), [`src/app/globals.css:25`](file:///c:/Users/abda/Desktop/WebApp/ngaji-vmt/src/app/globals.css#L25)).

### B. Berkas Logo dan Ikon di Direktori `public/`
- `public/favicon.ico`: 2.71 KB, ikon browser standar ICO.
- `public/icons/favicon-32x32.png`: 2.71 KB, PNG 32x32.
- `public/icons/applogo.png`: 1.07 MB, PNG resolusi tinggi logo utama aplikasi.
- `public/icons/fontsize-logo.png`: 6.14 KB, PNG logo teks.
- `public/icons/icon-192x192.png`: 45.75 KB, PNG 192x192 untuk instalasi PWA ponsel.
- `public/icons/icon-512x512.png`: 264.32 KB, PNG 512x512 untuk splash screen PWA.
- `public/icons/icon-maskable-192x192.png`: 33.04 KB, PNG 192x192 format adaptif Android.
- `public/icons/icon-maskable-512x512.png`: 180.08 KB, PNG 512x512 format adaptif Android.

### C. Daftar Layar Aplikasi (Route -> Tampilan)
1. `/` &rarr; Rute gerbang pengalihan otomatis ke `/absensi`.
2. `/login` &rarr; Layar autentikasi bersih dengan input nama pengguna dan kata sandi guru/admin.
3. `/absensi` &rarr; Layar utama operasional guru untuk memilih santri, menentukan materi Iqro/Al-Qur'an, dan menyimpan absensi dengan dukungan offline.
4. `/kalender` &rarr; Layar kalender bulanan interaktif yang menampilkan jadwal rutin dan libur.
5. `/riwayat` &rarr; Layar tabel log rekaman absensi santri dengan pencarian dan filter bulanan.
6. `/statistik` &rarr; Layar visualisasi grafik kehadiran santri dan generator tautan multi-santri.
7. `/admin` &rarr; Layar kendali admin untuk manajemen santri, guru, jadwal, backup, dan audit log.
8. `/[slug]` &rarr; Layar publik ramah ponsel untuk orang tua santri yang menampilkan tabel 5 sesi kehadiran, tab multi-anak, tombol share WhatsApp, dan tombol unduh PDF.
9. `/~offline` &rarr; Layar informatif yang muncul saat pengguna membuka rute tak tercache ketika sambungan internet terputus.

*(Catatan Aset E2E: Berkas gambar tangkapan layar di direktori `tests/e2e/screenshots/*.png` berisi data nama santri asli dari seed lokal, sehingga **TIDAK BOLEH DIGUNAKAN** pada materi pemasaran landing page publik)*.

---

## 10. KONTEKS DARI PEMILIK (BUKAN DARI KODE)

> **Catatan: Bagian ini merupakan roadmap dan visi produk dari pemilik, bukan fitur yang sudah ada di dalam kode saat ini.**

"Aplikasi ini awalnya untuk pengajian di perumahan VMT dan akan dikembangkan menjadi produk bernama Halaqoh untuk manajemen ngaji dengan skala fleksibel. Aplikasi yang sudah berjalan ada di vmt.halaqoh.app. Landing page berada di halaqoh.app."

---

## 11. PERTANYAAN TERBUKA

Berikut adalah poin-poin yang tidak dapat ditentukan semata-mata dari analisis kode dan membutuhkan konfirmasi pemilik sebelum dicantumkan pada landing page publik:

1. **Model Bisnis & Penetapan Harga (*Pricing Model*)**: Apakah produk *Halaqoh* nantinya akan dipasarkan sebagai layanan gratis (open source / donasi), model berlangganan bulanan (*SaaS subscription* per masjid/TPA), atau model berbayar per santri aktif?
2. **Ketersediaan Alur Pendaftaran Mandiri (*Self-Registration*)**: Kapan pendaftaran mandiri untuk TPA / pengajian baru akan dibuka di situs `halaqoh.app`, dan apakah akan menggunakan subdomain otomatis (misal `namatpa.halaqoh.app`)?
3. **Kepemilikan Identitas & Watermark Cetak**: Apakah teks watermark cetak dokumen PDF `"by ikhlasulabda"` akan dipertahankan sebagai atribut pembuat atau diganti menjadi branding resmi `"Halaqoh - Manajemen Ngaji Modern"`?
