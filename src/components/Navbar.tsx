'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle = {
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none'
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full z-50 transition-all duration-300"
            style={navStyle}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-xl font-bold text-white flex items-center gap-2"
                    >
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#a855f7' }}></span>
                        LEGION
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="#about"
                            className="text-[#9ca3af] hover:text-white transition-colors"
                        >
                            About
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="#projects"
                            className="text-[#9ca3af] hover:text-white transition-colors"
                        >
                            Projects
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="#contact"
                            className="text-[#9ca3af] hover:text-white transition-colors"
                        >
                            Contact
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-4 py-2 border rounded-lg text-white font-medium transition-colors"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(8px)',
                                borderColor: 'rgba(255, 255, 255, 0.2)'
                            }}
                        >
                            Hire Me
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {mobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute left-0 right-0 p-4"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.95)',
                            backdropFilter: 'blur(16px)'
                        }}
                    >
                        <div className="flex flex-col space-y-4">
                            <a
                                href="#about"
                                className="text-[#9ca3af] hover:text-white transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                className="text-[#9ca3af] hover:text-white transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Projects
                            </a>
                            <a
                                href="#contact"
                                className="text-[#9ca3af] hover:text-white transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </a>
                            <a
                                href="#contact"
                                className="px-4 py-2 border rounded-lg text-white font-medium text-center transition-colors"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(8px)',
                                    borderColor: 'rgba(255, 255, 255, 0.2)'
                                }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
} 