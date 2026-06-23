"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Service } from "../data/services";

interface ServicesCarouselProps {
  services: Service[];
}

type CardsToShowType = 1 | 2 | 3 | 4;

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState<CardsToShowType>(4);
  const [isWide, setIsWide] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth >= 1440);
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else if (window.innerWidth < 1280) {
        setCardsToShow(3);
      } else {
        setCardsToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, services.length - cardsToShow);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsToShow, maxIndex, currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="carousel-wrapper">
      {/* Carousel Navigation Buttons overlaid on left and right */}
      <button
        onClick={prevSlide}
        className="carousel-nav-btn prev"
        style={{
          position: "absolute",
          top: "50%",
          left: isWide ? "-24px" : "10px",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
        aria-label="Previous services"
      >
        <span className="material-symbols-outlined">arrow_back_ios_new</span>
      </button>
      <button
        onClick={nextSlide}
        className="carousel-nav-btn next"
        style={{
          position: "absolute",
          top: "50%",
          right: isWide ? "-24px" : "10px",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
        aria-label="Next services"
      >
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>

      {/* Carousel Track */}
      <div className="carousel-container-outer">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            gridTemplateColumns: `repeat(${services.length}, calc(100% / ${cardsToShow}))`,
            display: "grid",
            transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            width: "100%",
          }}
        >
          {services.map((service) => {
            const isLiferayUpgrade = service.slug === "liferay-migration-upgrade";
            return (
              <div
                key={service.slug}
                className="carousel-slide-item"
                style={{ padding: "0 0.75rem", boxSizing: "border-box" }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={`services-home-card ${isLiferayUpgrade ? "highlighted" : ""}`}
                  style={{ height: "100%", display: "flex", flexDirection: "column" }}
                >
                  <span className="material-symbols-outlined service-icon">
                    {service.icon}
                  </span>
                  <h3>{service.title}</h3>
                  <p style={{ marginTop: "0.5rem" }}>{service.shortDescription}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
