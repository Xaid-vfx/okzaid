export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  // Optional fields you might want to add later
  image?: string;
  github?: string;
  featured?: boolean;
  date?: string;
}

export const projects: Project[] = [
  {
    title: "Bloom",
    description: "A marketplace for Apprenticeships in Africa",
    technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    link: "https://bloom.africa",
    date: "2023 - 2025"
  },
  {
    title: "Neploy",
    description: "Fastest way to deploy your Next.js app",
    technologies: ["Node.js", "JavaScript", "AWS"],
    link: "https://neploy.com",
    date: "2025"
  },
  {
    title: "LatexCV",
    description: "No Code ATS friendly Latex CV builder",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Docker"],
    link: "https://latexcv.fly.dev",
    date: "2024"
  },
  {
    title: "Autism Detection",
    description: "Detecting Autism in among all age groups using Machine Learning Algorithms",
    technologies: ["Python", "React.js"],
    link: "https://github.com/xaid-vfx/Autism-Detection",
    date: "2023"
  },
  {
    title: "SnapShoot",
    description: "Platform for buying stock images",
    technologies: ["React.js", "Node.js", "Stripe", "Firebase"],
    link: "https://github.com/xaid-vfx/imagery",
    date: "2023"
  },
  {
    title: "GitHub Tool",
    description: "A app that simply fetches your GitHub repositories and displays them in a beautiful way",
    technologies: ["React.js"],
    link: "https://github.com/xaid-vfx/github-tool",
    date: "2022"
  },
  {
    title: "Maps",
    description: "A platform developed to instantly calculate distance and time between two geographic locations with the help of GoogleMapsAPI",
    technologies: ["React.js"],
    link: "https://github.com/xaid-vfx/mapsapi",
    date: "2022"
  },
  // Add more projects here
]; 