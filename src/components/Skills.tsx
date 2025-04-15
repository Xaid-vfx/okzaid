'use client';

import { motion } from 'framer-motion';

const BuildingCard = ({ title, description, level, image, type }: {
    title: string;
    description: string;
    level: number;
    image: string;
    type: 'gold' | 'elixir' | 'dark';
}) => {
    const colors = {
        gold: 'from-[#FFD700] to-[#FFA500]',
        elixir: 'from-[#FF00FF] to-[#800080]',
        dark: 'from-[#4B0082] to-[#000000]'
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="relative bg-[#8B4513]/20 rounded-lg p-6 backdrop-blur-sm border border-[#FFD700]/20"
        >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors[type]}`} />
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#FFD700]/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-[#FFD700]">{level}</span>
                </div>
                <h3 className="text-xl font-bold gradient-text">{title}</h3>
            </div>
            <p className="text-gray-400">{description}</p>
        </motion.div>
    );
};

const Skills = () => {
    const buildings = [
        {
            title: 'Spring Boot',
            description: 'Building robust backend services and microservices architecture.',
            level: 5,
            image: '/building-spring.png',
            type: 'gold' as const
        },
        {
            title: 'AWS',
            description: 'Cloud infrastructure and serverless architecture development.',
            level: 4,
            image: '/building-aws.png',
            type: 'elixir' as const
        },
        {
            title: 'Next.js',
            description: 'Modern web applications with server-side rendering.',
            level: 4,
            image: '/building-next.png',
            type: 'gold' as const
        },
        {
            title: 'TypeScript',
            description: 'Type-safe JavaScript development.',
            level: 4,
            image: '/building-ts.png',
            type: 'elixir' as const
        },
        {
            title: 'Docker',
            description: 'Containerization and deployment automation.',
            level: 3,
            image: '/building-docker.png',
            type: 'dark' as const
        },
        {
            title: 'PostgreSQL',
            description: 'Database design and optimization.',
            level: 3,
            image: '/building-pg.png',
            type: 'gold' as const
        }
    ];

    return (
        <section className="py-16 sm:py-24 relative">
            {/* Builder's Hut Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 right-10 w-12 h-12 bg-[url('/gold.png')] bg-contain bg-no-repeat float-animation" />
                <div className="absolute bottom-20 left-20 w-12 h-12 bg-[url('/elixir.png')] bg-contain bg-no-repeat float-animation" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-20 left-1/4 w-12 h-12 bg-[url('/dark.png')] bg-contain bg-no-repeat float-animation" style={{ animationDelay: '1s' }} />

                {/* Builder's Hut Background */}
                <div className="absolute inset-0 bg-[url('/hut-bg.png')] bg-cover bg-center opacity-10" />
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
                        <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-4">Builder's Hut</h2>
                        <p className="text-gray-400">Upgrade your skills and build powerful applications</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {buildings.map((building, index) => (
                            <BuildingCard key={index} {...building} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills; 