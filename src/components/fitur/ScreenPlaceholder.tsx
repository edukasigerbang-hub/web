import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";
import Image from "next/image";
import { featureThemeGrad, featureThemeIcon } from "./data";
import type { FeatureTheme } from "./data";

/**
 * Placeholder visual produk — device frame + abstract interface.
 *
 * Sengaja abstrak (bukan screenshot palsu): berisi ikon fitur di dalam
 * frame perangkat bertema brand. Aspect ratio tetap (16:10 -> 16:9) agar
 * ketika screenshot asli dimasukkan ke dalam box yang sama, layout tidak berubah.
 *
 * Bila prop `img` diberikan, screenshot asli (`/assets/content/*.png`) yang
 * ditampilkan — mock CSS tetap jadi fallback.
 */
export function ScreenPlaceholder({
  icon,
  title,
  theme = "primary",
  wide = false,
  img,
}: {
  icon: IconName;
  title: string;
  theme?: FeatureTheme;
  wide?: boolean;
  img?: string;
}) {
  return (
    <div
      className={`mx-auto overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-card-hover ${
        wide ? "max-w-[640px]" : "max-w-[420px]"
      }`}
    >
      {/* device top bar */}
      <div className="flex items-center gap-2 rounded-full bg-ink px-3 py-1.5">
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-primary text-white">
          <Icon name="logo" size={14} />
        </span>
        <span className="text-[10px] font-semibold tracking-wide text-white">
          Gerbang Edukasi
        </span>
        <span className="mx-auto" />
        <span className="text-[9px] tracking-wide text-white/70">
          Interactive Flat Panel
        </span>
      </div>

      {/* screen — fixed 16:10 (16:9 wide); pakai screenshot bila ada */}
      {img ? (
        <div className="relative aspect-[16/10] w-full md:aspect-[16/9]">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(min-width: 768px) 640px, 420px"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className={`relative bg-gradient-to-br ${featureThemeGrad[theme]}`}
        >
          <div className="aspect-[16/10] w-full md:aspect-[16/9]" />
          <div className="absolute inset-0 m-auto grid h-3/4 w-3/4 max-w-[280px] place-items-center text-center">
            <div>
              <span
                className={`flex h-16 w-16 items-center justify-center rounded-xl shadow-card ${featureThemeIcon[theme]}`}
              >
                <Icon name={icon} size={30} />
              </span>
              <p className="mt-3 text-sm font-semibold text-ink">{title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
      
