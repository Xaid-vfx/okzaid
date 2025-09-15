'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const blogs = [
    { slug: 'invisible-currency', title: 'The Invisible Currency', summary: 'Micro tradeoffs, macro difference', date: '2025-09-15' },
    { slug: 'purpose-vs-absurdity', title: 'Purpose vs Absurdity', summary: 'Can you find purpose in absurdity?', date: '2025-06-20' },
    { slug: 'poke-life', title: 'Poke Life', summary: 'Life can be much broader.', date: '2025-07-04' },
    { slug: 'the-art-of-letting-go', title: 'The Art of Letting Go', summary: 'What exactly is life?', date: '2025-06-26' },
    { slug: 'rationality-vs-delusion', title: 'Rationality vs Delusion', summary: 'The ultimate mindfuck', date: '2025-07-19' },
    { slug: 'zoomin-or-zoomout', title: 'Zoom In or Zoom Out', summary: 'The art of switching perspectives.', date: '2025-07-30' },
];

// Sort blogs by date descending (most recent first)
const sortedBlogs = blogs.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function BlogsPage() {
    const router = useRouter();
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="max-w-2xl mx-auto py-6 sm:py-12 px-2 sm:px-4"
        >
            <h1 className="text-xl sm:text-2xl font-bold mb-6 text-neutral-200 font-mono">/blogs</h1>
            <ul className="space-y-6">
                {sortedBlogs.map((blog, i) => (
                    <motion.li
                        key={blog.slug}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.06 * i, duration: 0.28 }}
                        className="bg-transparent p-0 cursor-pointer group text-left"
                        onClick={() => {
                            router.push(`/blogs/${blog.slug}`);
                        }}
                    >
                        <span className="text-base sm:text-lg font-mono text-neutral-300 group-hover:text-emerald-400 group-hover:underline transition-colors">
                            {blog.title}
                        </span>
                        <p className="text-neutral-400 text-xs sm:text-sm mt-1 font-mono">
                            {blog.summary}
                        </p>
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    );
} 