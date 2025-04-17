"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import GradientOverlay from "../banner/GradientOverlay";
import "swiper/css";

// SlideContent Component
const SlideContent = ({
  title,
  description,
  link,
  buttonText,
}: {
  title: string;
  description: string;
  link: string;
  buttonText: string;
}) => (
  <div className="gi-slide-content slider-animation" style={{ position: "relative", zIndex: 2 }}>
    <p>{description}</p>
    <h1 className="gi-slide-title">{title}</h1>
    <div className="gi-slide-btn">
      <a href={link} className="gi-btn-1">
        {buttonText}{" "}
        <i className="fi-rr-angle-double-small-right" aria-hidden="true"></i>
      </a>
    </div>
  </div>
);

function HeroSlider() {
  const slides = [
    {
      title: "Renueva tu equipo, impulsa tu negocio",
      description: "Explora nuestros productos",
      link: "/tienda",
      buttonText: "Ver Productos",
      image: "slide-7",
    },
    {
      title: "Descubre las mejores soluciones comerciales",
      description: "Explora nuestros productos",
      link: "/tienda",
      buttonText: "Ver Productos",
      image: "slide-2",
    },
    {
      title: "Transforma tu comercio con lo mejor",
      description: "Explora nuestros productos",
      link: "/tienda",
      buttonText: "Ver Productos",
      image: "slide-4",
    },
    {
      title: "Transforma tu comercio con lo mejor",
      description: "Explora nuestros productos",
      link: "/tienda",
      buttonText: "Ver Productos",
      image: "slide-5",
    },
    // Add more slides as needed
  ];

  return (
    <>
      <section className="section gi-hero m-tb-40">
        <div className="container">
          <div className="gi-main-content">
            <div className="gi-slider-content">
              <div className="gi-main-slider">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  speed={2000}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  slidesPerView={1}
                  className="swiper-pagination-white gi-slider main-slider-nav main-slider-dot swiper-wrapper"
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index} className={`gi-slide-item swiper-slide d-flex ${slide.image}`}>
                      <GradientOverlay />
                      <SlideContent
                        title={slide.title}
                        description={slide.description}
                        link={slide.link}
                        buttonText={slide.buttonText}
                      />
                    </SwiperSlide>
                  ))}
                  <div className="swiper-pagination swiper-pagination-white"></div>
                  <div className="swiper-buttons">
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSlider;
