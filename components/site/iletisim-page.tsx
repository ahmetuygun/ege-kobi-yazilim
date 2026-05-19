import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  OFFICE_ADDRESS_LOCALITY,
  OFFICE_STREET_ADDRESS,
  officeGoogleMapsSearchUrl,
} from "@/lib/site-contact";

function ContactCard({
  title,
  children,
  icon: Icon,
}: {
  title: string;
  children: ReactNode;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}) {
  return (
    <article className="card-dark flex flex-col rounded-2xl border border-white/10 p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ege-sea/15 text-ege-sea-bright ring-1 ring-ege-sea/25">
          <Icon className="size-5" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <div className="mt-3 text-[15px] leading-relaxed text-slate-400">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

export function IletisimPageContent() {
  const mapsUrl = officeGoogleMapsSearchUrl();

  return (
    <>
      <section className="border-b border-white/10 bg-ege-surface-mid">
        <div className="mx-auto max-w-3xl px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="mb-8 mt-2 border-white/20 bg-white/5 text-white hover:bg-white/10 sm:mt-4"
          >
            <Link href="/">
              <ArrowLeft className="size-4" />
              Ana sayfa
            </Link>
          </Button>
          <p className="text-sm font-semibold uppercase tracking-wider text-ege-sea-light">
            Bize ulaşın
          </p>
          <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            İletişim
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Projeleriniz, entegrasyon ihtiyaçlarınız veya demo talepleriniz için
            aşağıdaki ileti bilgilerini kullanarak bize ulaşabilirsiniz.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <ContactCard title="Ofis" icon={MapPin}>
          <p className="text-slate-300">
            {OFFICE_STREET_ADDRESS}
            <br />
            {OFFICE_ADDRESS_LOCALITY}
          </p>
          <Link
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-ege-sea-light underline-offset-4 hover:text-ege-sea-bright hover:underline"
          >
            Haritada aç
          </Link>
        </ContactCard>

        <ContactCard title="E-posta" icon={Mail}>
          <p className="font-medium text-white">{CONTACT_EMAIL}</p>
          <p className="mt-2 text-sm text-slate-500">
            Adresi kopyalayıp e-posta uygulamanızdan yazın.
          </p>
        </ContactCard>

        <ContactCard title="Telefon" icon={Phone}>
          <p className="font-medium text-white">{CONTACT_PHONE_DISPLAY}</p>
          <p className="mt-2 text-sm text-slate-500">
            Numarayı kopyalayıp arama uygulamanızdan kullanabilirsiniz.
          </p>
        </ContactCard>
      </div>
    </>
  );
}
