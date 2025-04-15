'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                            Your Name
                        </h3>
                        <p className="text-gray-400">
                            Full Stack Developer & Creative Designer
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <motion.a
                                    whileHover={{ x: 5 }}
                                    href="#about"
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    About
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    whileHover={{ x: 5 }}
                                    href="#projects"
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    Projects
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    whileHover={{ x: 5 }}
                                    href="#contact"
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    Contact
                                </motion.a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
                        <div className="flex space-x-4">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                GitHub
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                LinkedIn
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                Twitter
                            </motion.a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-400">
                        © {currentYear} Your Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
} 