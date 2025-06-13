import styled from 'styled-components';
import { Navbar, Container, Badge, Card, Button, Carousel, Modal } from 'react-bootstrap';

/////////////////////// HEADER ///////////////////////
export const NavbarWrapper = styled(Navbar)`
  background-color: #023020;
  
  .navbar-brand {
    color: white;
    font-weight: bold;

    &:hover {
      color: #ffc107;
    }
  }

  .nav-link {
    color: white;
    transition: transform 0.1s ease, color 0.1s ease;
    text-align: center;
    
    &:hover {
      color: #ffc107;
      text-decoration: underline;
      transform: scale(1.1);
    }
    @media (max-width: 767px) {
      display: block;
      width: 90%;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1); /* light hover effect */
        border-radius: 3px;
        transition: background-color 0.2s ease;
      }
    }
  }
`;

export const Divider = styled.span`
  border-left: 1px solid #fff;
  height: 30px;
  margin: 0;
`;

/////////////////////// PAGES ///////////////////////
export const PageContainer = styled(Container)`
  padding: 80px 4vw;
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PageWrapper = styled.article`
  background-color: ${({ $bg }) => $bg || 'transparent'};
  width: 100%;
`;

/////////////////////// PROJECT CARD ///////////////////////
export const ProjectCardWrapper = styled(Card)`
  margin: 0;
  padding: 2%;
  max-width: 750px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    border: 1px solid #023020;
  }
`;

export const ProjectLink = styled.a`
  color: #212529; // Text-dark
  text-decoration: none;

  &:hover {
    color: #34594c;
    text-decoration: underline;
  }
`;

export const TechBadge = styled(Badge)`
  color: white;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.85rem;
  margin-right: 5px;
`;

/////////////////////// CAROUSEL ///////////////////////
export const CarouselWrapper = styled(Carousel)``;

export const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
`;

export const CarouselExpandButton = styled(Button)`
  position: absolute;
  padding: 2px 7px;
  top: 3%;
  right: 2%;
  z-index: 10;
`;

/////////////////////// FULLSCREEN IMAGE ///////////////////////
export const FullscreenImage = styled(Modal)`
  .modal-footer, .modal-header {
    margin: 0;
    padding: 8px 40px;
    background-color: #023020;
    color: #e4e8e6;
    height: 59px;
    border-color: black;
  }
  .modal-body {
    background-color: black;
    padding: 0;
  }
`;


/////////////////////// ICONS ///////////////////////
export const SocialsButton = styled.a`
  color: #6c757d;
  font-size: 2.5rem;
  transition: color 0.5s ease, transform 0.1s ease;

  &:hover {
    transform: scale(1.05);
    color: #023020;
  }
`;

/////////////////////// ACTIVITY IMAGES ///////////////////////
export const ThumbnailImage = styled.img`
  width: 300px;
  height: 200px;
  margin: 0 auto;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 80%;
  }
`;

export const ActivityFlex = styled.div`
  display: flex;
  flex-direction: ${({ $reverse }) => ( $reverse ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ActivityText = styled.div`
  flex: 1;
`;