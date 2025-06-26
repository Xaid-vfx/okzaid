'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const blogs = [
    { slug: 'the-art-of-letting-go', title: 'The Art of Letting Go', summary: 'A poetic meditation on loss, impermanence, and the art of saying goodbye.' },
];

export default function BlogsPage() {
    const [leaving, setLeaving] = useState(false);
    const router = useRouter();
    return (
        <AnimatePresence>
            {!leaving && (
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="max-w-2xl mx-auto py-12 px-4"
                >
                    <h1 className="text-2xl font-bold mb-6 text-white font-mono">/blogs</h1>
                    <ul className="space-y-6">
                        {blogs.map((blog, i) => (
                            <motion.li
                                key={blog.slug}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.06 * i, duration: 0.28 }}
                                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition cursor-pointer"
                                onClick={async () => {
                                    setLeaving(true);
                                    setTimeout(() => router.push(`/blogs/${blog.slug}`), 400);
                                }}
                            >
                                <span className="text-lg font-mono text-emerald-400 hover:underline">
                                    {blog.title}
                                </span>
                                <p className="text-gray-400 text-sm mt-1 font-mono">{blog.summary}</p>
                            </motion.li>
                        ))}
                    </ul>
                </motion.section>
            )}
        </AnimatePresence>
    );
} 