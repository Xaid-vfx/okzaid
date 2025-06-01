'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Background from '@/components/Background';

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    link: "#"
  },
  // Add more projects as needed
];

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
                      <h2 className="text-2xl font-extralight tracking-tight">
                        {project.title}
                      </h2>
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
        </div>
      </main>
    </>
  );
} 