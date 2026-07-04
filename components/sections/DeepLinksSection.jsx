import Link from "next/link";
import FadeIn from "../animations/FadeIn";
import { deepPages } from "../siteData";

export default function DeepLinksSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-10 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <span className="block text-xs uppercase tracking-[0.32em] text-gray-500 mb-4">
            ( 07 ) SOUS-PAGES
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-5xl mx-auto">
            Des pages utiles pour couvrir chaque besoin de transport local.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deepPages.map((item, index) => (
            <FadeIn key={item.href} delay={index * 0.06}>
              <article className="rounded-[2rem] bg-neutral-100 p-8 min-h-[18rem] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <Link
                  href={item.href}
                  className="inline-flex mt-8 text-sm uppercase tracking-[0.22em] border-b border-black pb-1"
                >
                  Ouvrir La Page
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
