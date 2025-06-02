'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { use } from 'react';
import Background from '@/components/Background';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Background />
      <main className="relative min-h-screen bg-transparent text-white p-4 md:p-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-12"
          >
            <Link 
              href="/projects"
              className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-2 group text-sm md:text-base"
            >
              <motion.span
                animate={{ x: [0, -2, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </motion.span>
              Back to Projects
            </Link>
            <div className="mt-4 md:mt-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-5xl font-extralight tracking-tighter"
                >
                  {project.title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-2 md:mt-0"
                >
                  {project.slug === 'neploy' ? (
                    <Link
                      href={`https://neploy.com`}
                      className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
                    >
                      <span className="text-[11px] tracking-[0.2em] uppercase">Visit</span>
                      <motion.span
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="inline-block"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 7h10v10M7 17L17 7"/>
                        </svg>
                      </motion.span>
                    </Link>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
                    >
                      <span className="text-[11px] tracking-[0.2em] uppercase">Visit</span>
                      <motion.span
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="inline-block"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 7h10v10M7 17L17 7"/>
                        </svg>
                      </motion.span>
                    </a>
                  )}
                </motion.div>
              </div>
              {project.date && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-[11px] tracking-wider text-white/40 mt-2 inline-block"
                >
                  {project.date}
                </motion.span>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-white/60 font-extralight leading-relaxed tracking-wide text-sm mb-6 md:mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-xl md:text-2xl font-extralight tracking-tight">About the Project</h2>
              <div className="space-y-6 md:space-y-8 text-white/60 font-extralight leading-relaxed tracking-wide text-sm">
                <p>
                  From Idea to MVP: Building a One-Click Next.js Hosting Platform
                </p>
                
                <p>
                  About a month ago, I had a crazy idea. What if you could take any public Next.js GitHub repo and deploy it with a single click—no login, no config, no dashboard—and get a temporary deployment link valid for 30 minutes? Something like Vercel, but simpler, faster to test ideas, and way more lightweight.
                </p>

                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-extralight tracking-tight text-white">🌱 The Spark</h3>
                  <p>
                    Vercel is incredible. They built Next.js and a great developer experience around it. But sometimes I just want a dead-simple way to preview a repo—no accounts, no UI, just fire-and-forget deployment. Especially useful for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 md:space-y-2">
                    <li>Testing PRs or forks</li>
                    <li>Sending a demo to a friend/client</li>
                    <li>Quickly sharing internal tools</li>
                  </ul>
                  <p>
                    The goal? Build a throwaway deployment platform optimized for speed and simplicity. Temporary hosting, no clutter.
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-extralight tracking-tight text-white">🧱 The Architecture (MVP)</h3>
                  <p>
                    The system breaks into three core services:
                  </p>
                  <ul className="space-y-1 md:space-y-2">
                    <li>🔼 Upload Service</li>
                    <li>🔧 Build & Deploy Service</li>
                    <li>🌐 Runtime Hosting (Lambda)</li>
                  </ul>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-extralight tracking-tight text-white">1. Upload Service</h3>
                  <p>
                    This is the user entry point. Accepts a GitHub repo URL, pushes a build job into an AWS SQS queue. That&apos;s it—super lean.
                  </p>
                  <p>
                    Why decoupled? Because I want the frontend or any other tool to use it as a webhook-style API. It just queues jobs.
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-extralight tracking-tight text-white">2. Build & Deploy Service</h3>
                  <p>
                    This is the engine of the platform. Polls SQS for jobs, clones the GitHub repo, runs npm install + next build, creates a deployment bundle, uploads static and public files to S3, and deploys a Lambda function for SSR if needed.
                  </p>
                  <p>
                    Challenges:
                  </p>
                  <ul className="list-disc list-inside space-y-1 md:space-y-2">
                    <li>Handling SSR required modifying next.config.js to output a standalone server bundle</li>
                    <li>I added zip compression to reduce the number of S3 PUT requests</li>
                    <li>Used MIME types to correctly upload files for static hosting</li>
                  </ul>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-extralight tracking-tight text-white">3. Runtime Hosting (Lambda + S3)</h3>
                  <p>
                    I deploy a Lambda per deployment for SSR support. The Lambda reads files from S3, and I configure a Function URL to serve the deployment. Deployments auto-expire after 30 minutes via S3 lifecycle rules.
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-extralight tracking-tight text-white">💰 Costs & Optimizations</h3>
                  <p>
                    In early testing, I hit the S3 free tier limit. Here&apos;s how I optimized:
                  </p>
                  <ul className="list-disc list-inside space-y-1 md:space-y-2">
                    <li>Zip + upload static & public files to reduce PUT requests</li>
                    <li>Use S3 lifecycle rules to auto-delete deployments after 30 mins</li>
                    <li>Explore caching with CloudFront</li>
                  </ul>
                  <p>
                    With these, I expect to stay within ~$5–$10/month even at 10k+ deploys/day.
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-extralight tracking-tight text-white">🛣️ What&apos;s Next?</h3>
                  <ul className="list-disc list-inside space-y-1 md:space-y-2">
                    <li>Add SES notifications for when a build is ready</li>
                    <li>Make the Lambda smarter (support middleware, rewrites)</li>
                    <li>Add a simple web UI (copy-paste repo URL and go)</li>
                  </ul>
                  <p>
                    And maybe... open it up to the world.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
} 