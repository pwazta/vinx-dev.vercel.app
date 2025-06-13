import styled, { keyframes } from 'styled-components';
import { FaArrowDown } from 'react-icons/fa';
import Page from './Page';
import HeroBackground from './HeroBackground';

// Style and animations are defined locally as it is too niche for StyledComponents.jsx
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
`;

const ScrollCue = styled.button`
  color: #666;
  animation: ${bounce} 1.5s infinite;
  background: transparent;
  cursor: pointer;
  border: 0;
  border-radius: 20px;
  transition: color 0.5s ease, background-color 0.1s ease;

  &:hover {
    background-color: #b3c0bc;
    color: #023020;
  }
`;

// Animated text typing effect
const typing = keyframes`
  from { width: 0 }
`;

const cursor = keyframes`
  50% { border-color: transparent; }
`;

const AnimatedText = styled.h2`
  padding-right: 10px;
  border-right: 5px solid #b3c0bc;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  animation: 
    ${typing} 2s steps(30, end) forwards,
    ${cursor} 0.6s step-end infinite alternate;
`;

export default function HeroSection() {
  const handleScroll = () => {
    document.getElementById('about').scrollIntoView();
  };

  return (
    <Page bg="none" id="home">
      <HeroBackground/>
      <section className="d-flex flex-column justify-content-center align-items-center text-center">
        <div style={{"zIndex": "1"}}>
          <h1 style={{"fontSize": "3.5rem" }}><strong>Hi, I'm Vincent!</strong></h1>
          <AnimatedText className="text-muted fs-4 fst-italic">Student, Developer, and 3D Modeller</AnimatedText>
          <ScrollCue className="fs-2 mt-1" aria-label="Scroll to next section" onClick={handleScroll}>
            <FaArrowDown/>
          </ScrollCue>
        </div>
      </section> 
    </Page>
    
  );
}