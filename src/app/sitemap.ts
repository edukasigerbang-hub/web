import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "",
    "/produk",
    "/fitur",
    "/demo",
    "/harga",
    "/konten",
    "/partner",
    "/download",
    "/aktivasi",
    "/login",
    "/support",
    "/kebijakan-privasi",
    "/syarat-ketentuan",
  ];
  return paths.map((path) => ({
    url: `${site.baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}