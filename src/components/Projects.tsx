'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const TroopCard = ({ title, description, image, link, tech, type }: {
    title: string;
    description: string;
    image: string;
    link: string;
    tech: string;
    type: 'troop' | 'spell';
}) => {
    return (
        <Link href={link} className="block group">
            <motion.div
                whileHover={{ y: -8 }}
                className={`relative ${type === 'troop' ? 'troop-card' : 'spell-card'} rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm`}
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FF00FF]" />
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
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 gradient-text">{title}</h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {tech.split(', ').map((item, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs bg-[#FF00FF]/10 text-[#FF00FF] rounded-full sparkle-animation"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

const Projects = () => {
    const troops = [
        {
            title: 'Bloom',
            description: 'A comprehensive job portal for apprenticeships and online education across Africa. Features include job posting, application management, candidate dashboards, and real-time chat.',
            image: '/bloom.png',
            link: 'https://bloom.example.com',
            tech: 'Next.js, React.js, PostgreSQL, Supabase, Tailwind, TypeScript, Docker, Paystack',
            type: 'troop' as const
        },
        {
            title: 'ResumeTex',
            description: 'A free no-code platform for creating LaTeX resumes, reducing resume creation time by 70% with a clean UI, live preview, and multiple export formats.',
            image: '/resumetex.png',
            link: 'https://resumetex.example.com',
            tech: 'Next.js, Docker, TypeScript, Tailwind, TexLive, Railway',
            type: 'troop' as const
        }
    ];

    const spells = [
        {
            title: 'Creative Commons',
            description: 'Improved search and filter functionality, enhanced UI/UX for sites with 3.5M+ monthly visits. Multiple PRs merged and active code reviews.',
            image: '/cc.png',
            link: 'https://github.com/creativecommons',
            tech: 'Docker, HTML, CSS, JavaScript, TypeScript, Jekyll',
            type: 'spell' as const
        },
        {
            title: 'Autism Detection System',
            description: 'Research project using machine learning algorithms to diagnose autism in individuals at an early stage across all age groups.',
            image: '/autism.png',
            link: 'https://github.com/xaid-vfx/autism-detection',
            tech: 'Python, Machine Learning, Data Analysis',
            type: 'spell' as const
        }
    ];

    return (
        <section className="py-16 sm:py-24 relative">
            {/* Army Camp Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 right-10 w-12 h-12 bg-[url('/gold.png')] bg-contain bg-no-repeat float-animation" />
                <div className="absolute bottom-20 left-20 w-12 h-12 bg-[url('/elixir.png')] bg-contain bg-no-repeat float-animation" style={{ animationDelay: '0.5s' }} />

                {/* Training Troops */}
                <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-[url('/barbarian.png')] bg-contain bg-no-repeat troop-walk-animation" />
                <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-[url('/archer.png')] bg-contain bg-no-repeat troop-walk-animation" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center mb-16 sm:mb-24"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-4">Army Camp</h2>
                        <p className="text-gray-400">My strongest troops and most powerful spells, ready for battle</p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-16 sm:mb-24">
                        {troops.map((troop, index) => (
                            <TroopCard key={index} {...troop} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-center mb-16 sm:mb-24"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-4">Spell Factory</h2>
                        <p className="text-gray-400">Magical contributions that strengthen the developer community</p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6 sm:gap-8">
                        {spells.map((spell, index) => (
                            <TroopCard key={index} {...spell} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects; 