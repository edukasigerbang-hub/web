import type { IconName } from "@/components/ui/icons";

/**
 * GERBANG EDUKASI — FEATURE SHOWCASE DATA
 * Copy & layout untuk halaman /fitur. Dihasilkan dari konsep 6 (enam) fitur
 * inti yang sudah didefinisikan di src/data/site.ts (features[]). Di sini kami
 * memperkaya dengan benefit + cara pakai agar menjadi "showcase", tanpa
 * menambah atau mengarang kemampuan baru.
 */

export type FeatureLayout =
  | "visual-left"
  | "text-left"
  | "visual-large"
  | "visual-large-cta";

export interface FeatureShowcase {
  id: string; // juga dipakai sebagai anchor #id
  number: string;
  title: string;
  short: string;
  copy: string;
  benefit: string;
  how: string;
  icon: IconName;
  theme: "primary" | "accent" | "success";
  layout: FeatureLayout;
}

export type FeatureTheme = "primary" | "accent" | "success";

export const featureThemeIcon: Record<FeatureTheme, string> = {
  primary: "bg-primary-soft text-primary",
  accent: "bg-accent-soft text-accent",
  success: "bg-success/15 text-success",
};

export const featureThemeGrad: Record<FeatureTheme, string> = {
  primary: "from-primary-soft via-white to-primary/10",
  accent: "from-accent-soft via-white to-accent/10",
  success: "from-success/15 via-white to-success/10",
};

export const featuresShowcase: FeatureShowcase[] = [
  {
    id: "interactive-learning",
    number: "01",
    title: "Interactive Learning",
    short: "Pembelajaran dengan elemen interaktif.",
    copy:
      "Buat materi yang biasa hanya dilihat jadi bisa disentuh langsung. Siswa menyentuh, menyeret, dan memanipulasi elemen — semua di Interactive Flat Panel yang sama.",
    benefit: "Siswa belajar dengan melakukan, bukan hanya mendengar.",
    how: "Guru menyajikan materi, lalu kelas bereksperimen langsung di satu layar.",
    icon: "pencil",
    theme: "primary",
    layout: "visual-left",
  },
  {
    id: "interactive-quiz",
    number: "02",
    title: "Interactive Quiz",
    short: "Evaluasi dan kuis yang lebih menarik.",
    copy:
      "Kuis dirancang agar menegangkan, bukan hanya menguji ingatan. Tersedia berbagai gaya pertanyaan, lalu langsung dikumpulkan di panel.",
    benefit: "Evaluasi jadi bagian alur belajar — menyalurkan, bukan menghalangi.",
    how: "Guru menyiapkan kuis; tiap siswa menjawab langsung di Gerbang Edukasi.",
    icon: "quiz",
    theme: "accent",
    layout: "text-left",
  },
  {
    id: "multimedia",
    number: "03",
    title: "Multimedia",
    short: "Gunakan gambar, audio, video, animasi, dan elemen interaktif.",
    copy:
      "Satu slide bisa mencampur video, animasi bergerak, suara, dan kontrol interaktif. Segalanya tetap berada di satu ruang kerja yang rapi.",
    benefit: "Tanpa beralih tab; materi tetap utuh di satu layar kelas.",
    how: "Seret elemen ke dalam presentasi — siswa melihat hasilnya langsung.",
    icon: "media",
    theme: "success",
    layout: "visual-large",
  },
  {
    id: "educational-games",
    number: "04",
    title: "Educational Games",
    short: "Aktivitas belajar berbasis permainan.",
    copy:
      "Aturan dan tema yang jelas menjadikan permainan serius bagian dari materi. Cocok untuk kuis, rangkuman, dan sesi kelompok.",
    benefit: "Sesan belajar yang produktif — serius, tapi menyenangkan.",
    how: "Guru memilih aktivitas; kelas memainkannya di Gerbang Edukasi.",
    icon: "game",
    theme: "primary",
    layout: "visual-left",
  },
  {
    id: "interactive-exercises",
    number: "05",
    title: "Interactive Exercises",
    short: "Latihan yang dapat melibatkan siswa secara langsung.",
    copy:
      "Drill, label, dan soal terbuka dapat disajikan agar merespons langsung. Hasilnya tetap terlihat sebagai bagian dari materi.",
    benefit: "Latihan berdampingan langsung dengan penjelasan — tidak terputus di antara.",
    how: "Masukkan latihan; siswa mengerjakan langsung di IFP.",
    icon: "exercise",
    theme: "accent",
    layout: "text-left",
  },
  {
    id: "classroom-presentation",
    number: "06",
    title: "Classroom Presentation",
    short: "Presentasi pembelajaran yang lebih dinamis.",
    copy:
      "Menyatukan materi, navigasi, dan interaksi dalam satu alur. Guru mengemudi kelas, bukan menggerakkan jendela.",
    benefit: "Satu kontrol penuh; kelas tetap fokus tanpa gangguan luar.",
    how: "Presentasi dikemudikan langsung dari Interactive Flat Panel.",
    icon: "presentation",
    theme: "success",
    layout: "visual-large-cta",
  },
];
