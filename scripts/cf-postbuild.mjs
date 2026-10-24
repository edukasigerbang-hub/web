import { spawnSync } from "node:child_process";

// Cloudflare Workers Builds menjalankan `npm run build`. Setelah `next build`,
// langkah ini membungkus output dengan OpenNext. Saat OpenNext memanggil
// `npm run build` lagi, guard env mencegah rekursi.
if (process.env.OPEN_NEXT_BUILD === "1") {
  process.exit(0);
}

const result = spawnSync("npx", ["opennextjs-cloudflare", "build"], {
  stdio: "inherit",
  env: { ...process.env, OPEN_NEXT_BUILD: "1" },
  shell: true
});

process.exit(result.status ?? 1);
