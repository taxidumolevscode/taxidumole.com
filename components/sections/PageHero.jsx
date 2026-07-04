import FadeIn from "../animations/FadeIn";
import { siteMeta } from "../siteData";

export default function PageHero({ eyebrow, title, intro, image }) {
  return (
    <section className="page-hero relative min-h-[72vh] flex items-end overflow-hidden px-4 md:px-10 pt-36 pb-16">
      <div className="absolute inset-0 opacity-35">
        <img
          src={image || siteMeta.heroImage}
          alt={title}
          className="page-hero-image w-full h-full object-cover grayscale"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black" />
      <div className="page-hero-accent" />

      <div className="relative z-10 max-w-5xl">
        <FadeIn>
          <span className="block text-xs md:text-sm tracking-[0.32em] uppercase text-gray-400 mb-5">
            {eyebrow}
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="page-hero-heading text-4xl md:text-5xl xl:text-6xl font-black uppercase tracking-tighter leading-[0.96] max-w-4xl">
            {title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
            {intro}
          </p>
        </FadeIn>
      </div>

      <style jsx>{`
        .page-hero::after {
          content: "";
          position: absolute;
          left: 4rem;
          bottom: 3rem;
          width: min(24rem, 42vw);
          height: 1px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.38), rgba(255, 255, 255, 0));
          z-index: 1;
        }

        .page-hero-image {
          transform: scale(1.01);
        }

        .page-hero-heading {
          max-width: min(100%, 16ch);
        }

        .page-hero-accent {
          position: absolute;
          right: -8rem;
          top: 8rem;
          width: min(28rem, 44vw);
          height: min(28rem, 44vw);
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 44%, rgba(255, 255, 255, 0) 72%);
          filter: blur(10px);
          z-index: 0;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .page-hero::after {
            left: 1rem;
            width: 44vw;
          }

          .page-hero-heading {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
