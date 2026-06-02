import React, { useState, useEffect, useRef } from 'react';

function Carousel({ children, className = '' }) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const autoScrollIntervalRef = useRef(null);

  const getCardWidth = () => {
    const container = scrollContainerRef.current;
    if (!container) return 0;
    
    const firstCard = container.querySelector('[class*="item"]');
    if (!firstCard) return 0;
    
    return firstCard.offsetWidth;
  };

  const getGap = () => {
    const container = scrollContainerRef.current;
    if (!container) return 0;
    
    const style = getComputedStyle(container);
    const gap = style.gap;
    
    if (gap === 'normal' || gap === 'auto' || !gap) {
      if (window.innerWidth <= 480) return 0;
      if (window.innerWidth <= 1024) return 15;
      return 30;
    }
    
    return parseFloat(gap);
  };

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = getCardWidth();
    if (cardWidth === 0) return;

    const gap = getGap();
    const scrollAmount = cardWidth + gap;
    const targetScroll = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: 'smooth'
    });

    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    startAutoScroll();
  };

  const startAutoScroll = () => {
    autoScrollIntervalRef.current = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const cardWidth = getCardWidth();
      if (cardWidth === 0) return;

      const gap = getGap();
      const scrollAmount = cardWidth + gap;
      const newScroll = container.scrollLeft + scrollAmount;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (newScroll >= maxScroll - 10) {
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      } else {
        container.scrollTo({
          left: newScroll,
          behavior: 'smooth'
        });
      }
    }, 5000);
  };

  useEffect(() => {
    checkScroll();
    
    const handleResize = () => {
      checkScroll();
    };

    window.addEventListener('resize', handleResize);

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
    }

    startAutoScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className={`carousel-wrapper ${className}`}>
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        aria-label="Slide anterior"
      >
        ←
      </button>

      <div className="carousel-container" ref={scrollContainerRef}>
        {children}
      </div>

      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        aria-label="Próximo slide"
      >
        →
      </button>
    </div>
  );
}

export default Carousel;
