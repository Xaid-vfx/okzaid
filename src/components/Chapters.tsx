'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Chapters = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-transparent text-white px-4 sm:px-6 py-12 sm:py-24">
            <div className="w-full max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-8 sm:space-y-12"
                >
                    <div className="space-y-1 text-center mb-12 sm:mb-16">
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

                    <div className="space-y-8 sm:space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredIndex(0)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative group"
                        >
                            <div className="grid grid-cols-12 gap-4 sm:gap-6 items-start group-hover:bg-white/5 p-6 sm:p-8 rounded-lg transition-all duration-300">
                                <div className="col-span-12 sm:col-span-2">
                                    <p className="text-gray-400 font-mono text-sm whitespace-nowrap">Sept '24 →</p>
                                </div>
                                
                                <div className="col-span-12 sm:col-span-10">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-white font-medium text-lg">Full Stack Engineer</h3>
                                            <p className="text-gray-400 text-sm">IG Group</p>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                • Migrated Spring Boot applications to AWS, achieving 70% cost reduction and 99.99% uptime
                                                <br />
                                                • Engineered real-time data sync with Kafka, reducing manual effort by 80%
                                                <br />
                                                • Built Spring Boot microservices processing 10K+ messages/minute
                                                <br />
                                                • Used TDD, wrote unit, functional, acceptance and performance tests
                                                <br />
                                                • Developed React components improving page load times by 30%
                                                <br />
                                                • Won first prize in AWS GameDay
                                            </p>
                                            
                                            <div className="flex flex-wrap gap-2">
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    Java
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    Spring Boot
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    Kafka
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    AWS
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    Terraform
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    Nomad
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    React
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    TypeScript
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute left-[8.33%] sm:left-[8.33%] top-full h-6 sm:h-8 w-px bg-gray-800" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredIndex(1)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative group"
                        >
                            <div className="grid grid-cols-12 gap-4 sm:gap-6 items-start group-hover:bg-white/5 p-6 sm:p-8 rounded-lg transition-all duration-300">
                                <div className="col-span-12 sm:col-span-2">
                                    <p className="text-gray-400 font-mono text-sm whitespace-nowrap">'22 →</p>
                                </div>
                                
                                <div className="col-span-12 sm:col-span-10">
                                    <div className="space-y-4">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                            <div>
                                                <h3 className="text-white font-medium text-lg">Co-founder</h3>
                                                <p className="text-gray-400 text-sm">Bloom</p>
                                            </div>
                                            <a 
                                                href="https://bloom.africa" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-xs font-mono px-3 py-1.5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 flex items-center gap-1.5 w-fit"
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
                                                    className="opacity-50"
                                                >
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                    <polyline points="15 3 21 3 21 9" />
                                                    <line x1="10" y1="14" x2="21" y2="3" />
                                                </svg>
                                            </a>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                • Built and launched an apprenticeship marketplace connecting 400+ trainers and apprentices across Africa
                                                <br />
                                                • Led full-stack development, shipping 30K+ lines of code across frontend, backend, and DevOps
                                                <br />
                                                • Implemented secure payment processing and real-time communication features
                                                <br />
                                                • Managed end-to-end product development from ideation to deployment
                                            </p>
                                            
                                            <div className="flex flex-wrap gap-2">
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    Next.js
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    TypeScript
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    PostgreSQL
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    React
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    Docker
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    Supabase
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    Tailwind
                                                </span>
                                                <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded">
                                                    Paystack
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <p className="text-gray-500 text-sm font-mono">
                                {'>'} and many more ...
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Chapters;