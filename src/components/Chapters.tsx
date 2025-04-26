'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Chapters = () => {
    const pathRef = useRef<SVGPathElement>(null);
    const cursorRef = useRef<SVGCircleElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const path = pathRef.current;
        const cursor = cursorRef.current;
        const heading = headingRef.current;

        if (!path || !cursor || !heading) return;

        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = `${pathLength}`;
        path.style.strokeDashoffset = `${pathLength}`;

        const handleScroll = () => {
            const headingRect = heading.getBoundingClientRect();
            const headingMiddle = headingRect.top + headingRect.height / 2;
            const viewportMiddle = window.innerHeight / 2;

            // Only start animation when heading reaches middle of viewport
            if (headingMiddle > viewportMiddle) {
                path.style.strokeDashoffset = `${pathLength}`;
                return;
            }

            const scrollTop = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = Math.min(1, Math.max(0, (scrollTop - (headingRect.top + headingRect.height)) / maxScroll));

            // Animate path drawing
            path.style.strokeDashoffset = `${pathLength * (1 - scrollPercent)}`;

            // Move cursor along path
            const point = path.getPointAtLength(pathLength * scrollPercent);
            cursor.setAttribute("cx", point.x.toString());
            cursor.setAttribute("cy", point.y.toString());
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative flex items-center justify-center bg-transparent text-white px-3 py-8 sm:px-6 sm:py-16">
            <div className="w-full max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-4 sm:space-y-8"
                >
                    <div ref={headingRef} className="space-y-1 text-center mb-12 sm:mb-16 relative">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-gray-400 text-sm font-mono"
                        >
                            {'>'} cd ./chapters
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-2xl sm:text-3xl font-mono font-bold"
                        >
                            Chapters in Code
                        </motion.h2>
                    </div>

                    <div className="relative">
                        <div className="space-y-6 sm:space-y-8 relative z-10">
                            {/* Example for each chapter card */}
                            {[
                                {
                                    date: "Sept '24 →",
                                    title: "Full Stack Engineer",
                                    org: "IG Group",
                                    skills: ["Java", "Spring Boot", "Kafka", "AWS", "Terraform", "Nomad", "React", "TypeScript"],
                                },
                                {
                                    date: "'23 →",
                                    title: "Co-founder",
                                    org: "Bloom",
                                    skills: ["Next.js", "TypeScript", "PostgreSQL", "React", "Docker", "Supabase", "Tailwind", "Paystack"],
                                    link: "https://bloom.africa",
                                },
                            ].map((chapter, idx) => (
                                <motion.div
                                    key={chapter.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm p-3 sm:p-6"
                                >
                                    {/* Terminal header */}
                                    <div className="flex items-center gap-1.5 px-2 sm:px-3 py-2 border-b border-white/10">
                                        <span className="flex gap-1">
                                            <span className="h-2 w-2 rounded-full bg-red-500/50" />
                                            <span className="h-2 w-2 rounded-full bg-yellow-500/50" />
                                            <span className="h-2 w-2 rounded-full bg-green-500/50" />
                                        </span>
                                        <span className="text-[10px] sm:text-xs text-white/30 font-mono ml-1">
                                            ~/chapters/{chapter.title.toLowerCase().replace(/\s/g, '-')}
                                        </span>
                                    </div>
                                    {/* Terminal content */}
                                    <div className="px-2 sm:px-3 py-3 sm:py-4 font-mono text-xs sm:text-sm space-y-2">
                                        <div className="flex flex-col items-start sm:flex-row sm:items-center justify-between gap-1">
                                            <span className="text-gray-400 font-mono text-xs whitespace-nowrap">{chapter.date}</span>
                                            {chapter.link ? (
                                                <a
                                                    href={chapter.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs font-mono px-2 py-1 bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 rounded transition-all duration-200"
                                                >
                                                    Visit
                                                </a>
                                            ) : null}
                                        </div>
                                        <div>
                                            <span className="text-white font-medium text-base sm:text-lg">{chapter.title}</span>
                                            <span className="ml-2 text-gray-400 text-xs">{chapter.org}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {chapter.skills.map(skill => (
                                                <span
                                                    key={skill}
                                                    className="text-[10px] sm:text-xs font-mono px-2 py-1 bg-white/10 text-gray-400 rounded hover:bg-white/20 hover:text-white transition-all duration-200"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            <div className="text-gray-400 text-xs sm:text-sm font-mono text-center pt-2">and many more ..</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Chapters;