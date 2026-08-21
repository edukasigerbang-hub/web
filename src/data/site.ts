/**
 * GERBANG EDUKASI — SITE CONTENT DATA (CMS/API-READY)
 *
 * All customer-facing copy lives here instead of being hard-coded into
 * components. Later these arrays can be swapped for responses from a CMS
 * / API without changing the UI. Placeholder assets use the /assets/
 * structure from the master doc §30.
 */

export type PlatformTarget = "android" | "windows" | "both";

export interface FeatureItem {
  id: string; // stable id for analytics/anchor links
  title: string;
  description: string;
  icon: string; // key of IconSet (see components/ui/icons.tsx)
  img: string; // screenshot /assets/content/*.png
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export interface TargetUserCard {
  id: "guru" | "sekolah" | "partner";
  title: string;
  description: string;
  cta: string;
  href: string;
}

export interface ContentCategory {
  name: string;
}

export interface ContentCard {
  id: string;
  title: string;
  category: string;
  platform: PlatformTarget;
  description: string;
  thumb: string; // /assets/content/... placeholder
}

export interface PricingTier {
  id: "demo" | "personal" | "school" | "enterprise";
  name: string;
  tagline: string;
  priceLabel: string; // "Coming Soon" / "Hubungi Kami" — never fabricated
  featured?: boolean;
  features: string[];
  cta: string;
  href: string;
}

export interface PartnerPerk {
  title: string;
  description: string;
  icon: string;
}

export const site = {
  name: "Gerbang Edukasi",
  tagline: "Interactive Education Platform",
  baseUrl: "https://gerbangedukasi.id", // TODO: ganti domain produksi
  description:
    "Media pembelajaran interaktif untuk Interactive Flat Panel (IFP) berbasis Android dan Windows. Hadirkan pengalaman belajar yang lebih visual, aktif, dan menyenangkan di kelas.",
};

export const navLinks: NavLink[] = [
  { label: "Produk", href: "/produk" },
  { label: "Fitur", href: "/fitur" },
  { label: "Demo", href: "/demo" },
  { label: "Harga", href: "/harga" },
  { label: "Aktivasi", href: "/aktivasi" },
  { label: "Konten", href: "/konten" },
  { label: "Partner", href: "/partner" },
  { label: "Bantuan", href: "/support" },
];

export const hero = {
  heading: "Bikin Interactive Flat Panel Jadi Lebih Interaktif.",
  subheading:
    "Media pembelajaran interaktif untuk IFP berbasis Android dan Windows. Hadirkan pengalaman belajar yang lebih visual, aktif, dan menyenangkan di kelas.",
  primaryCta: { label: "Coba Demo", href: "/demo", event: "demo_click" as const },
  secondaryCta: { label: "Lihat Produk", href: "/produk" } as const,
  visual: {
    src: "/assets/hero-ifp.png", // placeholder — ganti dengan mockup IFP + screenshot
    alt: "Aplikasi Gerbang Edukasi sedang digunakan pada Interactive Flat Panel",
    badge: "Demo interaktif sedang berjalan",
  },
};

export const valueProps = [
  {
    title: "Interactive",
    description: "Media pembelajaran yang melibatkan siswa.",
    icon: "pointer",
  },
  { title: "Visual", description: "Materi lebih menarik dan mudah dipahami.", icon: "eye" },
  { title: "Easy to Use", description: "Dirancang agar mudah digunakan guru.", icon: "thumbsup" },
  { title: "Multi Platform", description: "Mendukung Android dan Windows.", icon: "device" },
];

export const features: FeatureItem[] = [
  {
    id: "interactive-learning",
    title: "Interactive Learning",
    description: "Pembelajaran dengan elemen interaktif.",
    icon: "pencil",
    img: "/assets/content/interactive.png",
  },
  {
    id: "interactive-quiz",
    title: "Interactive Quiz",
    description: "Evaluasi dan kuis yang lebih menarik.",
    icon: "quiz",
    img: "/assets/content/quizz.png",
  },
  {
    id: "multimedia",
    title: "Multimedia",
    description: "Gunakan gambar, audio, video, animasi, dan elemen interaktif.",
    icon: "media",
    img: "/assets/content/multimedia.png",
  },
  {
    id: "educational-games",
    title: "Educational Games",
    description: "Aktivitas belajar berbasis permainan.",
    icon: "game",
    img: "/assets/content/edukasigame.png",
  },
  {
    id: "interactive-exercises",
    title: "Interactive Exercises",
    description: "Latihan yang dapat melibatkan siswa secara langsung.",
    icon: "exercise",
    img: "/assets/content/exercise.png",
  },
  {
    id: "classroom-presentation",
    title: "Classroom Presentation",
    description: "Presentasi pembelajaran yang lebih dinamis.",
    icon: "presentation",
    img: "/assets/content/classroom.png",
  },
];

export const productHeading = {
  eyebrow: "Produk",
  title: "Satu Platform untuk Pengalaman Belajar Interaktif",
  description:
    "Semua yang dibutuhkan guru untuk membuat kelas lebih hidup — dalam satu aplikasi yang siap dipakai di Interactive Flat Panel.",
};

export const platforms = {
  eyebrow: "Platform",
  title: "Satu Produk. Dua Platform.",
  description:
    "Optimalkan pengalaman belajar di perangkat yang Anda miliki. Gerbang Edukasi siap berjalan di Android maupun Windows.",
  items: [
    {
      id: "android",
      title: "Android",
      description: "Optimized untuk Interactive Flat Panel berbasis Android.",
      icon: "android",
      img: "/assets/content/icon_android.png",
    },
    {
      id: "windows",
      title: "Windows",
      description: "Dapat digunakan pada IFP atau perangkat Windows yang kompatibel.",
      icon: "window",
      img: "/assets/content/icon_windows.png",
    },
  ] as { id: string; title: string; description: string; icon: string; img: string }[],
  cta: [
    { label: "Download untuk Android", href: "/download", icon: "download", event: "download_android" },
    { label: "Download untuk Windows", href: "/download", icon: "download", event: "download_windows" },
  ],
};

export const demoSx = {
  eyebrow: "Demo",
  title: "Lihat Gerbang Edukasi Beraksi",
  description:
    "Tonton demo atau coba langsung di browser. Rasakan bagaimana materi berubah menjadi pengalaman interaktif.",
  primaryCta: { label: "Coba Demo", href: "/demo", event: "demo_click" as const },
  secondaryCta: { label: "Download Aplikasi", href: "/download", event: "trial_start" as const },
  videoSrc: "/assets/demo-video.mp4", // placeholder video demo
  note: "Asset video demo / interactive preview belum tersedia. Ganti file di /assets/.",
};

export const howItWorks: HowItWorksStep[] = [
  { step: "01", title: "Pilih", description: "Pilih produk atau paket yang sesuai." },
  { step: "02", title: "Download", description: "Download aplikasi Android atau Windows." },
  { step: "03", title: "Install", description: "Install pada Interactive Flat Panel." },
  { step: "04", title: "Activate", description: "Masukkan license / activation code." },
  { step: "05", title: "Start Learning", description: "Gunakan Gerbang Edukasi di kelas." },
];

export const targetUsers = {
  eyebrow: "Target Pengguna",
  title: "Dibuat untuk Dunia Pendidikan",
  description:
    "Dari guru di kelas hingga institusi dan mitra — Gerbang Edukasi hadir untuk semua yang ingin pembelajaran lebih interaktif.",
  cards: [
    {
      id: "guru",
      title: "Guru",
      description: "Media pembelajaran interaktif yang mudah digunakan.",
      cta: "Untuk Guru",
      href: "/#target-guru",
    },
    {
      id: "sekolah",
      title: "Sekolah",
      description: "Solusi untuk penggunaan pada banyak kelas dan perangkat.",
      cta: "Untuk Sekolah",
      href: "/#target-sekolah",
    },
    {
      id: "partner",
      title: "Partner",
      description: "Solusi tambahan untuk distributor, reseller, dan integrator IFP.",
      cta: "Jadi Partner",
      href: "/partner",
    },
  ] as TargetUserCard[],
};

export const contentCategories: ContentCategory[] = [
  { name: "Matematika" },
  { name: "IPA" },
  { name: "Bahasa" },
  { name: "IPS" },
  { name: "Game Edukasi" },
  { name: "Quiz" },
  { name: "Presentasi" },
  { name: "Lainnya" },
];

export const contentCards: ContentCard[] = [
  {
    id: "content-math-01",
    title: "Matematika Interaktif: Bangun Datar",
    category: "Matematika",
    platform: "both",
    description: "Eksplorasi bangun datar dengan visualisasi interaktif.",
    thumb: "/assets/content/math-bangun-datar.png",
  },
  {
    id: "content-science-01",
    title: "IPA: Sistem Tata Surya",
    category: "IPA",
    platform: "android",
    description: "Jelajahi planet dan orbit dalam animasi yang menarik.",
    thumb: "/assets/content/ipa-tata-surya.png",
  },
  {
    id: "content-lang-01",
    title: "Bahasa: Kosakata Bergambar",
    category: "Bahasa",
    platform: "windows",
    description: "Belajar kosakata dengan gambar dan audio interaktif.",
    thumb: "/assets/content/bahasa-kosakata.png",
  },
  {
    id: "content-game-01",
    title: "Game Edukasi: Kuis Angka",
    category: "Game Edukasi",
    platform: "both",
    description: "Latihan berhitung melalui permainan yang seru.",
    thumb: "/assets/content/game-kuis-angka.png",
  },
];

export const pricing = {
  eyebrow: "Harga",
  title: "Pilihan Paket yang Jelas",
  description:
    "Mulai dari mencoba hingga kebutuhan sekolah dan institusi besar. Harga akan diumumkan sesuai paket resmi.",
  tiers: [
    {
      id: "demo",
      name: "Demo",
      tagline: "Untuk mencoba Gerbang Edukasi.",
      priceLabel: "Gratis",
      features: ["Akses demo aplikasi", "Konten contoh", "Dukungan dasar"],
      cta: "Coba Demo",
      href: "/demo",
    },
    {
      id: "personal",
      name: "Personal",
      tagline: "Untuk guru / pengguna individual.",
      priceLabel: "Coming Soon",
            features: ["Lisensi 1 perangkat", "Semua fitur inti", "Dukungan standar"],
      cta: "Hubungi Kami",
      href: "/partner",
    },
    {
      id: "school",
      name: "School",
      tagline: "Untuk sekolah dengan beberapa perangkat.",
      priceLabel: "Coming Soon",
      featured: true,
          features: ["Lisensi multi perangkat", "Manajemen lisensi", "Prioritas support"],
      cta: "Hubungi Kami",
      href: "/partner",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      tagline: "Untuk institusi / deployment besar.",
      priceLabel: "Hubungi Kami",
          features: ["Deployment skala besar", "Kustomisasi", "Managed services"],
      cta: "Hubungi Kami",
      href: "/partner",
    },
  ] as PricingTier[],
};

export const partner = {
  eyebrow: "Partner",
  title: "Tumbuh Bersama Gerbang Edukasi",
  description:
    "Bergabunglah sebagai distributor, reseller, system integrator, atau education technology partner.",
  perks: [
    { title: "Partner pricing", description: "Skema harga khusus mitra.", icon: "tag" },
    { title: "License distribution", description: "Distribusi lisensi yang mudah.", icon: "license" },
    { title: "Activation system", description: "Sistem aktivasi yang jelas.", icon: "key" },
    { title: "Sales support", description: "Pendampingan penjualan.", icon: "support" },
    { title: "Marketing materials", description: "Materi marketing siap pakai.", icon: "media" },
    { title: "Technical support", description: "Dukungan teknis responsif.", icon: "window" },
  ] as PartnerPerk[],
  ctaLabel: "Daftar sebagai Partner",
  formId: "partner-form",
};

export const footerLinks: { label: string; href: string }[] = [
  { label: "Produk", href: "/produk" },
  { label: "Fitur", href: "/fitur" },
  { label: "Demo", href: "/demo" },
  { label: "Harga", href: "/harga" },
  { label: "Konten", href: "/konten" },
  { label: "Partner", href: "/partner" },
  { label: "Download", href: "/download" },
  { label: "Aktivasi", href: "/aktivasi" },
  { label: "Bantuan", href: "/support" },
  { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
  { label: "Ketentuan", href: "/syarat-ketentuan" },
];
