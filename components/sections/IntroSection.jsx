import FadeIn from '../animations/FadeIn';
import { homeContent } from '../siteData';

export default function IntroSection() {
  const { intro } = homeContent;

  return (
    <section className="py-24 md:py-40 px-6 md:px-20 bg-black relative z-10">
      <FadeIn>
        <div className="mb-16 flex justify-center md:mb-24">
          <img
            src="https://res.cloudinary.com/do6qoswp/image/upload/f_auto,q_auto/6c1862c7-feaa-4365-a0ab-5a4a3a1b2063_qglvbf"
            alt="Taxi du Môle"
            className="w-full max-w-[24rem] object-contain md:max-w-[34rem]"
          />
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-3 text-gray-500 font-mono text-sm">
          ( 01 )
        </div>
        <div className="md:col-span-9">
          <FadeIn>
            <h3 className="text-4xl md:text-5xl xl:text-7xl font-bold leading-tight uppercase tracking-tight mb-12">
              Taxi Local <br/>
              <span className="text-gray-500">pour vos trajets</span> <br/>
              en Haute-Savoie.
            </h3>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <p className="text-lg text-gray-300 leading-relaxed">
                {intro.left}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {intro.right}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
