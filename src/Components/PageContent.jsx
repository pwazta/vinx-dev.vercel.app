import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Activities from './Activities';
import HeroSection from './HeroSection';

export default function PageContent() { // Style Page stuff here
  return (
    <>
      <HeroSection/>
      <AboutMe/>
      <Projects/>
      <Activities/>
      <ContactMe/>
    </>
  );
}