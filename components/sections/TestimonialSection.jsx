import FadeIn from '../animations/FadeIn';
import { homeContent } from '../siteData';

export default function TestimonialSection() {
  const { proof } = homeContent;

  return (
    <section className="py-24 bg-neutral-100 text-black">
      <div className="lg:max-w-4xl mx-auto px-4 md:px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 block">
          ( 05 ) PREUVES
        </span>
        
        <FadeIn>
          <p className="text-2xl md:text-4xl font-serif italic leading-relaxed mb-10">
            &quot;{proof.quote}&quot;
          </p>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-bold uppercase tracking-widest">
              {proof.author}
            </span>
            <span className="text-xs text-gray-500">{proof.meta}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
