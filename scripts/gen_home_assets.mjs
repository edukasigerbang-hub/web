/**
 * Generate the Home hero placeholder PNG via sharp (inline SVG rasterized).
 * Output: public/assets/hero-ifp.png  (1600x1000 branded IFP hero scene)
 *
 * Swap target referenced in src/components/home/Hero.tsx:
 *   "Ganti dengan mockup/screenshot nyata di /assets/hero-ifp.png."
 *
 * Run:  node scripts/gen_home_assets.mjs
 */
import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "..", "public", "assets");

const svg = String.raw`
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" font-family="Arial, Segoe UI, sans-serif">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d8c90"/>
      <stop offset="1" stop-color="#0284c7"/>
    </linearGradient>
    <filter id="ds" x="-20%" y="10%" width="140%" height="140%">
      <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#000" flood-opacity="0.45"/>
    </filter>
  </defs>
  <rect width="1600" height="1000" fill="url(#bg)"/>

  <!-- Device body (IFP) with shadow behind -->
  <g filter="url(#ds)">
    <rect x="250" y="170" width="1100" height="600" rx="28" fill="#ffffff"/>
    <!-- screen surface -->
    <rect x="274" y="194" width="1052" height="552" rx="20" fill="#f1f5f9"/>
    <!-- app header (rounded top) -->
    <rect x="274" y="194" width="1052" height="62" rx="20" fill="#ffffff"/>
    <circle cx="310" cy="226" r="9" fill="#0d8c90"/>
    <text x="335" y="226" font-weight="700" font-size="26" fill="#0f172a" dominant-baseline="middle">GERBANG EDUKASI</text>
  </g>

  <!-- 4 interactive content tiles -->
  <rect x="320" y="300" width="200" height="170" rx="14" fill="#0d8c90"/>
  <rect x="580" y="300" width="200" height="170" rx="14" fill="#34c3d8"/>
  <rect x="840" y="300" width="200" height="170" rx="14" fill="#0eb37d"/>
  <rect x="1100" y="300" width="200" height="170" rx="14" fill="#995df0"/>
  <text x="420" y="385" font-size="16" fill="#ffffff" text-anchor="middle">Interactive</text>
  <text x="680" y="385" font-size="16" fill="#ffffff" text-anchor="middle">Multimedia</text>
  <text x="940" y="385" font-size="16" fill="#ffffff" text-anchor="middle">Games</text>
  <text x="1200" y="385" font-size="16" fill="#ffffff" text-anchor="middle">Quiz</text>

  <!-- bottom nav strip -->
  <rect x="274" y="704" width="1052" height="42" rx="20" fill="#f1f5f9"/>
  <text x="320" y="728" font-size="15" fill="#0d8c90">Beranda</text>
  <text x="560" y="728" font-size="15" fill="#5e718c">Produk</text>
  <text x="800" y="728" font-size="15" fill="#5e718c">Demo</text>
  <text x="1020" y="728" font-size="15" fill="#5e718c">Harga</text>
  <text x="1240" y="728" font-size="15" fill="#5e718c">Aktivasi</text>

  <!-- status badge -->
  <rect x="470" y="130" width="190" height="34" rx="17" fill="#ea596c"/>
  <text x="480" y="150" font-size="16" fill="#ffffff">Demo sedang berjalan</text>

  <!-- tagline -->
  <text x="800" y="800" font-size="22" fill="#ffffff" text-anchor="middle" font-weight="600">Media pembelajaran interaktif untuk Interactive Flat Panel</text>
  <text x="800" y="834" font-size="16" fill="#bee6e6" text-anchor="middle">
    Android &amp; Windows  ·  Siap dipakai di kelas  ·  Mudah digunakan guru
  </text>
</svg>`;

const file = path.join(outDir, "hero-ifp.png");
await sharp(Buffer.from(svg), { failOnError: false }).resize(1600, 1000).png().toFile(file);
const { size } = await stat(file);
console.log(`wrote ${path.relative(process.cwd(), file)} (${size} bytes)`);
