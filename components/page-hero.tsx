"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  titleHighlight?: string;
}

export default function PageHero({ eyebrow, title, subtitle, titleHighlight }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 px-6 bg-bg-base relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative">
        {eyebrow && (
          <motion.p
            className="text-xs text-accent uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {titleHighlight ? (
            <>
              {title.split(titleHighlight)[0]}
              <span className="text-accent">{titleHighlight}</span>
              {title.split(titleHighlight)[1]}
            </>
          ) : (
            title
          )}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
