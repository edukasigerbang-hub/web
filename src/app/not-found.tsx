import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-surface-muted py-20">
      <Container className="max-w-xl text-center">
        <p className="text-6xl font-extrabold text-primary/20">404</p>
        <h1 className="mt-4 text-3xl font-bold text-ink">Halaman tidak ditemukan</h1>
        <p className="mt-3 text-muted">
          Halaman yang Anda cari tidak ada atau telah dipindahkan. Mari kembali ke beranda atau
          coba demo Gerbang Edukasi.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" variant="primary" icon="arrow">
            Kembali ke Beranda
          </Button>
          <Button href="/demo" variant="secondary">
            Coba Demo
          </Button>
        </div>
      </Container>
    </section>
  );
}