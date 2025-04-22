'use client';

import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Background from './Background';
import { useEffect, useState } from 'react';

const TypewriterText = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return (
        <span className="border-r-2 border-white animate-pulse">
            {displayText}
        </span>
    );
};

const Hero: NextPage = () => {
    return (
        <>
            <Background />
            <section className="relative min-h-screen flex items-center justify-center bg-transparent text-white px-4 py-8 sm:p-4">
                <div className="w-full max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 space-y-1"
                        >
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-400 text-sm font-mono"
                            >
                                {'>'} hello world_
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-2xl sm:text-4xl font-mono font-bold tracking-wider break-words"
                            >
                                <TypewriterText text="MOHD ZAID" />
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-gray-400 text-sm font-mono"
                            >
                                Engineering Reality from Ideas ⚡
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="space-y-4 text-gray-400"
                        >
                            <p className="text-sm sm:text-base leading-relaxed">
                                I live where imagination meets execution. Every project is a chance to turn 
                                <span className="text-white"> bold ideas</span> into 
                                <span className="text-white"> reality</span>. No shortcuts, just pure 
                                engineering craftsmanship.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed">
                                Whether it's scaling on <span className="text-white">AWS</span>, building with 
                                <span className="text-white"> AI</span>, or diving into uncharted tech — 
                                I'm in my element. Because great software isn't just about code, 
                                it's about pushing boundaries. 
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col sm:flex-row items-center gap-3 mt-8 font-mono"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto"
                            >
                                <Link
                                    href="/contact"
                                    className="block w-full bg-white/5 hover:bg-white/10 px-6 py-3 rounded-lg transition-all duration-300 text-xs sm:text-sm text-center backdrop-blur-sm border border-white/10"
                                >
                                    Start a Project
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto"
                            >
                                <Link
                                    href="mailto:mohdzaid.work@gmail.com"
                                    className="block w-full bg-white/5 hover:bg-white/10 px-6 py-3 rounded-lg transition-all duration-300 text-xs sm:text-sm text-center backdrop-blur-sm border border-white/10"
                                >
                                    Get in Touch
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="pt-8 text-center"
                        >
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="inline-block text-gray-400"
                            >
                                <svg 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 20 20" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="opacity-50"
                                >
                                    <path 
                                        d="M10 15L4 9L5.4 7.6L10 12.2L14.6 7.6L16 9L10 15Z" 
                                        fill="currentColor"
                                    />
                                </svg>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Hero; 