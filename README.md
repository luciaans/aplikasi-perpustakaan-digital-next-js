# Aplikasi Perpustakaan Digital Frontend - Next.js

## Informasi Mahasiswa
- **Nama**: Sayyid M Rizqi R Al Qadrie
- **NIM**: 221220049
- **Universitas**: Universitas Muhammadiyah Pontianak

## Deskripsi Proyek

Frontend aplikasi Perpustakaan Digital yang dibangun menggunakan Next.js dengan TypeScript. Aplikasi ini menyediakan antarmuka pengguna yang modern dan responsif untuk mengelola sistem perpustakaan digital, termasuk manajemen buku, penulis, pengguna, dan peminjaman.

## Teknologi yang Digunakan

- **Framework**: Next.js 14+ dengan App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS / CSS Modules
- **UI Components**: Custom React Components
- **State Management**: React Hooks (useState, useEffect)
- **HTTP Client**: Fetch API / Axios
- **Authentication**: Custom Auth System
- **Icons**: Lucide React
- **Form Handling**: React Hook Form (optional)

## Persyaratan Sistem

- Node.js >= 18.x
- npm >= 9.x atau yarn >= 1.22.x
- TypeScript >= 5.x

## Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/username/digital-library-frontend.git
cd digital-library-frontend
```

### 2. Install Dependencies
```bash
npm install
# atau
yarn install
```

### 3. Setup Environment Variables
```bash
cp .env.local.example .env.local
```

Edit file `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_APP_NAME="Digital Library"
```

### 4. Jalankan Development Server
```bash
npm run dev
# atau
yarn dev
```

Aplikasi akan berjalan di `http://localhost:3000`

## Struktur Proyek

```
digital-library/
├── src/
│   ├── app/                    # App Router (Next.js 13+)
│   │   ├── authors/           # Halaman manajemen penulis
│   │   │   └── page.tsx
│   │   ├── books/             # Halaman manajemen buku
│   │   │   └── page.tsx
│   │   ├── catalog/           # Halaman katalog buku
│   │   │   └── page.tsx
│   │   ├── dashboard/         # Dashboard utama
│   │   │   └── page.tsx
│   │   ├── loans/             # Halaman manajemen peminjaman
│   │   │   └── page.tsx
│   │   ├── login/             # Halaman login
│   │   │   └── page.tsx
│   │   ├── users/             # Halaman manajemen pengguna
│   │   │   └── page.tsx
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── auth/              # Komponen authentication
│   │   │   ├── auth-guard.tsx
│   │   │   └── auth-provider.tsx
│   │   ├── dashboard/         # Komponen dashboard
│   │   └── ui/                # Reusable UI Components
│   │       ├── app-sidebar.tsx
│   │       ├── author-list.tsx
│   │       ├── AuthorFormModal.tsx
│   │       ├── avatar.tsx
│   │       ├── book-list.tsx
│   │       ├── BookFormModal.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── command.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── loan-list.tsx
│   │       ├── LoanFormModal.tsx
│   │       ├── logout-button.tsx
│   │       ├── multi-select.tsx
│   │       ├── nav-user.tsx
│   │       ├── popover.tsx
│   │       ├── site-header.tsx
│   │       ├── table.tsx
│   │       ├── toaster.tsx
│   │       ├── user-list.tsx
│   │       └── UserFormModal.tsx
│   ├── lib/                   # Utilities dan konfigurasi
│   │   ├── api.ts            # API client configuration
│   │   ├── types.ts          # TypeScript type definitions
│   │   └── utils.ts          # Utility functions
│   └── favicon.ico
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Fitur Aplikasi

### 1. Authentication System
- **Login Page**: Halaman login dengan validasi
- **Auth Guard**: Proteksi route yang memerlukan login
- **Auth Provider**: Context untuk manajemen state authentication
- **Logout**: Fungsi logout dengan pembersihan session

### 2. Dashboard
- **Overview**: Statistik ringkasan perpustakaan
- **Navigation**: Menu navigasi ke semua modul
- **Recent Activity**: Aktifitas terkini (optional)

### 3. Manajemen Pengguna (Users)
- **User List**: Tabel daftar semua pengguna
- **Add User**: Modal form untuk menambah pengguna baru
- **Edit User**: Modal form untuk mengubah data pengguna
- **Delete User**: Fungsi hapus pengguna dengan konfirmasi
- **Search & Filter**: Pencarian dan filter data pengguna

### 4. Manajemen Penulis (Authors)
- **Author List**: Tabel daftar semua penulis
- **Add Author**: Modal form untuk menambah penulis baru
- **Edit Author**: Modal form untuk mengubah data penulis
- **Delete Author**: Fungsi hapus penulis dengan konfirmasi
- **Author Profile**: Detail informasi penulis

### 5. Manajemen Buku (Books)
- **Book List**: Tabel daftar semua buku dengan informasi penulis
- **Add Book**: Modal form dengan multi-select penulis
- **Edit Book**: Modal form untuk mengubah data buku
- **Delete Book**: Fungsi hapus buku dengan konfirmasi
- **Stock Management**: Pengelolaan stok buku
- **Book Details**: Detail lengkap informasi buku

### 6. Manajemen Peminjaman (Loans)
- **Loan List**: Tabel daftar semua peminjaman
- **Create Loan**: Modal form untuk peminjaman baru
- **Return Book**: Fungsi pengembalian buku
- **Loan History**: Riwayat peminjaman
- **Overdue Tracking**: Pelacakan keterlambatan

### 7. Katalog Buku (Catalog)
- **Public Catalog**: Tampilan katalog untuk pengunjung umum
- **Search Books**: Pencarian buku berdasarkan judul/penulis
- **Book Preview**: Preview informasi buku
- **Availability Status**: Status ketersediaan buku

## Komponen UI Utama

### Form Components
- **Button**: Tombol dengan berbagai variant
- **Input**: Input field dengan validasi
- **Label**: Label untuk form elements
- **Multi-Select**: Dropdown multi-pilihan untuk relasi

### Layout Components
- **App Sidebar**: Sidebar navigasi utama
- **Site Header**: Header dengan user navigation
- **Card**: Container untuk konten
- **Table**: Tabel data dengan sorting dan pagination

### Interactive Components
- **Dialog/Modal**: Modal untuk form dan konfirmasi
- **Dropdown Menu**: Menu dropdown untuk aksi
- **Popover**: Popover untuk informasi tambahan
- **Command**: Command palette untuk pencarian cepat

### Feedback Components
- **Toaster**: Notifikasi toast untuk feedback
- **Avatar**: Komponen avatar pengguna
- **Loading States**: Indikator loading

## API Integration

### Konfigurasi API (lib/api.ts)
```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiClient = {
  get: (endpoint: string) => fetch(`${API_BASE_URL}${endpoint}`),
  post: (endpoint: string, data: any) => fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }),
  // ... methods lainnya
};
```

### Type Definitions (lib/types.ts)
```typescript
export interface User {
  id: string;
  name: string;
  email: string;
  membership_date: string;
}

