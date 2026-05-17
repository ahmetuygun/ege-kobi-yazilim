const STORIES = [
  {
    brand: "Tekstil360",
    quote:
      "Sipariş ve fason takibini tek listede görünce telefon trafiği ciddi azaldı.",
    author: "Ayhan Yılmaz",
    role: "Atölye sahibi",
  },
  {
    brand: "Yapı360",
    quote:
      "Şantiyedeki malzeme talepleri ve günlük notlar artık dağınık kalmıyor.",
    author: "Selin Demir",
    role: "Şantiye şefi",
  },
  {
    brand: "Üretim360",
    quote:
      "Vardiya ve basit üretim adımlarını ekrandan izlemek işimize yaradı.",
    author: "Caner Tekin",
    role: "İşletme müdürü",
  },
] as const;

export function SuccessStories() {
  return (
    <section
      id="hikayeler"
      aria-labelledby="hikayeler-baslik"
      className="border-t border-white/10 bg-ege-surface-mid py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="hikayeler-baslik"
          className="text-balance text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Başarı hikayelerimiz
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-400">
          Kısa ve net geri bildirimler. Abartılı vaatler yerine, günlük işe
          dönük notlar.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STORIES.map((s) => (
            <blockquote
              key={s.brand}
              className="card-dark flex flex-col rounded-2xl p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-ege-sea-light">
                {s.brand}
              </p>
              <p className="mt-4 flex-1 text-[17px] leading-relaxed text-slate-200">
                “{s.quote}”
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
                <div
                  className="grid size-10 place-items-center rounded-full bg-slate-700 text-xs font-bold text-slate-200"
                  aria-hidden
                >
                  {s.author
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{s.author}</p>
                  <p className="text-xs text-slate-500">{s.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
