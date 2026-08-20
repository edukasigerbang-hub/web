import Image from "next/image";

/**
 * Logo — brand lockup image (public/assets/logo-gerbang.png).
 * Optimized via next/image; parent controls placement (Navbar / Footer).
 */
export function Logo({
  height = 32,
  eager = false,
  className,
}: {
  height?: number;
  eager?: boolean;
  className?: string;
}) {
  const width = Math.round(height * 1.5);
  return (
    <Image
      src="/assets/logo-gerbang.png"
      alt="Gerbang Edukasi"
      width={width}
      height={height}
      className={`h-auto w-auto object-contain ${className ?? ""}`}
      style={{ height, width }}
      loading={eager ? "eager" : "lazy"}
    />
  );
}