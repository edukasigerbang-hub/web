# Prompts Image Generator — Gerbang Edukasi

Prompts siap tempel untuk image generator (Midjourney / DALL-E / Flux / Stable
Diffusion) pada asset placeholder halaman **Home** y **Fitur**. Alineado con la paleta
de marca y los nombres de archivo del código. Guarda cada salida con la ruta de la
sección 6.

## Paleta de marca

| Token  | Hex / color            | Uso                  |
|--------|------------------------|----------------------|
| primary| `#0d8c90` (teal)        | acento principal     |
| accent | `#ea596c` (rose)        | CTA / badge          |
| sky    | `#0284c7`               | degradado hero       |
| green  | `#0eb37d`               | ok / correcto        |
| cyan   | `#34c3d8`               | tile multimedia      |
| purple | `#995df0`               | tile quiz            |
| surface| `#ffffff` / `#f1f5f9`   | fondo panel app      |
| ink    | `#0f172a`               | texto                |

Estilo: **UI dashboard moderno, limpio, minimalista, flat con sombra suave**, tipografía
sans (Inter / Plus Jakarta Sans); no dibujo caricatura.

## 1. HOME — Hero (mockup IFP)

```
Premium interactive-flat-panel device on a low desk, seen nearly front-on. The screen
shows a clean education app UI "GERBANG EDUKASI": top bar with teal mark + label
"Interactive Learning Platform"; 2x2 rounded tiles Interactive, Multimedia, Games, Quiz;
lesson row labeled "Media Pembelajaran Interactivo - touch to interact"; bottom nav
Beranda, Produk, Demo, Harga, Aktivasi. Colors teal #0f7664, sky #0284c7, green #0eb37d,
cyan #34c3d8, purple #995df0, rose button #ea596c; UI on white / #f1f5f9. A small rose
badge reads "Demo corriendo". Soft blurred classroom in warm daylight, shallow DOF,
screen crisp. 4k product render, photorealistic screen, crisp UI text, subtle rim light,
no watermark.
--aspect 16:10 --style raw
```

## 2. HOME — Póster demo

```
Splash poster for an education software demo. Center a large rounded play button (white
circle, rose #ea596c ring) over the Gerberk edu app UI: header, 2x2 tiles Interactive /
Multimedia / Games / Quiz (teal, sky, green, cyan, purple), small nav Beranda-Produk-
Demo-Harga-Aktivasi. Dark teal-to-sky gradient. Clean, minimal, crisp, no watermark.
--aspect 16:9 --style raw
```

## 3 · HOME — Thumbnails contenido (16:9)

```
[A] Geometry: flat vector shapes (square, triangle, circle, rectangle) on light teal
#e0f2f2 with subtle grid. Minimal, one muted label "Bangun Datar".
[B] Solar: flat vector solar system, yellow sun + colored planet ring on deep ink
#0f172a with tiny stars. Minimal.
[C] Vocabulary: flat vector alphabet tiles A B C + speech bubble on soft sky #e0f2fe.
Bright, label "Kosakata".
[D] Quiz: flat vector playful "1 2 3" chips + trophy on soft purple #ece9fe. Minimal.
```

## 4 · Home / Fitur — Platform (opcional)

```
Icon tile (Android): rounded square, teal #0f7664 → sky #0284c7, white android glyph.
Icon tile (Windows): four small white squares on sky #0284c7. Minimal, centered, no text.
```

## 5 · Página Fitur — Screenshot por fitur

```
(a) Interactive Learning:
side editor: left sidebar with Beranda, Produk, Demo, Harga, Aktivasi; main canvas with
draggable shape + touch cursor, top toolbar, rose "Simpan" button. Teal accent. 16:10.

(b) Interactive Quiz:
      single multiple-choice, 4 rounded buttons, one correct green, teal progress bar,
      "Skor 80" badge. 16:10.

(c) Multimedia:
      centered 16:9 video player, side media library thumbnails, bottom timeline. 16:10.

(d) Educational Games:
      level map with star badges + reward bar, cyan + purple accents. 16:10.

(e) Interactive Exercises:
      fill-the-blank lesson, touch input, 3 chips, teal "Periksa" button. 16:10.

(f) Classroom Presentation:
      big slide canvas, bullet + one image, bottom prev/next bar, on-screen notes. 16:10.
```

*(Aspect 16:10, salida PNG ≥1024px, latar limpio, tanpa watermark)*

## 6 · Rutas guardar

| Prompt | Ruta                                     |
|--------|------------------------------------------|
| 1      | `public/assets/hero-ifp.png`             |
| 2      | `public/assets/demo-poster.png`          |
| 3A     | `public/assets/content/math-bangun-datar.png` |
| 3B     | `public/assets/content/ipa-tata-surya.png`    |
| 3C     | `public/assets/content/bahasa-kosakata.png`   |
| 3D     | `public/assets/content/game-kuis-angka.png`   |
| 5A     | `public/assets/content/fitur-interactive.png` |
| 5B     | `public/assets/content/fitur-quiz.png`        |
| 5C     | `public/assets/content/fitur-multimedia.png`  |
| 5D     | `public/assets/content/fitur-games.png`       |
| 5E     | `public/assets/content/fitur-exercises.png`   |
| 5F     | `public/assets/content/fitur-presentation.png`|