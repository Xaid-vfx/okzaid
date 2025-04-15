'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const WoodenSign = ({ text, href, position }: {
    text: string;
    href: string;
    position: string;
}) => {
    return (
        <Link href={href}>
            <motion.div
                className={`absolute ${position} cursor-pointer transform-gpu`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="relative w-48 h-24">
                    <Image
                        src="/wooden-sign.png"
                        alt="Wooden Sign"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#FFD700] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                            {text}
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

const Building = ({ type, position, scale = 1 }: {
    type: 'townhall' | 'laboratory' | 'barracks' | 'castle' | 'campfire';
    position: string;
    scale?: number;
}) => {
    const buildingImages = {
        townhall: '/buildings/townhall.png',
        laboratory: '/buildings/laboratory.png',
        barracks: '/buildings/barracks.png',
        castle: '/buildings/castle.png',
        campfire: '/buildings/campfire.png'
    };

    return (
        <motion.div
            className={`absolute ${position} cursor-pointer transform-gpu`}
            whileHover={{ scale: scale * 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className={`relative w-32 h-32 scale-${scale}`}>
                <Image
                    src={buildingImages[type]}
                    alt={type}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </motion.div>
    );
};

const Village = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#4CAF50]">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grass-texture.png')] bg-repeat opacity-20" />

            {/* Trees and Rocks */}
            <div className="absolute top-10 left-10">
                <Image src="/decorations/tree1.png" alt="Tree" width={64} height={64} />
            </div>
            <div className="absolute top-20 right-20">
                <Image src="/decorations/tree2.png" alt="Tree" width={64} height={64} />
            </div>
            <div className="absolute bottom-40 left-40">
                <Image src="/decorations/rock1.png" alt="Rock" width={32} height={32} />
            </div>
            <div className="absolute top-40 right-40">
                <Image src="/decorations/rock2.png" alt="Rock" width={32} height={32} />
            </div>

            {/* Title */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-[#FFD700] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Chief Zaid's Dev Village
                </h1>
                <p className="text-xl text-white mt-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Building back-end and front-end adversities alike with my fearless coding
                </p>
            </motion.div>

            {/* Buildings */}
            <Building type="townhall" position="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" scale={1.5} />
            <Building type="laboratory" position="top-1/3 right-1/4" />
            <Building type="barracks" position="bottom-1/3 left-1/4" />
            <Building type="castle" position="bottom-1/4 right-1/3" />
            <Building type="campfire" position="top-2/3 left-1/3" />

            {/* Navigation Signs */}
            <WoodenSign text="ABOUT" href="/about" position="bottom-32 left-20" />
            <WoodenSign text="SKILLS" href="/skills" position="bottom-32 left-1/2 transform -translate-x-1/2" />
            <WoodenSign text="PROJECTS" href="/projects" position="bottom-32 right-20" />
            <WoodenSign text="CONTACT" href="/contact" position="top-32 right-20" />
            <WoodenSign text="EXPERIENCE" href="/experience" position="top-32 left-20" />

            {/* Animated Troops */}
            <motion.div
                animate={{ x: [0, 100, 0], y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-1/4 right-1/4"
            >
                <Image src="/troops/barbarian.png" alt="Barbarian" width={48} height={48} />
            </motion.div>
            <motion.div
                animate={{ x: [0, -100, 0], y: [0, -30, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute top-1/3 left-1/3"
            >
                <Image src="/troops/archer.png" alt="Archer" width={48} height={48} />
            </motion.div>

            {/* Resource Animations */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-20 right-1/4"
            >
                <Image src="/resources/elixir.png" alt="Elixir" width={32} height={32} />
            </motion.div>
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-40 left-1/4"
            >
                <Image src="/resources/gold.png" alt="Gold" width={32} height={32} />
            </motion.div>
        </div>
    );
};

export default Village; 