import { useState } from 'react';
import { ProjectCardWrapper, TechBadge, ProjectLink, SocialsButton } from '../Style/StyledComponents';
import { Button } from 'react-bootstrap'
import ProjectCarousel from './ProjectCarousel';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

export default function ProjectCard({ title, role, dateString, images, toggle, description, technologies, repoLink }) {
  const [showCarousel, setShowCarousel] = useState(!toggle);
  return (
    <ProjectCardWrapper>
      {/* TITLE */}
      <h3>
        {repoLink ? (
          <ProjectLink href={repoLink} target="_blank" rel="noopener noreferrer">
            {title}
          </ProjectLink>
        ) : (
          title
        )}
      </h3>
      
      {/* REPO ICON LINK */}
      {repoLink && (
        <SocialsButton
          href={repoLink} 
          target="_blank"
          rel="noopener noreferrer" 
          className="position-absolute top-0 end-0 px-3 py-2 fs-5"
          aria-label={`View Repo`}
        >
          <BoxArrowUpRight />
        </SocialsButton>
      )}

      {/* CAROUSEL */}
      <div className="d-flex justify-content-between">
        <p className="text-muted mb-2">{role}</p>
        <p className="text-muted mx-3 mb-2">{dateString}</p>
      </div>
      { showCarousel && images && (
        <div>
          <ProjectCarousel images={images}/>
          <hr className="mx-4"/>
        </div>
      )}
      <p>{description}</p>

      {/* TOGGLE CAROUSEL AND TECH BADGES */}
      <section id="footer" className="d-flex justify-content-between">
        <div className="flex-grow-1 me-auto">
          {technologies.map((tech) => (
            <TechBadge key={tech} bg="secondary">{tech}</TechBadge>
          ))}
        </div>
        {toggle && images && (
          <div className="mb-2 d-flex justify-content-end">
            <Button variant="link" className="text-secondary p-0 me-3" onClick={() => setShowCarousel(!showCarousel)}>
              {showCarousel ? 'Hide Media' : 'Show Media'}
            </Button>
          </div>
        )}
      </section>
    </ProjectCardWrapper>
  );
}