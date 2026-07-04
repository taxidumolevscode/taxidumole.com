import FadeIn from '../animations/FadeIn';
import { homeContent, siteMeta } from '../siteData';

export default function ApproachSection() {
  const approaches = homeContent.process;

  return (
    <section className="py-32 px-4 md:px-10 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 text-[30vw] font-black text-[#111] pointer-events-none select-none leading-none">
        TAXI
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <FadeIn>
            <div className="rounded-[2rem] border border-white/10 bg-white p-5 shadow-2xl shadow-black/30">
              <img
                src={siteMeta.logoImage}
                alt="Logo Taxi du Môle"
                className="w-full object-contain"
              />
            </div>
          </FadeIn>
        </div>
        <div className="md:col-span-1"></div>
        <div className="md:col-span-6">
          <span className="block text-xs text-gray-500 font-mono mb-6">
            ( 03 ) LES DÉMARCHES
          </span>
          <FadeIn delay={0.2}>
            <h3 className="text-3xl lg:text-5xl font-bold uppercase leading-tight mb-8">
              Une Réservation <br className='xl:block hidden' /> Lisible Et Rassurante
            </h3>
            <div className="space-y-8">
              {approaches.map((approach, index) => (
                <div key={index} className="border-l border-gray-800 pl-6">
                  <h4 className="text-lg font-bold uppercase mb-2 text-white">
                    {approach.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
