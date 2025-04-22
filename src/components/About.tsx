'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const SkillBar = ({ name, level, maxLevel = 5 }: { name: string; level: number; maxLevel?: number }) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between mb-2">
                <span className="text-[#FFD700]">{name}</span>
                <span className="text-[#FF00FF]">Level {level}/{maxLevel}</span>
            </div>
            <div className="h-4 bg-[#8B4513]/30 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(level / maxLevel) * 100}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full"
                />
            </div>
        </div>
    );
};

const ResearchCard = ({ title, description, level, image }: {
    title: string;
    description: string;
    level: number;
    image: string;
}) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="relative bg-[#8B4513]/20 rounded-lg p-6 backdrop-blur-sm border border-[#FFD700]/20"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FF00FF]" />
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

const About = () => {
    const experiences = [
        {
            title: "Backend Developer",
            company: "Recent Projects",
            period: "Last 2 months",
            description: [
                "Built two SpringBoot microservices applications from scratch for 100k+ users production deployment",
                "Implemented comprehensive testing suite using JUnit, Mockito, Wiremock, and TestContainers",
                "Migrated existing on-prem application to AWS Lambda with DynamoDB integration",
                "Created cloud infrastructure using Terraform modules and established Kafka-based communication between cloud and on-prem services"
            ]
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
        "Java", "Spring Boot", "Kafka", "AWS", "Terraform", "Nomad",
        "Microservices Architecture", "Cloud Migration", "Test-Driven Development",
        "Maven", "JUnit", "Mockito", "Wiremock", "TestContainers",
        "AWS Lambda", "DynamoDB", "Infrastructure as Code"
    ];

    const research = [
        {
            title: 'Microservices Architecture',
            description: 'Research and implementation of scalable microservices using Spring Boot and AWS',
            level: 5,
            image: '/lab-microservices.png'
        },
        {
            title: 'Cloud Computing',
            description: 'Advanced cloud infrastructure design and deployment on AWS.',
            level: 4,
            image: '/lab-cloud.png'
        },
        {
            title: 'Web Development',
            description: 'Modern web application development using Next.js and TypeScript.',
            level: 4,
            image: '/lab-web.png'
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">About Me</h2>
                        <p className="text-gray-400 mb-8">
                            Last 2 months I have worked on really crazy things and trust me the learning curve in these two months is much steeper than last 2 years. Previously focused on frontend development, I've now developed a strong grip on backend architecture and cloud-native solutions.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-6">Recent Experience</h3>
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-8 border border-gray-800 rounded-lg p-6">
                                <h4 className="text-xl font-semibold mb-2">{exp.title} @ {exp.company}</h4>
                                <p className="text-gray-400 mb-4">{exp.period}</p>
                                <ul className="list-disc list-inside text-gray-400 space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                                >
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