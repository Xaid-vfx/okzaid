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
    'rationality-vs-delusion': {
        title: 'Rationality vs Delusion',
        date: '19 July, 2025',
        content: `What if everything you believe is a lie? What if your "rational" mind is the biggest delusion of all? Buckle up. We're diving into a mind-bending journey that will challenge everything you think you know about reality, truth, and logic. The most shocking thing about the world we live in might not be its chaos, but that the very foundation of our rationality could be the grandest delusion of all.


The Fabric of Time: A Cosmic Play-Doh?

Let’s start with something truly crazy: Einstein’s theory of relativity. Forget what you learned in school. Time isn't some steady ticking clock. It's bendable. It's warped by gravity. It doesn't flow the same for me as it does for you. Imagine soaring through space at nearly the speed of light time would stretch and slow down for you, while back on Earth, the rest of us would be living out our days at a frantic pace.
"Wait, what?" you ask, your "rational" brain screaming. "Time is bendable? That doesn't make any sense!" And that's precisely the point. We've been fed this comforting lie that time is linear, a constant. Yet, here's the bedrock of modern physics telling us that time is as fluid as a dream. If time, the very scaffolding of our existence, can be twisted and stretched, what else in our "reality" is just an illusion waiting to be shattered?


Rationality: Your Personal Prison?

Now, let’s talk about rationality. It's the crutch we lean on, the comfortable blanket that keeps the monsters of uncertainty at bay. It’s how we build skyscrapers, decode DNA, and predict tomorrow's weather. It feels safe, predictable, true.
But here’s the venomous twist: Rationality isn't the universal truth; it's just your current truth. It's a tiny window into an infinite cosmos. Remember the flat-earth theory? Perfectly "rational" back in the day, given the limited perspective. We laughed at them, didn't we? But what if our modern rationality is just a slightly bigger flat-earth theory, boxing us into a minuscule sliver of what's truly out there? What truths are we actively blinding ourselves to by clinging to this mental straightjacket?


Quantum Weirdness: When Reality Breaks Its Own Rules

Now, let’s inject some pure, unadulterated madness: quantum mechanics. Here, reality doesn't just bend; it shatters. Particles exist in multiple places at the same time. They're entangled, meaning a ripple in one can instantly ripple through another, even if they're light-years apart. Instantaneously. No time for light to travel.
Your "rational" mind screams, "Impossible! Cause and effect! Logic!" But quantum mechanics just smirks, showing us a universe where things defy the most fundamental rules you thought were unbreakable. The deeper we peer into this subatomic abyss, the more we realize how utterly insane it is and yet, it’s the very foundation of everything. What if the universe itself is far more unpredictable, more alive with paradox, than we've ever dared to admit?


DMT: Glimpses Beyond the Veil of Sanity?

Let's crank the dial to eleven. Imagine taking DMT, a psychedelic so potent, people report experiencing entire realities beyond our wildest nightmares or most vivid dreams. Users describe encounters with beings from other dimensions, speaking to them, learning from them. "Delusion!" your rational mind shouts, quick to dismiss.
But here’s the insidious thought: your brain produces DMT naturally. It's literally swimming in your system right now, waiting. What if these "delusions" aren't just figments of a malfunctioning brain, but rather glimpses into deeper layers of reality that our conditioned senses are simply not equipped to perceive? Terence McKenna, the psychedelic shaman, believed these experiences were genuine portals, that our everyday perception is a profound limitation. What if "delusion" is actually the key to unlocking a hidden truth?


The Echo Chamber of Your Mind: The Ultimate Delusion Trap

Here’s something even more sinister: confirmation bias. Your brain isn't just a neutral observer; it's a masterful illusionist. It's a sneaky trick, designed to only accept information that perfectly slots into the story you already believe. Convinced the Earth is flat? Your brain will tirelessly hunt for "evidence" to support it, deftly discarding anything that challenges your precious narrative.
This is how conspiracy theories thrive. A mind convinced of shadowy elites controlling the world will conjure endless "proof," no matter how outlandish. What's truly terrifying is that your mind isn't just following facts; it's actively creating its own facts to rationalize its chosen delusions. And it does so with terrifying, unyielding efficiency. So, what "truths" are you unknowingly manufacturing?


Geniuses or Madmen? The Architects of Our "Reality"

What if the greatest minds in history weren't just geniuses, but individuals who were willing or perhaps compelled to shatter the limits of rationality? Consider Nikola Tesla, who claimed to communicate with extraterrestrials via radio waves. Was he a madman, or was he simply operating on a frequency our "rational" world couldn't comprehend?
Then there's Steve Jobs, the visionary behind Apple. A dreamer, a believer that technology should possess a spiritual essence. Conventional thinkers would have dismissed him as utterly out of touch. Yet, his "delusions" birthed the iPhone, the iPad, the very digital age we now inhabit. His irrationality didn't just lead to invention; it orchestrated a global revolution.
These weren't just men seeing the world through the lens of what was possible. They were dreaming in a different dimension, a realm where rationality simply couldn't follow. Their "delusions" didn't just open a door; they blew a hole in the fabric of what we thought was real.


The Matrix: Is Your Life the Blue Pill?

This brings us back to the ultimate mind-bender: The Matrix. Neo is offered a choice: the blue pill for the comforting, "rational" world safe, predictable, a gilded cage of manufactured reality. Or the red pill: chaos, uncertainty, but also… truth.
Here’s the chilling question: Is your very rationality the blue pill? Is it the reassuring, controlled world where everything makes sense, precisely because it keeps you trapped in a severely limited view of what’s truly possible? And the red pill the "delusion" might actually be freedom. Real freedom, because it explodes your perceptions and catapults you into a reality beyond the shackles of logic. What if everything you’re experiencing right now is just a hyper-realistic simulation?


The Big Bang: A Paradox Beyond Comprehension

Let’s leave you with this: The Big Bang. The universe, everything we know, exploded into existence 13.8 billion years ago from nothing. A singularity of infinite density. Where did that explosion come from? How did something emerge from absolute nothingness? It defies every single rational framework, every law of physics we understand. And yet, it's the foundation of everything.
So, what does that mean? Maybe "nothingness" is just another delusion we fabricated because we're too terrified to admit that the universe could have always existed in some inconceivable form without explanation, without reason, a cosmic anomaly that laughs in the face of our most profound attempts at understanding. Perhaps rationality can’t even begin to touch the truth of how it all began.


Conclusion: Embrace the Chaos. Embrace the Delusion.

The chilling truth might be this: Rationality is the real delusion. It's a tool, yes, but a terribly limited one. It’s a straightjacket, designed to keep us safe and sane in a world of "knowns." But the universe? It's wild. It's chaotic. It's exquisitely unpredictable. And it is so, so much stranger than you can possibly imagine.
Perhaps "delusion" is not a flaw, but a superpower. What if the only way to truly understand reality is to lean into the unknown to plunge headfirst into the beautiful chaos and shatter the very chains of reason?
Because in the end, reality itself is just a dream. And it might be time to wake up.
What if you've been asleep your whole life?`
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