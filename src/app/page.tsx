'use client';

import Hero from "@/components/Hero";
import Chapters from "@/components/Chapters";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Chapters />
      <footer className="w-full flex justify-center py-4">
        <div className="flex gap-4">
          <a href="https://github.com/xaid-vfx" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-emerald-400 transition-colors">
            {/* GitHub SVG */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" /></svg>
          </a>
          {/* <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-emerald-400 transition-colors">
            //
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg>
          </a> */}
          <a href="https://twitter.com/okzaid" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-emerald-400 transition-colors">
            {/* Twitter SVG */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72c-.95.56-2 .97-3.13 1.19a4.92 4.92 0 0 0-8.39 4.48A13.97 13.97 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57c-.8-.02-1.56-.25-2.22-.62v.06a4.93 4.93 0 0 0 3.95 4.83c-.39.11-.8.17-1.22.17-.3 0-.59-.03-.87-.08a4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 21.54a13.94 13.94 0 0 0 7.56 2.22c9.05 0 14-7.5 14-14v-.64A9.94 9.94 0 0 0 24 4.56z" /></svg>
          </a>
          {/* <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="text-gray-400 hover:text-emerald-400 transition-colors">
          
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7v5h5zm-7-7h2v2h-2zm0 4h2v2h-2z" /></svg>
          </a> */}
        </div>
      </footer>
    </main>
  );
}