export interface Author {
  id: string;
  name: string;
  nationality: string;
  birthdate: string;
}

export interface Book {
  id: string;
  title: string;
  isbn: string;
  publisher: string;
  year_published: string;
  stock: number;
  authors: Author[];
}

export interface Loan {
  id: string;
  user_id: string;
  book_id: string;
  loan_date: string;
  due_date: string;
  return_date?: string;
  user: User;
  book: Book;
}
```

## Scripts Available

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint

# Type checking
npm run type-check
```

## Deployment

### Build untuk Production
```bash
npm run build
npm run start
```

### Deploy ke Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy ke Netlify
```bash
# Build
npm run build

# Upload folder 'out' atau '.next' ke Netlify
```

## Environment Variables

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# App Configuration
NEXT_PUBLIC_APP_NAME="Digital Library"
NEXT_PUBLIC_APP_VERSION="1.0.0"

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Styling Guidelines

### Tailwind CSS Classes
- Menggunakan utility-first approach
- Responsive design dengan breakpoints
- Dark mode support (optional)
- Custom color palette untuk tema perpustakaan

### Component Styling
```typescript
// Contoh styling dengan Tailwind
const Button = ({ variant = 'primary', children, ...props }) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

## Best Practices

### Code Organization
- Komponen reusable di folder `/components/ui`
- Business logic di custom hooks
- Type definitions terpusat di `/lib/types.ts`
- API calls di `/lib/api.ts`

### Performance
- Lazy loading untuk komponen besar
- Image optimization dengan Next.js Image
- Code splitting otomatis oleh Next.js
- Caching strategy untuk API calls

### Accessibility
- Semantic HTML elements
- ARIA labels untuk screen readers
- Keyboard navigation support
- Color contrast compliance

## Troubleshooting

### Common Issues

1. **API Connection Error**
   ```bash
   # Pastikan backend API berjalan
   # Check environment variables di .env.local
   ```

2. **Build Error**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

3. **TypeScript Errors**
   ```bash
   # Check type definitions
   npm run type-check
   ```

## Contributing

Untuk pengembangan lebih lanjut:
1. Buat branch baru untuk fitur
2. Ikuti naming convention yang konsisten
3. Tambahkan unit tests untuk komponen baru
4. Update dokumentasi jika diperlukan

## License

Proyek ini dibuat untuk keperluan akademik di Universitas Muhammadiyah Pontianak.

