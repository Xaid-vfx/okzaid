'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle = {
        background: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 215, 0, 0.2)' : 'none',
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50"
            style={navStyle}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <Link href="/" className="flex items-center">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FF00FF] blur-lg opacity-30" />
                            <span className="text-xl sm:text-2xl font-bold gradient-text relative">
                                Clan Castle
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex items-center space-x-8">
                        <Link
                            href="#about"
                            className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300"
                        >
                            Laboratory
                        </Link>
                        <Link
                            href="#projects"
                            className="text-gray-400 hover:text-[#FF00FF] transition-colors duration-300"
                        >
                            Army Camp
                        </Link>
                        <Link
                            href="#contact"
                            className="px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold rounded-lg hover:from-[#FFA500] hover:to-[#FFD700] transition-all duration-300"
                        >
                            Spell Factory
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="sm:hidden p-2 rounded-lg hover:bg-[#FF00FF]/10 transition-colors duration-300"
                    >
                        <div className="w-6 h-0.5 bg-[#FFD700] mb-1.5" />
                        <div className="w-6 h-0.5 bg-[#FF00FF] mb-1.5" />
                        <div className="w-6 h-0.5 bg-[#FFD700]" />
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="sm:hidden py-4"
                    >
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="#about"
                                className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Laboratory
                            </Link>
                            <Link
                                href="#projects"
                                className="text-gray-400 hover:text-[#FF00FF] transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Army Camp
                            </Link>
                            <Link
                                href="#contact"
                                className="px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold rounded-lg hover:from-[#FFA500] hover:to-[#FFD700] transition-all duration-300 text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Spell Factory
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar; 