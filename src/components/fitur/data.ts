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
  label: string; // label kecil (eyebrow) — e.g. "Interactive Learning"
  title: string;
  short: string;
  copy: string;
  description: string;
  benefit: string;
  how: string;
  icon: IconName;
  theme: "primary" | "accent" | "success";
  img?: string; // screenshot asli (/assets/content/) — pakai ini bila ada, else mock
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
    label: "Interactive Learning",
    title: "Belajar bukan hanya melihat. Siswa ikut berinteraksi.",
    short: "Pembelajaran dengan elemen interaktif.",
    copy:
      "Buat materi yang biasa hanya dilihat jadi bisa disentuh langsung. Siswa menyentuh, menyeret, dan memanipulasi elemen — semua di Interactive Flat Panel yang sama.",
    description:
      "Gerbang Edukasi membuat materi pembelajaran lebih aktif melalui interaksi langsung dengan layar. Guru dapat menjadikan IFP sebagai media untuk menjelaskan, mengeksplorasi, dan mengajak siswa berpartisipasi.",
    benefit: "Siswa belajar dengan melakukan, bukan hanya mendengar.",
    how: "Guru menyajikan materi, lalu kelas bereksperimen langsung di satu layar.",
    icon: "pencil",
    theme: "primary",
    img: "/assets/content/interactive.png",
    layout: "visual-left",
  },
  {
    id: "interactive-quiz",
    number: "02",
    label: "Interactive Quiz",
    title: "Ubah evaluasi menjadi pengalaman yang lebih menarik.",
    short: "Evaluasi dan kuis yang lebih menarik.",
    copy:
      "Kuis dirancang agar menegangkan, bukan hanya menguji ingatan. Tersedia berbagai gaya pertanyaan, lalu langsung dikumpulkan di panel.",
    description:
      "Kuis interaktif membantu guru mengajak siswa berpartisipasi langsung dalam proses evaluasi pembelajaran.",
    benefit: "Evaluasi jadi bagian alur belajar — menyalurkan, bukan menghalangi.",
    how: "Guru menyiapkan kuis; tiap siswa menjawab langsung di Gerbang Edukasi.",
    icon: "quiz",
    theme: "accent",
    img: "/assets/content/quizz.png",
    layout: "text-left",
  },
  {
    id: "multimedia",
    number: "03",
    label: "Multimedia",
    title: "Satukan berbagai media dalam satu pengalaman belajar.",
    short: "Gunakan gambar, audio, video, animasi, dan elemen interaktif.",
    copy:
      "Satu slide bisa mencampur video, animasi bergerak, suara, dan kontrol interaktif. Segalanya tetap berada di satu ruang kerja yang rapi.",
    description:
      "Gunakan gambar, video, audio, animasi, dan elemen visual lainnya untuk membantu menjelaskan materi dengan cara yang lebih menarik dan mudah dipahami.",
    benefit: "Tanpa beralih tab; materi tetap utuh di satu layar kelas.",
    how: "Seret elemen ke dalam presentasi — siswa melihat hasilnya langsung.",
    icon: "media",
    theme: "success",
    img: "/assets/content/multimedia.png",
    layout: "visual-large",
  },
  {
    id: "educational-games",
    number: "04",
    label: "Educational Games",
    title: "Belajar terasa lebih menyenangkan ketika siswa ikut bermain.",
    short: "Aktivitas belajar berbasis permainan.",
    copy:
      "Aturan dan tema yang jelas menjadikan permainan serius bagian dari materi. Cocok untuk kuis, rangkuman, dan sesi kelompok.",
    description:
      "Elemen permainan membantu menciptakan suasana pembelajaran yang lebih aktif, menyenangkan, dan mendorong partisipasi siswa.",
    benefit: "Sesan belajar yang produktif — serius, tapi menyenangkan.",
    how: "Guru memilih aktivitas; kelas memainkannya di Gerbang Edukasi.",
    icon: "game",
    theme: "primary",
    img: "/assets/content/edukasigame.png",
    layout: "visual-left",
  },
  {
    id: "interactive-exercises",
    number: "05",
    label: "Interactive Exercises",
    title: "Latihan yang membuat siswa benar-benar terlibat.",
    short: "Latihan yang dapat melibatkan siswa secara langsung.",
    copy:
      "Drill, label, dan soal terbuka dapat disajikan agar merespons langsung. Hasilnya tetap terlihat sebagai bagian dari materi.",
    description:
      "Berikan siswa kesempatan untuk berlatih dan berinteraksi langsung dengan materi pembelajaran menggunakan layar sentuh.",
    benefit: "Latihan berdampingan langsung dengan penjelasan — tidak terputus di antara.",
    how: "Masukkan latihan; siswa mengerjakan langsung di IFP.",
    icon: "exercise",
    theme: "accent",
    img: "/assets/content/exercise.png",
    layout: "text-left",
  },
  {
    id: "classroom-presentation",
    number: "06",
    label: "Classroom Presentation",
    title: "Presentasi kelas yang lebih hidup dan interaktif.",
    short: "Presentasi pembelajaran yang lebih dinamis.",
    copy:
      "Menyatukan materi, navigasi, dan interaksi dalam satu alur. Guru mengemudi kelas, bukan menggerakkan jendela.",
    description:
      "Guru dapat menggunakan Gerbang Edukasi sebagai media presentasi pembelajaran dengan pengalaman visual yang dirancang untuk layar besar.",
    benefit: "Satu kontrol penuh; kelas tetap fokus tanpa gangguan luar.",
    how: "Presentasi dikemudikan langsung dari Interactive Flat Panel.",
    icon: "presentation",
    theme: "success",
    img: "/assets/content/classroom.png",
    layout: "visual-large-cta",
  },
];
