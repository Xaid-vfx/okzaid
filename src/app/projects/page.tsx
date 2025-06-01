'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Background from '@/components/Background';
import { projects } from '@/data/projects';

const letterAnimation = {
  initial: { y: 400 },
  animate: (i: number) => ({
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Projects() {
  return (
    <>
      <Background />
      <main className="relative min-h-screen bg-transparent text-white p-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link 
              href="/"
              className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-2 group"
            >
              <motion.span
                animate={{ x: [0, -2, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </motion.span>
              Back to Home
            </Link>
            <div className="mt-6 overflow-hidden">
              <motion.h1 
                className="text-5xl font-extralight tracking-tighter"
              >
                {Array.from("Projects").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterAnimation}
                    initial="initial"
                    animate="animate"
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-white/60 mt-2 font-extralight tracking-wider"
            >
              A collection of my work and experiments
            </motion.p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    whileHover={{ 
                      x: 2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h2 className="text-2xl font-extralight tracking-tight">
                          {project.title}
                        </h2>
                        {project.date && (
                          <span className="text-[11px] tracking-wider text-white/40">
                            {project.date}
                          </span>
                        )}
                      </div>
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                        className="text-white/40 group-hover:text-white transition-colors"
                      >
                        <path d="M7 7h10v10M7 17V7h10"/>
                      </svg>
                    </div>
                    
                    <p className="text-white/60 font-extralight leading-relaxed mb-3 tracking-wide text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light group-hover:text-white/60 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="h-px bg-white/10 mt-4 group-hover:bg-white/20 transition-colors" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link
              href="https://github.com/xaid-vfx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
            >
              <span className="text-sm font-extralight tracking-[0.2em] uppercase">Find more on</span>
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="group-hover:scale-110 transition-transform"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
} 