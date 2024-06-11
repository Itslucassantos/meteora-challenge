import React from 'react';
import firstBannerDesktop from '../../assets/Desktop/banner1-desktop.png';
import secondBannerDesktop from '../../assets/Desktop/banner2-desktop.png';
import thirdBannerDesktop from '../../assets/Desktop/banner3-desktop.png';
import firstBannerTablet from '../../assets/Tablet/banner1-tablet.png';
import secondBannerTablet from '../../assets/Tablet/banner2-tablet.png';
import thirdBannerTablet from '../../assets/Tablet/banner3-tablet.png';
import firstBannerMobile from '../../assets/Mobile/banner1-mobile.png';
import secondBannerMobile from '../../assets/Mobile/banner2-mobile.png';
import thirdBannerMobile from '../../assets/Mobile/banner3-mobile.png';
import './Carousel.css'

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img
            src={firstBannerMobile}
            className="w-100 img-fluid d-md-none"
            alt="Modelo feminina vestindo blusa rosa fluorescente, em fundo lilás"
          />
          <img
            src={firstBannerTablet}
            className="d-none d-md-block d-xl-none img-fluid w-100"
            alt="Modelo feminina vestindo blusa rosa fluorescente, em fundo lilás"
          />
          <img
            src={firstBannerDesktop}
            className="d-none d-xl-block img-fluid w-100"
            alt="Modelo feminina vestindo blusa rosa fluorescente, em fundo lilás"
          />
        </div>
        <div className="carousel-item">
        <img
            src={secondBannerMobile}
            className="w-100 img-fluid d-md-none"
            alt="Modelo feminina utilizando óculos escuros e vestindo conjunto esportivo de blusa e calça na cor preta, sentada em um sofá preto em um fundo rosa."
          />
        <img
            src={secondBannerTablet}
            className="d-none d-md-block d-xl-none img-fluid w-100"
            alt="Modelo feminina utilizando óculos escuros e vestindo conjunto esportivo de blusa e calça na cor preta, sentada em um sofá preto em um fundo rosa."
          />
          <img
            src={secondBannerDesktop}
            className="d-none d-xl-block img-fluid w-100"
            alt="Modelo feminina utilizando óculos escuros e vestindo conjunto esportivo de blusa e calça na cor preta, sentada em um sofá preto em um fundo rosa."
          />
          <div className="carousel-caption position-absolute posicao">
            <h5 className='fs-1'>COLEÇÃO ATEMPORAL</h5>
            <p className='fs-4'>Estilo e qualidade para durar.</p>
          </div>
        </div>
        <div className="carousel-item">
        <img
            src={thirdBannerMobile}
            className="w-100 img-fluid d-md-none"
            alt="Modelo masculino vestindo chapéu preto, blazer cinza, cammisa social branca, gravata borboleta na cor preta, óculos com lente transparente e armação na cor preta além de um cordão prateado, em um fundo laranja."
          />
        <img
            src={thirdBannerTablet}
            className="w-100 img-fluid d-none d-md-block d-xl-none"
            alt="Modelo masculino vestindo chapéu preto, blazer cinza, cammisa social branca, gravata borboleta na cor preta, óculos com lente transparente e armação na cor preta além de um cordão prateado, em um fundo laranja."
          />
          <img
            src={thirdBannerDesktop}
            className="w-100 img-fluid d-none d-xl-block "
            alt="Modelo masculino vestindo chapéu preto, blazer cinza, cammisa social branca, gravata borboleta na cor preta, óculos com lente transparente e armação na cor preta além de um cordão prateado, em um fundo laranja."
          />
          <div className="carousel-caption position-absolute posicao">
            <h5 className='fs-1'>COLEÇÃO ATEMPORAL</h5>
            <p className='fs-4'>Alto impacto visual, baixo impacto ambiental!</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
};

export default Carousel;
