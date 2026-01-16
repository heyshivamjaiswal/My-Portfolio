import foodImg from "../assets/projects/food.webp";
import netflixImg from "../assets/projects/netflixGpt.webp";
import mindMapImg from "../assets/projects/mindMap.webp";

export const projects = [
  {
    title: "AI Roadmap Builder",
    description:
      "An AI-powered interactive roadmap builder that converts learning goals into structured 2D/3D roadmaps with progress tracking and persistence.",
    tech: ["React", "TypeScript", "Zustand", "Firebase"],
    live: "https://roadmap-2cb3b.web.app/logina",
    github: "https://github.com/Mind-Map-Ai",
    image: mindMapImg,
  },
  {
    title: "Netflix GPT",
    description:
      "A Netflix-like streaming UI with AI-powered movie recommendations...",
    tech: ["React", "Redux", "Tailwind", "Firebase"],
    live: "https://netflix-gpt-iota-ochre.vercel.app/",
    github: "https://github.com/yourname/netflix-gpt",
    image: netflixImg,
  },
  {
    title: "Food Delivery App",
    description:
      "A Swiggy-like food ordering app with restaurant listings...",
    tech: ["React", "Redux Toolkit", "Tailwind"],
    live: "https://food-delivery-sigma-blond.vercel.app/",
    github: "https://github.com/heyshivamjaiswal/food-delivery-",
    image: foodImg,
  },
];
