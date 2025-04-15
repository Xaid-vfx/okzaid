'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <motion.h1
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl sm:text-6xl font-bold mb-6"
                    >
                        Mohd Zaid
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl sm:text-2xl text-gray-400 mb-6"
                    >
                        Full Stack Developer & Open Source Contributor
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-base sm:text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
                    >
                        Specializing in building scalable web applications and microservices using Spring Boot and AWS.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="mailto:mohdzaid.work@gmail.com"
                            className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300"
                        >
                            Contact Me
                        </Link>
                        <div className="flex gap-4 justify-center">
                            <Link
                                href="https://github.com/xaid-vfx"
                                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                            >
                                <Image src="/github.svg" alt="GitHub" width={24} height={24} />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/mohdzaid"
                                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                            >
                                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero; 