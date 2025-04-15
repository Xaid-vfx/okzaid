'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const TreasureChest = ({ title, description, type, level }: {
    title: string;
    description: string;
    type: 'gold' | 'elixir' | 'dark';
    level: number;
}) => {
    const colors = {
        gold: 'from-[#FFD700] to-[#FFA500]',
        elixir: 'from-[#FF00FF] to-[#800080]',
        dark: 'from-[#4B0082] to-[#000000]'
    };

    const chestImages = {
        gold: '/chest-gold.png',
        elixir: '/chest-elixir.png',
        dark: '/chest-dark.png'
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative bg-[#8B4513]/20 rounded-lg p-6 backdrop-blur-sm border border-[#FFD700]/20"
        >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors[type]}`} />
            <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 relative">
                    <Image
                        src={chestImages[type]}
                        alt={`${type} chest`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFD700]/20 rounded-full flex items-center justify-center">
                        <span className="text-lg text-[#FFD700]">{level}</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold gradient-text">{title}</h3>
                    <p className="text-gray-400">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Achievement = () => {
    const achievements = [
        {
            title: 'Coding Champion',
            description: 'Solved 250+ coding problems on LeetCode and Codeforces',
            type: 'gold' as const,
            level: 5
        },
        {
            title: 'Open Source Hero',
            description: 'Active contributor to multiple open source projects',
            type: 'elixir' as const,
            level: 4
        },
        {
            title: 'Microservices Master',
            description: 'Built scalable microservices architecture with Spring Boot',
            type: 'dark' as const,
            level: 5
        },
        {
            title: 'Cloud Architect',
            description: 'Designed and deployed cloud infrastructure on AWS',
            type: 'gold' as const,
            level: 4
        },
        {
            title: 'Web Wizard',
            description: 'Developed modern web applications with Next.js',
            type: 'elixir' as const,
            level: 4
        },
        {
            title: 'Database Expert',
            description: 'Optimized PostgreSQL databases for high performance',
            type: 'dark' as const,
            level: 3
        }
    ];

    return (
        <section className="py-16 sm:py-24 relative">
            {/* Treasury Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 right-10 w-12 h-12 bg-[url('/gold.png')] bg-contain bg-no-repeat float-animation" />
                <div className="absolute bottom-20 left-20 w-12 h-12 bg-[url('/elixir.png')] bg-contain bg-no-repeat float-animation" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-20 left-1/4 w-12 h-12 bg-[url('/dark.png')] bg-contain bg-no-repeat float-animation" style={{ animationDelay: '1s' }} />

                {/* Treasure Piles */}
                <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-[url('/treasure-pile.png')] bg-contain bg-no-repeat sparkle-animation" />
                <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-[url('/treasure-pile.png')] bg-contain bg-no-repeat sparkle-animation" style={{ animationDelay: '1s' }} />

                {/* Treasury Background */}
                <div className="absolute inset-0 bg-[url('/treasury-bg.png')] bg-cover bg-center opacity-10" />
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
                        <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-4">Treasury</h2>
                        <p className="text-gray-400">Your collection of achievements and treasures</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {achievements.map((achievement, index) => (
                            <TreasureChest key={index} {...achievement} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievement; 