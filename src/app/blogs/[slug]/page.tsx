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
    'poke-life': {
        title: 'Poke Life',
        date: '4 July, 2025',
        content: `"So, the thing I would say is, when you grow up, you tend to get told that the world is the way it is and your life is just to live your life inside the world, try not to bash into the walls too much, try to have a nice family, have fun, save a little money. But that's a very limited life. Life can be much broader, once you discover one simple fact, and that is, everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it, you can build your own things that other people can use.

"The minute that you understand that you can poke life and actually something will, you know if you push in, something will pop out the other side, that you can change it, you can mold it. That's maybe the most important thing – is to shake off this erroneous notion that life is there and you're just gonna live in it, versus embrace it, change it, improve it, make your mark upon it.

"I think that's very important and however you learn that, once you learn it, you'll want to change life and make it better, cause it's kind of messed up, in a lot of ways. Once you learn that, you'll never be the same again."`
    },
    'purpose-vs-absurdity': {
        title: 'Purpose vs Absurdity',
        date: '20 June, 2025',
        content: `Find your purpose. Find your purpose.
But wait, is there really a purpose?
Do we even need one?
What is a purpose, anyway?
Let's talk.

I've seen so many people talk about finding their purpose in life. It's supposed to give you a reason to live, a reason to keep going. Maybe even more than that, it fills that weird, silent void of absurdity. Like, without it, things just feel...off. Pointless maybe.

Purpose is one of those things everyone defines differently. Philosophers, scientists, religious texts, everyone seems to have their own version.
Aristotle said "Everything in nature has a purpose."
So basically: be good, do good, die.
Neat. But a bit too polished, no?
Science comes in with its no-nonsense take. From an evolutionary lens, the purpose is just to survive and reproduce. Keep the species going. That's it.
No higher calling, no destiny. Just DNA doing its thing.
Religion, though, throws in a whole other narrative.
Christianity and Islam talk about serving one God, living morally and earning your place in eternity.
Hinduism talks about spiritual liberation, escaping the cycle of rebirth.
Buddhism is a little more interesting, it says: life is suffering and your purpose is to escape that suffering by letting go of desire and ego.
And look, I get it. These explanations help a lot of people.
But personally?
None of them fully land for me. Something always feels slightly off. Like I'm being handed someone else's answer to a question I haven't even figured out how to ask yet.

If we're talking about purpose, we kind of have to talk about absurdity too.
Because the moment you start questioning the point of it all, absurdity shows up quietly, then all at once.
Absurdity is that weird feeling you get when things stop making sense, but you still have to keep going.
You wake up, brush your teeth, go to work or school, make plans for the future all while knowing, deep down, that none of this comes with an instruction manual. No guaranteed meaning. Just... existence.
Camus called it "the confrontation between the human need for meaning and the silent, indifferent universe."
And yeah, that hits. Because we do crave meaning. We want things to add up. But life rarely gives us neat answers. It just keeps moving.
Absurdity isn't chaos. It's not depression.
It's more like standing in the middle of a busy street and thinking, "Wait. Why am I doing any of this?"
And then shrugging, crossing the road anyway.
Sometimes absurdity feels heavy like everything's fake or pointless.
Other times, it's kind of freeing.
If nothing truly matters in some grand cosmic way, then maybe you get to choose what matters to you. Maybe that's the point there is no point and that's okay.
I'm still figuring out what that means for me.
But I think once you make peace with absurdity, purpose becomes less of a mission and more of a choice.

I'm still confused and maybe that's okay. None of the big ideas religion, philosophy, science fully convince me. They all feel like someone else's answers. But what's slowly starting to work for me is this: not needing everything to make sense. Letting go of the pressure to have a "purpose" and instead choosing small things that feel right. A conversation that matters. A project that excites me. A moment that feels real. Maybe I don't need to figure it all out. Maybe what works for me is just staying curious, staying honest, and building meaning one choice at a time even if it doesn't come with a label.

So do I have a purpose? I don't know anymore. I thought I did. For a while, it felt clear like I was moving in the right direction, like things meant something. But things changed. I changed. And with that, the purpose I once held onto slipped away. Maybe it wasn't mine to begin with. Or maybe it just stopped fitting. It's strange how something that once gave you so much clarity can suddenly feel like a costume you've outgrown. Now, I'm somewhere in between searching, questioning, rebuilding. Maybe purpose isn't permanent. Maybe it shifts as you do. And maybe that's not failure. Maybe that's growth.

Maybe that's why absurdity makes more sense to me.`
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
                            <footer className="mt-12 pt-8 border-t border-white/10 text-center">
                                <div className="flex flex-col gap-2">
                                    {params.slug === 'poke-life' ? (
                                        <span className="font-semibold text-white text-base text-left">- Jobs</span>
                                    ) : (
                                        <span className="font-semibold text-white text-base text-left">- Zaid</span>
                                    )}
                                </div>
                            </footer>
                        </div>
                    </div>
                </motion.main>
            )}
        </AnimatePresence>
    );
}