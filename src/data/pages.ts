/**
 * GERBANG EDUKASI — INNER-PAGE DATA (CMS/API-READY)
 * Konten halaman dalam (download, aktivasi, support, demo, partner,
 * dashboard) terpusat di sini agar mudah diganti dari CMS/API.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SystemRequirement {
  platform: "android" | "windows";
  items: string[];
}

export interface Release {
  platform: "android" | "windows";
  version: string; // placeholder — ganti dengan versi riil
  size: string;
  note: string;
  href: string;
}

export const demoPage = {
  eyebrow: "Demo",
  title: "Lihat Gerbang Edukasi Beraksi",
  description:
    "Tonton video demo atau jelajahi pratinjau interaktif aplikasi. Rasakan langsung bagaimana pembelajaran menjadi lebih interaktif.",
  videoSrc: "/assets/demo-video.mp4", // placeholder video demo
  videoPoster: "/assets/demo-poster.png",
  interactiveNote:
    "Area interaksi di bawah adalah placeholder. Saat aplikasi/web-demo tersedia, ganti dengan pratinjau interaktif yang nyata.",
  primaryCta: { label: "Coba Demo", href: "/demo", event: "demo_click" as const },
  secondaryCta: { label: "Download Aplikasi", href: "/download", event: "trial_start" as const },
};

export const systemRequirements: SystemRequirement[] = [
  {
    platform: "android",
    items: [
      "Interactive Flat Panel berbasis Android",
      "Android 8.0 (Oreo) atau lebih baru",
      "RAM minimal 2 GB",
      "Ruang penyimpanan tersedia minimal 500 MB",
      "Layar sentuh / touchscreen (disarankan)",
    ],
  },
  {
    platform: "windows",
    items: [
      "Windows 10 64-bit atau lebih baru",
      "CPU dual-core 1.8 GHz atau lebih",
      "RAM minimal 4 GB",
      "Ruang penyimpanan tersedia minimal 1 GB",
      "Layar sentuh / touchscreen (disarankan)",
    ],
  },
];

export const downloads: Release[] = [
  {
    platform: "android",
    version: "1.0.0 — Segera Rilis",
    size: "—",
    note: "Link & versi akan diperbarui saat rilis resmi.",
    href: "/download",
  },
  {
    platform: "windows",
    version: "1.0.0 — Segera Rilis",
    size: "—",
    note: "Link & versi akan diperbarui saat rilis resmi.",
    href: "/download",
  },
];

export const installGuide = [
  { step: "1", title: "Download file instalasi", description: "Pilih versi Android atau Windows sesuai perangkat Anda." },
  { step: "2", title: "Buka file", description: "Jalankan file installer yang sudah diunduh." },
  { step: "3", title: "Ikuti petunjuk", description: "Klik 'Install' / 'Next' dan tunggu proses selesai." },
  { step: "4", title: "Buka aplikasi", description: "Luncurkan Gerbang Edukasi dari menu aplikasi." },
];

export const faqs: FaqItem[] = [
  {
    question: "Apa itu Gerbang Edukasi?",
    answer:
      "Gerbang Edukasi adalah platform media pembelajaran interaktif untuk Interactive Flat Panel (IFP) berbasis Android dan Windows.",
  },
  {
    question: "Perangkat apa saja yang didukung?",
    answer:
      "Aplikasi berjalan pada Interactive Flat Panel berbasis Android dan Windows. Cek daftar system requirement di halaman Download.",
  },
  {
    question: "Apakah harus berbayar untuk mencoba?",
    answer:
      "Tersedia paket Demo untuk mencoba. Untuk lisensi lanjutan silakan hubungi kami — harga paket resmi akan diumumkan.",
  },
  {
    question: "Bagaimana cara aktivasi lisensi?",
    answer:
      "Masukkan license / activation code bersama Device ID perangkat pada halaman Aktivasi. Status aktivasi akan ditampilkan di sana.",
  },
  {
    question: "Apa itu Device ID?",
    answer:
      "Device ID adalah identitas unik perangkat yang muncul pada aplikasi. Diperlukan untuk memasangkan lisensi ke perangkat.",
  },
  {
    question: "Bagaimana saya menjadi partner?",
    answer:
      "Daftar melalui halaman Partner. Tim kami akan menghubungi Anda untuk informasi skema mitra.",
  },
];

export const activationData = {
  eyebrow: "Aktivasi",
  title: "Aktivasi Lisensi Anda",
  description:
    "Masukkan activation code dan Device ID untuk mengaktifkan Gerbang Edukasi di perangkat Anda.",
  inputs: [
    { name: "activationCode", label: "License / Activation Code", placeholder: "XXXX-XXXX-XXXX-XXXX" },
    { name: "deviceId", label: "Device ID", placeholder: "Contoh: GE-XXXX-XXXX-XXXX" },
  ] as { name: string; label: string; placeholder: string }[],
  steps: [
    "Buka aplikasi Gerbang Edukasi",
    "Salin Device ID dari halaman 'Tentang' / pengaturan",
    "Masukkan activation code dan Device ID di formulir ini",
    "Klik aktivasi dan periksa statusnya",
  ],
  note: "Sistem aktivasi sudah disiapkan terhubung ke backend (API). Form ini masih placeholder.",
};

export const supportData = {
  eyebrow: "Support",
  title: "Pusat Bantuan",
  description: "FAQ, panduan instalasi & aktivasi, troubleshooting, dan kontak tim dukungan.",
  whatsapp: "—", // ganti dengan nomor resmi; NO placeholder fiktif
  whatsappNote: "Nomor WhatsApp belum disediakan — isi placeholder saat tersedia.",
  email: "support@gerbangedukasi.id", // placeholder email resmi
};

export const dashboardSections = [
  { id: "beranda", label: "Beranda", href: "/dashboard" },
  { id: "akun", label: "Akun", href: "/dashboard/akun" },
  { id: "lisensi", label: "Lisensi", href: "/dashboard/lisensi" },
  { id: "perangkat", label: "Perangkat", href: "/dashboard/perangkat" },
  { id: "aktivasi", label: "Aktivasi", href: "/dashboard/aktivasi" },
  { id: "unduhan", label: "Unduhan", href: "/dashboard/unduhan" },
  { id: "konten", label: "Konten", href: "/dashboard/konten" },
  { id: "penagihan", label: "Penagihan", href: "/dashboard/penagihan" },
  { id: "dukungan", label: "Dukungan", href: "/dashboard/dukungan" },
] as { id: string; label: string; href: string }[];

export const dashboardMock = {
  user: { name: "Nama Pengguna (mock)", email: "user@example.com" },
  license: { status: "Trial", label: "Trial · berakhir dalam 13 hari" },
  devices: [
    { id: "GE-001-XXXX", status: "active", label: "Aktif" },
    { id: "GE-002-XXXX", status: "inactive", label: "Belum diaktifkan" },
  ] as { id: string; status: "active" | "inactive"; label: string }[],
  stats: [
    { label: "Lisensi aktif", value: "1" },
    { label: "Perangkat terdaftar", value: "1" },
    { label: "Konten diunduh", value: "0" },
    { label: "Aktivasi", value: "1" },
  ],
  note: "Data di dashboard merupakan mock data — akan dihubungkan ke backend (autentikasi & lisensi).",
};