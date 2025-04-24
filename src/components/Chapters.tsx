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
        <section className="relative min-h-screen flex items-center justify-center bg-transparent text-white px-4 sm:px-6 py-12 sm:py-24 overflow-hidden">
            <div className="w-full max-w-5xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-8 sm:space-y-12"
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


                        <div className="space-y-4 sm:space-y-2 relative z-10">
                            {/* Full Stack Engineer */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="grid grid-cols-12 gap-4 sm:gap-6 items-start group-hover:bg-white/5 p-6 sm:p-8 rounded-lg transition-all duration-300">
                                    <div className="col-span-12 sm:col-span-2">
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            viewport={{ once: true }}
                                            className="text-gray-400 font-mono text-sm whitespace-nowrap"
                                        >
                                            Sept &apos;24 →
                                        </motion.p>
                                    </div>

                                    <div className="col-span-12 sm:col-span-10">
                                        <div className="space-y-4">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                viewport={{ once: true }}
                                            >
                                                <h3 className="text-white font-medium text-lg">Full Stack Engineer</h3>
                                                <p className="text-gray-400 text-sm">IG Group</p>
                                            </motion.div>

                                            <motion.div
                                                className="flex flex-wrap gap-2"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                                viewport={{ once: true }}
                                            >
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    Java
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    Spring Boot
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    Kafka
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    AWS
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    Terraform
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    Nomad
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    React
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    TypeScript
                                                </span>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Co-founder */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="grid grid-cols-12 gap-4 sm:gap-6 items-start group-hover:bg-white/5 p-6 sm:p-8 rounded-lg transition-all duration-300">
                                    <div className="col-span-12 sm:col-span-2">
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            viewport={{ once: true }}
                                            className="text-gray-400 font-mono text-sm whitespace-nowrap"
                                        >
                                            &apos;23 →
                                        </motion.p>
                                    </div>

                                    <div className="col-span-12 sm:col-span-10">
                                        <div className="space-y-4">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                viewport={{ once: true }}
                                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                                            >
                                                <div>
                                                    <h3 className="text-white font-medium text-lg">Co-founder</h3>
                                                    <p className="text-gray-400 text-sm">Bloom</p>
                                                </div>
                                                <motion.a
                                                    href="https://bloom.africa"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs font-mono px-3 py-1.5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 flex items-center gap-1.5 w-fit group/visit"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Visit
                                                    <svg
                                                        width="12"
                                                        height="12"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="opacity-50 group-hover/visit:translate-x-0.5 transition-transform duration-200"
                                                    >
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                        <polyline points="15 3 21 3 21 9" />
                                                        <line x1="10" y1="14" x2="21" y2="3" />
                                                    </svg>
                                                </motion.a>
                                            </motion.div>

                                            <motion.div
                                                className="flex flex-wrap gap-2"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                                viewport={{ once: true }}
                                            >
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    Next.js
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    TypeScript
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    PostgreSQL
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    React
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    Docker
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    Supabase
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    Tailwind
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    Paystack
                                                </span>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Software Engineer Intern */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="grid grid-cols-12 gap-4 sm:gap-6 items-start group-hover:bg-white/5 p-6 sm:p-8 rounded-lg transition-all duration-300">
                                    <div className="col-span-12 sm:col-span-2">
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            viewport={{ once: true }}
                                            className="text-gray-400 font-mono text-sm whitespace-nowrap"
                                        >
                                            &apos;23 →
                                        </motion.p>
                                    </div>

                                    <div className="col-span-12 sm:col-span-10">
                                        <div className="space-y-4">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                viewport={{ once: true }}
                                            >
                                                <h3 className="text-white font-medium text-lg">Software Engineer Intern</h3>
                                                <p className="text-gray-400 text-sm">Graviti</p>
                                            </motion.div>

                                            <motion.div
                                                className="flex flex-wrap gap-2"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                                viewport={{ once: true }}
                                            >
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    Next.js
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    React
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    TypeScript
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    CSS
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    Node.js
                                                </span>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Open Source Contributor */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="grid grid-cols-12 gap-4 sm:gap-6 items-start group-hover:bg-white/5 p-6 sm:p-8 rounded-lg transition-all duration-300">
                                    <div className="col-span-12 sm:col-span-2">
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            viewport={{ once: true }}
                                            className="text-gray-400 font-mono text-sm whitespace-nowrap"
                                        >
                                            &apos;22 →
                                        </motion.p>
                                    </div>

                                    <div className="col-span-12 sm:col-span-10">
                                        <div className="space-y-4">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                viewport={{ once: true }}
                                            >
                                                <h3 className="text-white font-medium text-lg">Open Source Contributor</h3>
                                                <p className="text-gray-400 text-sm">Creative Commons</p>
                                            </motion.div>

                                            <motion.div
                                                className="flex flex-wrap gap-2"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                                viewport={{ once: true }}
                                            >
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    Docker
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    JavaScript
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    HTML
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                                                    CSS
                                                </span>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="text-gray-400 text-sm font-mono text-center">and many more ..</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Chapters;