import type { Metadata } from "next";
import Link from "next/link";

import { ClosingCta } from "@/components/site/closing-cta";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  description: "Aradığınız sayfa taşınmış veya kaldırılmış olabilir.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main
        id="main"
        className="flex min-h-svh flex-col bg-background"
      >
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:py-32">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            404
          </p>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Sayfa bulunamadı
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            Bağlantıyı kontrol edin veya ana sayfadan devam edin.
          </p>
          <Link
            href="/"
            className="mt-8 text-sm font-semibold text-ege-sea-light underline-offset-4 hover:text-ege-sea-bright hover:underline"
          >
            Ana sayfaya dön
          </Link>
        </div>

        <ClosingCta />
      </main>

      <Footer />
    </>
  );
}
