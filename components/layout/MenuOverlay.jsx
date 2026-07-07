import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, Phone, X } from "lucide-react";
import { navigationMenu, siteMeta } from "../siteData";

export default function MenuOverlay({ isOpen, onClose }) {
  const [expandedItem, setExpandedItem] = useState(null);

  const menuItems = useMemo(() => navigationMenu.items, []);

  useEffect(() => {
    if (!isOpen) {
      setExpandedItem(null);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 overflow-y-auto bg-[#111] text-white"
        >
          <div className="pointer-events-none fixed inset-y-0 right-0 hidden w-[58vw] opacity-[0.13] md:block">
            <img
              src={siteMeta.logoImage}
              alt=""
              className="h-full w-full scale-125 object-contain object-center"
            />
          </div>
          <div className="pointer-events-none fixed bottom-8 right-8 hidden h-24 w-24 overflow-hidden rounded-full bg-white/90 p-3 shadow-2xl shadow-black/40 md:block md:h-36 md:w-36 md:p-4">
            <img
              src={siteMeta.logoImage}
              alt=""
              className="h-full w-full rounded-full object-contain"
            />
          </div>

          <div className="relative flex min-h-screen flex-col px-5 py-8 md:px-16 md:py-12">
            <div className="mb-12 flex items-center justify-between md:mb-16">
              <a
                href={siteMeta.phoneHref}
                className="inline-flex items-center gap-4 text-[#f4bd35] transition-colors hover:text-white"
              >
                <Phone size={20} />
                <span className="text-sm font-black uppercase tracking-[0.18em] md:text-base">
                  {siteMeta.phoneDisplay}
                </span>
              </a>
              <button
                onClick={onClose}
                className="text-[#f4bd35] transition-colors hover:text-white"
                aria-label="Fermer le menu"
              >
                <X size={46} strokeWidth={1.5} />
              </button>
            </div>

            <div className="w-full max-w-5xl flex-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="relative"
              >
                <div className="divide-y divide-white/45 border-y border-white/45">
                  {menuItems.map((item, index) => {
                    const hasChildren = Boolean(item.children?.length);
                    const isItemExpanded = expandedItem === item.href;

                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.05 + index * 0.03 }}
                        className="py-7 md:py-9"
                      >
                        {hasChildren ? (
                          <button
                            type="button"
                            onClick={() => setExpandedItem(isItemExpanded ? null : item.href)}
                            aria-expanded={isItemExpanded}
                            className="group flex w-full items-center justify-between gap-6 text-left"
                          >
                            <span className="text-4xl font-black uppercase tracking-normal text-[#fff8ea] transition-colors group-hover:text-[#f4bd35] md:text-6xl">
                              {item.label}
                            </span>
                            <span className={`flex h-12 w-12 shrink-0 items-center justify-center text-[#f4bd35] transition-transform md:h-16 md:w-16 ${isItemExpanded ? "rotate-45" : "group-hover:translate-x-2 group-hover:translate-y-2"}`}>
                              <ArrowDownRight size={44} strokeWidth={1.8} />
                            </span>
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="group flex items-center justify-between gap-6 text-left"
                          >
                            <span className="text-4xl font-black uppercase tracking-normal text-[#fff8ea] transition-colors group-hover:text-[#f4bd35] md:text-6xl">
                              {item.label}
                            </span>
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center text-[#f4bd35] transition-transform group-hover:translate-x-2 group-hover:translate-y-2 md:h-16 md:w-16">
                              <ArrowDownRight size={44} strokeWidth={1.8} />
                            </span>
                          </Link>
                        )}

                        <AnimatePresence initial={false}>
                          {hasChildren && isItemExpanded ? (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="mt-5 grid gap-3 pl-3 text-base md:mt-6 md:pl-8 md:text-2xl">
                                {item.children.map((child) => (
                                  <Link
                                    key={typeof child === "string" ? child : child.href}
                                    href={typeof child === "string" ? item.href : child.href}
                                    onClick={onClose}
                                    className="w-fit font-black uppercase tracking-normal text-[#fff8ea] transition-colors hover:text-[#f4bd35]"
                                  >
                                    &gt; {typeof child === "string" ? child : child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="mt-10 max-w-3xl"
              >
                <div className="grid grid-cols-[5rem_1fr] items-center gap-5 md:grid-cols-[8rem_1fr] md:gap-7">
                  <div className="overflow-hidden rounded-full bg-white p-2">
                    <img
                      src={siteMeta.logoImage}
                      alt="Logo Taxi du Môle"
                      className="h-16 w-full rounded-full object-contain md:h-28"
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.32em] text-white/40">
                      Taxi Bonneville - Haute-Savoie
                    </p>
                    <a
                      href={siteMeta.phoneHref}
                      className="text-2xl font-black uppercase tracking-normal text-[#fff8ea] transition-colors hover:text-[#f4bd35] md:text-4xl"
                    >
                      Appeler Maintenant
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
