import { TechBadge } from '../Style/StyledComponents';
import Socials from './Socials';
import Page from './Page';

const languages = ["C#", "C++", "Java", "Javascript", "HTML", "CSS"];
const tech = ["React", "Bootstrap", "Jest", "Cypress", "Godot", "Unity"];

export default function AboutMe() {
  return (
    <Page id="about">
      <section className="row mt-4">
        <div className="col-xl-4 text-center mb-4">
          <img src="/headshot.png" alt="My Face" className="img-fluid rounded-circle"/>
        </div>
        <div className="col-xl-8 d-flex flex-column align-items-center px-4">
          <h1><strong>About Me</strong></h1>
          <h4>Student, Developer and 3D Modeller</h4>
          <p>
            I'm a passionate Computer Science and Fine Arts (Animation / 3DVis) student at UNSW with experience in game development and both
            frontend and backend development. I've been studying CS and Software Design since end of high school, and I'm comfortable coding
            in C++, Java, Javascript, C# and more. In my free time, I pursue game development as a hobby — it's what got me into programming 
            in the first place, and it's where I ultimately want to take my career.
          </p>
          <p>
            In and out of class, whether it's designing AI systems in Godot, building front and backends in React, or animating and modelling in 
            Maya, I'm always experimenting and pushing myself to learn something new. I seek to create innovative, engaging experiences that 
            others can enjoy — and I'm excited to one day bring that passion into a professional environment where I can grow my skills and share
            it with the world.
          </p>

          <h4>Tech Stack</h4>
          <p className="mb-1">
            {`Languages: `}
            { languages.map((tech) => (
              <TechBadge key={tech} bg="secondary">{tech}</TechBadge>
            ))}
          </p>
          <p>
            {`Technologies: `}
            { tech.map((tech) => (
              <TechBadge key={tech} bg="secondary">{tech}</TechBadge>
            ))}
            </p>
          <Socials/>
        </div>
      </section>
    </Page>
  );
}
