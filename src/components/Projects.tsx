'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ title, description, image, link, tech }: {
    title: string;
    description: string;
    image: string;
    link: string;
    tech: string;
}) => {
    return (
        <Link href={link} className="block group">
            <motion.div
                whileHover={{ y: -8 }}
                className="relative bg-card rounded-lg overflow-hidden"
            >
                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                        {description}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">{tech}</p>
                </div>
            </motion.div>
        </Link>
    );
};

const Projects = () => {
    const projects = [
        {
            title: 'Bloom',
            description: 'A comprehensive job portal for apprenticeships and online education across Africa. Features include job posting, application management, candidate dashboards, and real-time chat.',
            image: '/bloom.png',
            link: 'https://bloom.example.com',
            tech: 'Next.js, React.js, PostgreSQL, Supabase, Tailwind, TypeScript, Docker, Paystack'
        },
        {
            title: 'ResumeTex',
            description: 'A free no-code platform for creating LaTeX resumes, reducing resume creation time by 70% with a clean UI, live preview, and multiple export formats.',
            image: '/resumetex.png',
            link: 'https://resumetex.example.com',
            tech: 'Next.js, Docker, TypeScript, Tailwind, TexLive, Railway'
        }
    ];

    const contributions = [
        {
            title: 'Creative Commons',
            description: 'Improved search and filter functionality, enhanced UI/UX for sites with 3.5M+ monthly visits. Multiple PRs merged and active code reviews.',
            image: '/cc.png',
            link: 'https://github.com/creativecommons',
            tech: 'Docker, HTML, CSS, JavaScript, TypeScript, Jekyll'
        },
        {
            title: 'Autism Detection System',
            description: 'Research project using machine learning algorithms to diagnose autism in individuals at an early stage across all age groups.',
            image: '/autism.png',
            link: 'https://github.com/xaid-vfx/autism-detection',
            tech: 'Python, Machine Learning, Data Analysis'
        }
    ];

    return (
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="mb-16 sm:mb-24">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Featured Projects</h2>
                        <div className="grid grid-cols-1 gap-6 sm:gap-8">
                            {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Open Source & Research</h2>
                        <div className="grid grid-cols-1 gap-6 sm:gap-8">
                            {contributions.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects; 