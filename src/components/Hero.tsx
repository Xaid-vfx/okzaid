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

const MatrixText = ({ text }: { text: string }) => {
    const [scrambled, setScrambled] = useState(text);

    useEffect(() => {
        const chars = '01';
        let interval = setInterval(() => {
            setScrambled(prev =>
                prev.split('').map((char, i) =>
                    Math.random() > 0.8 ? chars[Math.floor(Math.random() * chars.length)] : text[i]
                ).join('')
            );
        }, 50);

        return () => clearInterval(interval);
    }, [text]);

    return <span className="text-green-400/30 font-mono">{scrambled}</span>;
};

const CommandLine = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
    <motion.p
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.3 }}
        className="text-gray-400"
    >
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1] }}
            transition={{ delay, duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
            className="text-white/50"
        >
            $
        </motion.span>
        {" "}{children}
    </motion.p>
);

const OutputLine = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
    <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.3 }}
        className="text-gray-400 pl-2 py-1"
    >
        {children}
    </motion.p>
);

const Hero: NextPage = () => {
    return (
        <>
            <Background />
            <section className="relative flex items-center justify-center bg-transparent text-white px-3 py-8 sm:px-6 sm:py-16">
                <div className="w-full max-w-xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 sm:space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="p-3 sm:p-6 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm"
                            whileHover={{ boxShadow: "0 0 20px rgba(255,255,255,0.05)" }}
                        >
                            {/* Terminal header */}
                            <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-2 border-b border-white/10">
                                <span className="flex gap-1.5">
                                    <motion.span
                                        className="h-2 w-2 rounded-full bg-red-500/50"
                                        whileHover={{ scale: 1.2, opacity: 0.8 }}
                                    />
                                    <motion.span
                                        className="h-2 w-2 rounded-full bg-yellow-500/50"
                                        whileHover={{ scale: 1.2, opacity: 0.8 }}
                                    />
                                    <motion.span
                                        className="h-2 w-2 rounded-full bg-green-500/50"
                                        whileHover={{ scale: 1.2, opacity: 0.8 }}
                                    />
                                </span>
                                <motion.span
                                    className="text-[10px] sm:text-xs text-white/30 font-mono"
                                    whileHover={{ opacity: 0.5 }}
                                >
                                    ~/zaid
                                </motion.span>
                            </div>

                            {/* Terminal content */}
                            <div className="font-mono text-xs sm:text-sm space-y-2">
                                <CommandLine delay={0.2}>whoami</CommandLine>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-lg sm:text-xl font-bold tracking-wide"
                                >
                                    <TypewriterText text="ZAID" />
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="text-gray-400 pb-2"
                                >
                                    <motion.span
                                        animate={{ opacity: [1, 0.7, 1] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        Engineering Reality from Ideas
                                    </motion.span>
                                    <motion.span
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 5, 0]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="inline-block ml-1"
                                    >
                                        ⚡
                                    </motion.span>
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="pt-2 border-t border-white/5"
                                >
                                    <CommandLine delay={0.9}>cat about.txt</CommandLine>
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        transition={{ delay: 1, duration: 0.5 }}
                                        className="overflow-hidden"
                                    >
                                        <OutputLine delay={1.1}>
                                            <span className="text-emerald-400/80">{">"}</span> into startups, business, tech and shitposting
                                        </OutputLine>
                                        <OutputLine delay={1.2}>
                                            <span className="text-emerald-400/80">{">"}</span> I raid servers like I raid COC bases
                                        </OutputLine>
                                        <OutputLine delay={1.3}>
                                            <span className="text-emerald-400/80">{">"}</span> if it can be imagined, <span className="text-white/90">I can probably build it</span>
                                        </OutputLine>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.4 }}
                                    className="pt-2 border-t border-white/5"
                                >
                                    <CommandLine delay={1.5}>ls skills/</CommandLine>
                                    <motion.div
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 1.6, duration: 0.3 }}
                                        className="pl-2 text-gray-400"
                                    >
                                        <motion.span
                                            animate={{
                                                opacity: [0.7, 1],
                                                x: [0, 1, 0]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="inline-block"
                                        >
                                            this mf can do anything and everything
                                        </motion.span>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.7 }}
                                    className="pt-2 border-t border-white/5"
                                >
                                    <CommandLine delay={1.8}>contact</CommandLine>
                                    <motion.div
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 1.9 }}
                                        className="pl-2 flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1"
                                    >
                                        <Link
                                            href="mailto:mohdzaid.work@gmail.com"
                                            className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-0.5"
                                        >
                                            [1] Get in Touch
                                        </Link>
                                    </motion.div>
                                </motion.div>

                                {/* Improved cursor animation */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2 }}
                                    className="pt-2"
                                >
                                    <motion.span
                                        animate={{
                                            opacity: [1, 0],
                                            x: [0, 0.5, 0]
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                        className="text-white/50 text-xs"
                                    >
                                        ▋
                                    </motion.span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Hero; 