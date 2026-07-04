import Link from "next/link";
import { Check } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import { homeContent } from '../siteData';

export default function PricingSection() {
  const packages = homeContent.solutions;

  return (
    <section className="py-32 px-4 md:px-10 bg-white text-black">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
        <div className="xl:col-span-3">
          <span className="block text-xs font-bold tracking-widest uppercase mb-4 text-gray-400">
            ( 04 ) SOLUTIONS
          </span>
          <h3 className="text-5xl font-black uppercase tracking-tighter">
            Réponses<br className='xl:block hidden'/> Concrètes
          </h3>
        </div>
        
        <div className="xl:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <FadeIn 
                key={index}
                delay={pkg.delay}
                className={
                  pkg.featured 
                    ? "border-t border-black pt-6 bg-black text-white p-6 -mx-4 md:mx-0 shadow-2xl transform md:-translate-y-4"
                    : "border-t border-black pt-6 group hover:bg-neutral-50 transition-colors duration-500 p-4 -mx-4 md:mx-0"
                }
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="text-xl font-bold uppercase">{pkg.name}</h4>
                  <span className="text-sm font-mono">{pkg.price}</span>
                </div>
                
                <p className={`text-sm mb-8 leading-relaxed ${
                  pkg.featured ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {pkg.description}
                </p>
                
                <ul className={`space-y-3 text-sm mb-8 ${
                  pkg.featured ? 'text-gray-300' : 'text-gray-800'
                }`}>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check size={14}/> {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={pkg.href || "/solutions"}
                  className={
                    pkg.featured
                      ? "block w-full py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all text-center"
                      : "block w-full py-3 border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all text-center"
                  }
                >
                  {pkg.featured ? 'Demander Ce Trajet' : 'Voir Plus'}
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
