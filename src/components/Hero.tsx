'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { BiHomeAlt } from 'react-icons/bi';
import { BsMoonStars } from 'react-icons/bs';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        Hey, I&apos;m <span className="text-gradient">Mohd Zaid</span> 👋
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8">
                        Full Stack Developer & Open Source Contributor
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12">
                        I specialize in building scalable web applications and microservices. With experience in Spring Boot, AWS,
                        Next.js, and various modern technologies, I create efficient solutions that make a real impact.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
                        <Link
                            href="#contact"
                            className="bg-gradient text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
                        >
                            Available for Hire
                        </Link>
                        <Link
                            href="mailto:mohdzaid.work@gmail.com"
                            className="bg-card text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-center"
                        >
                            Email Me
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                        <div className="flex items-center gap-4">
                            <Link href="/" className="social-link">
                                <BiHomeAlt size={20} />
                            </Link>
                            <Link href="https://github.com/xaid-vfx" className="social-link">
                                <FaGithub size={20} />
                            </Link>
                            <Link href="https://linkedin.com/in/mohdzaid" className="social-link">
                                <FaLinkedin size={20} />
                            </Link>
                            <Link href="mailto:mohdzaid.work@gmail.com" className="social-link">
                                <FaEnvelope size={20} />
                            </Link>
                        </div>
                        <div className="hidden sm:block h-8 w-[1px] bg-white/20" />
                        <div className="social-link">
                            <BsMoonStars size={20} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero; 