import FadeIn from "../animations/FadeIn";
import { officialHighlights, officialSources } from "../siteData";

export default function OfficialSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-10 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="block text-xs uppercase tracking-[0.32em] text-gray-500 mb-4">
            ( 06 ) REPÈRES OFFICIELS
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-4xl">
            Les informations clés pour réserver un taxi en Haute-Savoie.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {officialHighlights.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 min-h-[15rem]">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {item.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="hidden grid-cols-1 md:grid-cols-3 gap-6" aria-hidden="true">
          {officialSources.map((source, index) => (
            <FadeIn key={source.title} delay={0.1 + index * 0.08}>
              <article className="border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.28em] text-gray-500 mb-4">
                  Source Utile
                </p>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                  {source.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {source.detail}
                </p>
                <a
                  href={source.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm uppercase tracking-[0.22em] border-b border-white/40 pb-1"
                >
                  {source.cta}
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
