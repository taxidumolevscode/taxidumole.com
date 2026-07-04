import { motion } from "framer-motion";
import Link from "next/link";
import FadeIn from "../animations/FadeIn";
import { homeContent, siteMeta } from "../siteData";

export default function HeroSection() {
  const { hero } = homeContent;

  return (
    <header className="hero-shell relative w-full h-screen flex flex-col justify-center items-center overflow-hidden px-4">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
        <img
          src={siteMeta.heroImage}
          alt="Taxi du Môle en Haute-Savoie"
          className="hero-image object-contain"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/75 z-0" />
      <div className="hero-glow" />

      <div className="z-10 text-center flex flex-col items-center max-w-6xl">
        <div className="w-full text-left px-3 xl:px-6">
          <FadeIn delay={0.2}>
            <h2 className="hero-eyebrow text-xs md:text-sm minW1600:!text-[1.6vw] tracking-[0.18em] md:tracking-[0.4em] uppercase mb-4">
              {hero.eyebrow}
            </h2>
          </FadeIn>
        </div>

        <FadeIn delay={0.28} className="w-full">
          <h1 className="hero-brand-title">{hero.brandTitle}</h1>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-8 max-w-3xl">
          <p className="hero-intro text-lg md:text-2xl text-gray-200 leading-relaxed">
            {hero.intro}
          </p>
        </FadeIn>

        <FadeIn delay={0.45} className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex justify-center px-8 py-4 bg-white text-black text-xs md:text-sm font-bold uppercase tracking-[0.24em] hover:bg-gray-200 transition-colors"
          >
            {hero.primaryCta}
          </Link>
          <a
            href={siteMeta.phoneHref}
            className="inline-flex justify-center px-8 py-4 border border-white text-white text-xs md:text-sm font-bold uppercase tracking-[0.24em] hover:bg-white hover:text-black transition-colors"
          >
            {hero.secondaryCta}
          </a>
        </FadeIn>

        <FadeIn delay={0.55} className="mt-8 flex flex-wrap justify-center gap-3">
          {hero.bullets.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] md:text-xs uppercase tracking-[0.18em]"
            >
              {item}
            </span>
          ))}
        </FadeIn>
      </div>

      <motion.div
        className="absolute bottom-10 right-10 flex items-center gap-4 z-10 hidden md:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest writing-vertical-lr">
          Scroll Down
        </span>
      </motion.div>

      <style jsx>{`
        .hero-shell {
          min-height: 100svh;
        }

        .hero-image {
          width: min(78vw, 86rem);
          max-height: 66vh;
          filter: saturate(0.9) contrast(1.02);
          transform: translateY(6%);
        }

        .hero-glow {
          position: absolute;
          inset: auto auto 8%;
          width: min(34rem, 72vw);
          height: min(34rem, 72vw);
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, rgba(59, 130, 246, 0.08) 38%, rgba(0, 0, 0, 0) 72%);
          pointer-events: none;
          filter: blur(12px);
          z-index: 0;
        }

        .hero-brand-title {
          margin: 0 auto;
          max-width: 100%;
          color: #fff8ea;
          font-size: 2.55rem;
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: 0;
          text-transform: uppercase;
          white-space: nowrap;
          text-shadow: 0 1.2rem 4rem rgba(0, 0, 0, 0.7);
        }

        @media (max-width: 768px) {
          .hero-shell {
            min-height: 100svh;
            padding-left: 1.1rem;
            padding-right: 1.1rem;
            padding-top: 6rem;
            padding-bottom: 2.5rem;
          }

          .hero-image {
            width: 92vw;
            max-height: 46vh;
            transform: translateY(10%);
            transform-origin: center center;
            opacity: 0.7;
          }

          .hero-glow {
            width: 72vw;
            height: 72vw;
            bottom: 14%;
            filter: blur(18px);
          }

          .hero-eyebrow {
            max-width: 22rem;
            line-height: 1.55;
            letter-spacing: 0.17em !important;
          }

          .hero-intro {
            font-size: 0.95rem;
            line-height: 1.7;
            max-width: 21rem;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-brand-title {
            font-size: 2.35rem;
          }
        }

        @media (min-width: 480px) {
          .hero-brand-title {
            font-size: 3rem;
          }
        }

        @media (min-width: 768px) {
          .hero-brand-title {
            font-size: 5.6rem;
          }
        }

        @media (min-width: 1024px) {
          .hero-brand-title {
            font-size: 6.7rem;
          }
        }

        @media (min-width: 1536px) {
          .hero-brand-title {
            font-size: 7.35rem;
          }
        }

        @media (max-width: 420px) {
          .hero-image {
            width: 94vw;
            max-height: 42vh;
            transform: translateY(11%);
          }

          .hero-brand-title {
            font-size: 2.1rem;
          }
        }
      `}</style>
    </header>
  );
}
