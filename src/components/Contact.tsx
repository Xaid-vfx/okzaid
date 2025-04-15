'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold mb-6">say hello on x dot com</h2>
                    <div className="flex justify-center gap-8">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                            Twitter
                        </motion.a>
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
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 