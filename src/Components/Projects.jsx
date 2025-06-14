import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import Page from './Page';

export default function Projects() {
  const compsciProjects = [
    {
      title: "Endless Wave Survival Game",
      role: "Full-Stack Solo Developer",
      dateString: "Apr 2024 - Present",
      toggle: true,
      description: `An endless survival PVE game developed in Godot using C# with extensive upgrade systems, ingame economy 
      and equipment progression. This ongoing passion project explores complex enemy AI with unique pathfinding and 
      state-based behaviours including tracking, circling, patrolling and flock behaviour. Visuals and UI are hand-drawn 
      and animated with 2D frame by frame in Photoshop.`,
      technologies: ["C#", "Godot", "Photoshop"]
    },
    {
      title: `"East of Loving" — Strategy Game`,
      role: "Full-Stack Solo Developer",
      dateString: "Dec 2021 - Oct 2022",
      images: [
        {src: "/EoL_1.png", alt: "East of Loving Gameplay 1", caption: "Gameplay 1"},
        {src: "/EoL_2.png", alt: "East of Loving Gameplay 2", caption: "Gameplay 2"},
        {src: "/3DVis_Library_Wireframe_1.jpg", alt: "Wireframe 1", caption: "Wireframe 1"},
        {src: "/3DVis_Library_Wireframe_2.jpg", alt: "Wireframe 2", caption: "Wireframe 2"}
      ],
      toggle: true,
      description: `A comedy-driven topdown game built in Unity using C# featuring turn-based PVE combat, smart inventory and dynamic item /
      enemy logic. Features fully handmade 2D graphics, VFX and UI with bone animations modelled in Unity.`,
      technologies: ["C#", "Unity"],
    },
    {
      title: "Personal Portfolio Website",
      role: "Solo Developer",
      dateString: "June 2025",
      toggle: false,
      description: `A responsive and minimalist React-based website showcasing my personal projects and background. Designed 
      and built from scratch with Javascript and JSX, utilising React-Bootstrap for layout and a contact form powered by EmailJS.`,
      technologies: ["React", "Javascript", "Bootstrap", "CSS", "EmailJS", "Framer Motion"],
      repoLink: "https://github.com/pwazta/vinx-dev.vercel.app"
    }
  ];
  const artProjects = [
      {
      title: "Antique Library Environment",
      role: "3D Visualisation Student Project",
      dateString: "Apr 2025 - May 2025",
      images: [
        {src: "/3DVis_Library_1.png", alt: "Library Render 1", caption: "Library Render Front"},
        {src: "/3DVis_Library_2.png", alt: "Library Render 2", caption: "Library Render Back"},
      ],
      toggle: false,
      description: `Fully custom-modeled 3D environment of an antique library room inspired by Gothic Revival and traditional European 
      architecture.`,
      technologies: ["Maya"]
    }
  ];

  // Used only to scroll to anchors e.g: "/projects#art": discontinued use in SPA
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        const yOffset = -60;
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <Page bg="#d6dcd9">
      <section id="compsci">
        <h1><strong>Projects</strong></h1>
        <p>A visual display of all the different projects I have worked on over the years!</p>

        <h2><strong>Computer Science</strong></h2>
        <div className="row g-4">
          { compsciProjects.map((project, i) => (
            <div className="col-12 col-xl-6" key={i}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>
      <hr className="m-4"/>
      <section id="arts">
        <h2><strong>Animation / 3D-Visualisation</strong></h2>
        <div className="row g-4">
          { artProjects.map((project, i) => (
            <div className="col-12 col-xl-6" key={i}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}