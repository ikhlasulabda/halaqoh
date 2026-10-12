# Design System Specification: Halaqoh

Dokumen ini merupakan hasil ekstraksi nilai desain riil dari kode landing page (HTML & CSS) Halaqoh tanpa menambah arah desain baru.

---

## 1. Identitas & Karakter Visual

- **Produk**: Halaqoh — Platform Manajemen Pengajian & Setoran Santri
- **Bahasa Desain**: Warm Paper, Tactile Neo-Editorial & Craft
- **Dials (Liveliness Toolkit)**:
  - **ENERGY**: 2 (Balanced — warm, inviting, authoritative yet respectful)
  - **RHYTHM**: 2 (Consistent grid with purposeful breaks: hero card preview, contrast cards, tabbed walkthrough, feature boxes, workflow cards)
  - **MOTION**: 2 (Scroll-reveal, smooth interactions, state transitions with reduced-motion fallback)

---

## 2. Palet Warna (Color Tokens)

### Warna Dasar (Canvas & Surface)
| Token CSS | Hex Value | Peruntukan |
|---|---|---|
| `--cream` | `#f4eee1` | Latar kanvas utama aplikasi |
| `--cream-light` | `#faf6ee` | Permukaan elemen dalam (snippet form) |
| `--paper` | `#fcf9f2` | Latar kartu konten & modul |
| `--sand` | `#e6dcbe` | Aksen netral lembut, tab bar & header kartu |
| `--sand-dark` | `#d5c8a3` | Gradien transisi latar belakang kontras |

### Tinta & Teks (Ink Tokens)
| Token CSS | Hex Value | Peruntukan |
|---|---|---|
| `--ink` | `#171614` | Teks utama, heading, garis tepi tegas |
| `--ink-secondary`| `#484337` | Teks paragraf pendukung |
| `--ink-muted` | `#736b59` | Keterangan kecil, label sekunder |

### Warna Aksen & Status (Brand & Highlight)
| Token CSS | Hex Value | Peruntukan |
|---|---|---|
| `--forest` | `#224d38` | Warna primer halaqoh, tombol utama, identitas |
| `--forest-light` | `#e5eee8` | Latar tag status positif |
| `--forest-hover` | `#193c2b` | Hover state tombol primer |
| `--hl-olive` | `#d1dfb6` | Penanda stabilo headline, badge hadir |
| `--hl-olive-subtle`| `#edf3e4`| Latar banner notifikasi offline |
| `--clay` | `#a6582c` | Peringatan, penanda mode lama |
| `--clay-subtle` | `#f7ede6` | Latar tag iqro/peringatan |

### Garis Batas (Border Tokens)
| Token CSS | Nilai | Peruntukan |
|---|---|---|
| `--border-strong` | `#171614` (1.5px - 2px solid) | Garis tepi struktural kartu, tombol |
| `--border-soft` | `#dcd3bd` (1px solid) | Pemisah garis horizontal internal |
| `--border-faint`| `rgba(23, 22, 20, 0.08)` | Pembatas sangat halus |

---

## 3. Tipografi (Typography Tokens)

- **Display & Headings**: `Bricolage Grotesque`, system-ui, sans-serif
  - Bobot: 600, 700, 800
  - Letter spacing: `-0.02em` s.d. `-0.03em`
  - Line height: `1.1` s.d. `1.2`
- **Body & Teks Bacaan**: `Plus Jakarta Sans`, system-ui, sans-serif
  - Bobot: 400, 500, 600, 700
  - Line height: `1.6`
- **Aksen Teks Arab**: `Amiri`, serif
- **Skala Ukuran Tipografi**:
  - H1 Hero: `clamp(2.3rem, 4.5vw, 3.5rem)`
  - H2 Section: `clamp(1.8rem, 3.2vw, 2.5rem)`
  - H3 Card/Sub-feature: `1.2rem` s.d. `1.25rem`
  - H4 Component: `1.05rem` s.d. `1.1rem`
  - Body Besar / Subtitle: `1.125rem` (18px)
  - Body Normal: `0.925rem` s.d. `0.95rem` (15px)
  - Label Kecil / Caption: `0.75rem` s.d. `0.825rem` (12px–13px)

---

## 4. Elevasi & Bayangan Taktil (Tactile Shadows & Elevation)

Menggunakan bayangan taktil bergaris tegas (*crisp offset drop shadows*), bukan bayangan kabur mengambang:
- `--shadow-sm`: `2px 2px 0 #171614`
- `--shadow-md`: `3px 3px 0 #171614`
- `--shadow-lg`: `5px 5px 0 #171614`
- Active State: `transform: translate(2px, 2px); box-shadow: 0 0 0 #171614;`

---

## 5. Sudut Kelengkungan (Border Radius)

- `--radius-sm`: `6px` (Badge, input, inner tags)
- `--radius-md`: `10px` (Tombol, kartu kecil, feature icons)
- `--radius-lg`: `16px` (Kartu utama, wadah demo, dialog banner)
- `--radius-pill`: `9999px` (Status badges & pill tags)

---

## 6. Jarak & Spasi (Spacing Scale)

- Container Max Width: `1160px`
- Section Padding: `5rem 0` (desktop), `3.5rem 0` (mobile)
- Hero Padding: `4.5rem 0 3.5rem`
- Container Padding Horisontal: `1.5rem`

---

## 7. Titik Henti Responsif (Breakpoints)

- **Mobile**: `< 768px` (Navigasi berubah menjadi menu geser/buka, grid 1 kolom, spasi diperkecil)
- **Tablet**: `768px – 992px` (Grid 2 kolom, hero 1 kolom tersusun rapi)
- **Desktop**: `> 992px` (Grid 3 kolom penuh, hero 2 kolom seimbang 1.15fr : 0.85fr)
