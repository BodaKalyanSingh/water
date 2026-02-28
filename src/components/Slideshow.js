import React, { useState, useEffect } from 'react';
import slide1 from '../assets/slideshow/slide1.png';
import slide2 from '../assets/slideshow/slide2.png';
import slide3 from '../assets/slideshow/slide3.png';
import slide4 from '../assets/slideshow/slide4.png';
import slide5 from '../assets/slideshow/slide5.png';
import slide6 from '../assets/slideshow/slide6.png';
import './Slideshow.css';

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex(i => (i + 1) % slides.length);

  return (
    <div className="slideshow">
      <img src={slides[index]} alt={`Slide ${index + 1}`} />
      <button className="slide-nav slide-prev" onClick={prev} aria-label="Previous slide">‹</button>
      <button className="slide-nav slide-next" onClick={next} aria-label="Next slide">›</button>
      <div className="slide-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === index ? 'active' : ''}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
