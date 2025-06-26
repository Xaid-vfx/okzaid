// app/blog/[slug]/page.tsx

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Background from '../../../components/Background';
import { ArrowLeft } from 'lucide-react'; // A clean icon library

// --- Enhanced Data Structure ---
// Adding metadata like 'date' makes the blog feel more authentic.
const blogContent = {
    'the-art-of-letting-go': {
        title: 'The Art of Letting Go',
        date: 'June 26, 2025',
        content: `In the end,
everything becomes an art of letting go.

The more you sit with it,
the more it starts to make sense
that life, in all its chaos and calm,
is nothing but a lesson in letting go.

When you love someone,
you sink not softly,
but fully, blindly into the warmth of them.
And in that warmth,
you forget the cost of love.

The cost?
The cost of loving someone
is knowing you'll one day have to lose them.
No matter how beautiful,
how perfect,
how peaceful it feels
it ends.

That's life.
That's the truth no one teaches you when you're young.

You will lose your parents.
You will lose your partner.
You will lose the friends who once felt like home.
The people you lived for
gone.

Your rays of hope in the darkest nights
snuffed out.
Your reason for waking up
blurred.

There will come a time when
nothing feels worth it.
Not the work.
Not the waiting.
Not even the living.

But when you're bound to lose everything,
why worry?

Everything you see,
everything you touch,
everything you feel
it's all temporary.
Your memories,
your collections,
your titles,
your own reflection in the mirror
temporary.

And the worst part?
You can't stop any of it.
You can't hold on long enough.

But maybe, just maybe
that's not the worst part.
Maybe that's the best.

Because if everything ends,
then so does pain.
So does grief.
So does the ache in your chest
that keeps you up at 3 a.m.

Yes, you'll lose people.
Yes, you'll fall apart.
But one day, not all at once
you'll smile again.
You'll laugh in rooms you once cried in.
You'll find peace in places that once echoed with emptiness.
You'll survive.

That's what a human does.
That's what life is.
It sucks.
I know.

Can we fix it?
Not really.
But we can do one thing:

We can learn to say goodbye,
softly,
slowly,
while we still have time.

We can look at the people we love
and truly see them.
We can whisper "thank you"
before life makes us scream "don't go."

Because letting go isn't just an ending.
It's an art.
And maybe,
the only one that matters.`
    },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = blogContent[params.slug as keyof typeof blogContent];
    const [leaving, setLeaving] = useState(false);
    const router = useRouter();

    if (!post) {
        notFound();
    }

    return (
        <AnimatePresence>
            {!leaving && (
                <motion.main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="relative min-h-screen bg-gray-900/80 font-sans"
                >
                    <Background />
                    <div className="mx-auto max-w-3xl px-2 sm:px-4 lg:px-8 py-8 sm:py-16 md:py-24">
                        <div className="mb-8">
                            <span
                                className="group flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
                                onClick={async () => {
                                    setLeaving(true);
                                    setTimeout(() => router.push('/blogs'), 400);
                                }}
                            >
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                Back to Blog
                            </span>
                        </div>
                        <div className="rounded-2xl bg-gray-900/70 p-3 sm:p-6 md:p-10 backdrop-blur-lg border border-white/5 shadow-2xl shadow-black/20">
                            <header className="text-center mb-12">
                                <h1 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight text-shadow-lg shadow-black/20">
                                    {post.title}
                                </h1>
                                <time dateTime={post.date} className="mt-4 block text-xs sm:text-sm text-gray-400">
                                    {post.date}
                                </time>
                            </header>
                            <article className="prose prose-invert max-w-none whitespace-pre-line">
                                <ReactMarkdown
                                    components={{
                                        p: (props) => <p className="font-serif text-base sm:text-lg md:text-xl leading-loose mb-6">{props.children}</p>
                                    }}
                                >{post.content}</ReactMarkdown>
                            </article>
                        </div>
                    </div>
                </motion.main>
            )}
        </AnimatePresence>
    );
}