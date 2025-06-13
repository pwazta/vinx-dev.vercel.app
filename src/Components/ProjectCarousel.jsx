import { useState } from 'react';
import { Carousel, Modal, Button } from 'react-bootstrap'; 
import { CarouselImage, CarouselExpandButton, FullscreenImage } from '../Style/StyledComponents';
import { SearchHeart } from 'react-bootstrap-icons';

export default function ProjectCarousel({images}) {
  const [showModal, setShowModal] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const handleNextImage = (index) => {
    setCarouselIndex(index);
  };

  if (images.length === 0) return null;
  return (
    <section className="px-4">
      {/* MAIN CAROUSEL */}
      <Carousel activeIndex={carouselIndex} onSelect={handleNextImage} interval={showModal ? null : 5000}>
        { images.map((img, i) => (
          <Carousel.Item key={i}>
            <div className="position-relative">
              <CarouselExpandButton variant="outline-light" onClick={() => setShowModal(true)} aria-label="Expand Image">
                <SearchHeart/>
              </CarouselExpandButton>
              <CarouselImage src={img.src} alt={img.alt}/>
            </div>
            <Carousel.Caption><p className="m-0">{img.caption}</p></Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <FullscreenImage
        show={showModal}
        onHide={() => setShowModal(false)}
        fullscreen
        centered
        aria-labelledby="fullscreenModalLabel"
        aria-describedby="fullscreenModalDescription"
      >
        {/* Lazy changing modal X to white */}
        <Modal.Header closeButton>
          <style>
            {`.btn-close { filter: brightness(0) invert(1); }`}
          </style>
        </Modal.Header>

        {/* EXPANDED IMAGE */}
        <Modal.Body className="w-100">
          <img
            src={images[carouselIndex].src}
            alt={images[carouselIndex].caption || 'Expanded view'}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </Modal.Body>

        {/* CLOSE FOOTER */}
        <Modal.Footer className="position-relative">
          {images[carouselIndex].caption && (
            <h5 id="fullscreenModalLabel" className="position-absolute start-50 top-50 translate-middle">
              {images[carouselIndex].caption}
            </h5>
          )}
          <Button variant="success py-1" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </FullscreenImage>
    </section>
  );
}