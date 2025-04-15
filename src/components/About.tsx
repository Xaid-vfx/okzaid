'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ContributionGraph = () => {
    // Generate sample contribution data (you can replace this with real data)
    const generateContributions = () => {
        const contributions = [];
        for (let i = 0; i < 52; i++) {
            const week = [];
            for (let j = 0; j < 7; j++) {
                week.push(Math.floor(Math.random() * 5));
            }
            contributions.push(week);
        }
        return contributions;
    };

    return (
        <div className="overflow-x-auto">
            <div className="flex gap-[2px] min-w-[800px]">
                {generateContributions().map((week, i) => (
                    <div key={i} className="flex flex-col gap-[2px]">
                        {week.map((level, j) => (
                            <div
                                key={`${i}-${j}`}
                                className={`contribution-cell contribution-${level}`}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

const About = () => {
    const experiences = [
        {
            company: 'IG Group',
            role: 'Developer',
            period: 'Sept 2024 – Present',
            description: 'Migrated Spring Boot applications to AWS, developed microservices, and implemented Kafka-based real-time data synchronization.'
        },
        {
            company: 'Bloom',
            role: 'Co-founder',
            period: 'Dec 2023 – Aug 2024',
            description: 'Led product development for apprenticeships platform, shipped 20k+ lines of code, and built partnerships across Africa.'
        },
        {
            company: 'Creative Commons',
            role: 'Open Source Developer',
            period: 'March 2023 – April 2024',
            description: 'Improved search functionality and UI/UX for sites with 3.5M+ monthly visits. Contributed to multiple projects.'
        },
        {
            company: 'Graviti',
            role: 'Full Stack Developer Intern',
            period: 'Oct 2022 – Dec 2022',
            description: 'Developed Live Order Tracking System and PDF viewer used by 100+ Manufacturers and Transporters.'
        }
    ];

    const education = [
        {
            school: 'Nitte Meenakshi Institute of Technology',
            degree: 'Bachelor of Engineering in Computer Science',
            period: 'Aug 2020 – July 2024',
            location: 'Bangalore, India'
        }
    ];

    const skills = [
        'C/C++', 'Java', 'TypeScript', 'GO', 'Python', 'SQL', 'React', 'Node.js',
        'Next.js', 'Docker', 'Git', 'Firebase', 'Linux', 'Spring Boot', 'AWS'
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-16"
                >
                    <div>
                        <h2 className="text-3xl font-bold mb-8">About</h2>
                        <p className="text-gray-400 mb-6">
                            Full Stack Developer with expertise in building scalable web applications and microservices.
                        </p>
                        <p className="text-gray-400 mb-6">
                            Solved 250+ coding problems on platforms like Leetcode, GFG, and Codeforces.
                            Participated in open source programs like LFX, GSOC, GSSOC, and Hacktoberfest.
                        </p>
                        <p className="text-gray-400">
                            Passionate about developing efficient solutions and contributing to open source projects
                            that make a real impact.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-8">Experience</h2>
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div key={index} className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                                        {exp.company.substring(0, 1)}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
                                        <p className="text-gray-400 mb-1">{exp.period}</p>
                                        <p className="text-gray-400 mb-2">{exp.role}</p>
                                        <p className="text-gray-400 text-sm">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-8">Education</h2>
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                                N
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{education[0].school}</h3>
                                <p className="text-gray-400 mb-1">{education[0].period}</p>
                                <p className="text-gray-400 mb-1">{education[0].degree}</p>
                                <p className="text-gray-400">{education[0].location}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-8">Skills</h2>
                        <div className="flex flex-wrap gap-4">
                            {skills.map((skill, index) => (
                                <span key={index} className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About; 