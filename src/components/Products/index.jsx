import React from 'react';
import './Products.css';
import shirt from '../../assets/Desktop/produtos/camiseta.png';
import pants from '../../assets/Desktop/produtos/calca.png';
import tennisShoes from '../../assets/Desktop/produtos/tenis.png';
import jacket from '../../assets/Desktop/produtos/jaqueta-jeans.png';
import glasses from '../../assets/Desktop/produtos/oculos.png';
import handbag from '../../assets/Desktop/produtos/bolsa.png';

import shirtTablet from '../../assets/Tablet/produtos/camiseta.png';
import pantsTablet from '../../assets/Tablet/produtos/calca.png';
import tennisShoesTablet from '../../assets/Tablet/produtos/tenis.png';
import jacketTablet from '../../assets/Tablet/produtos/jaqueta-jeans.png';
import glassesTablet from '../../assets/Tablet/produtos/oculos.png';
import handbagTablet from '../../assets/Tablet/produtos/bolsa.png';

import shirtMobile from '../../assets/Mobile/produtos/camiseta.png';
import pantsMobile from '../../assets/Mobile/produtos/calca.png';
import tennisShoesMobile from '../../assets/Mobile/produtos/tenis.png';
import jacketMobile from '../../assets/Mobile/produtos/jaqueta-jeans.png';
import glassesMobile from '../../assets/Mobile/produtos/oculos.png';
import handbagMobile from '../../assets/Mobile/produtos/bolsa.png';

const Products = () => {
  return (
    <div className="container row mx-auto text-center">
      <div className="col-xl-4 col-md-6 col-12 pb-4">
        <div className="card">
          <img
            src={shirtMobile}
            className="d-block d-md-none"
            alt="Modelo masculo vestindo touca preta, blusa marrom e calça jeans, com uma parede cinza de fundo."
          />
          <img
            src={shirtTablet}
            className="d-none d-md-block d-xl-none"
            alt="Modelo masculo vestindo touca preta, blusa marrom e calça jeans, com uma parede cinza de fundo."
          />
          <img
            src={shirt}
            className="d-none d-xl-block"
            alt="Modelo masculo vestindo touca preta, blusa marrom e calça jeans, com uma parede cinza de fundo."
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">Camiseta Conforto</h5>
            <p className="card-text">
              Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o
              verão. Modelagem unissex.
            </p>
            <p className="fw-bold">R$ 70,00</p>
            <a
              href="#"
              className="btn btn-primary lilacButton rounded-0 border-0"
            >
              Ver mais
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6 col-12 pb-4">
        <div className="card">
          <img
            src={pantsMobile}
            className="d-block d-md-none"
            alt="Modelo feminina vestindo blusa marrom, calça bege, par de sapatos altos na cor branca, cordão e pulseira, em um ambiente aberto com chão de terra e matos secos."
          />
          <img
            src={pantsTablet}
            className="d-none d-md-block d-xl-none"
            alt="Modelo feminina vestindo blusa marrom, calça bege, par de sapatos altos na cor branca, cordão e pulseira, em um ambiente aberto com chão de terra e matos secos."
          />
          <img
            src={pants}
            className="d-none d-xl-block"
            alt="Modelo feminina vestindo blusa marrom, calça bege, par de sapatos altos na cor branca, cordão e pulseira, em um ambiente aberto com chão de terra e matos secos."
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">Calça Alfaiataria</h5>
            <p className="card-text">
              Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!
            </p>
            <p className="fw-bold">R$ 180,00</p>
            <a
              href="#"
              className="btn btn-primary lilacButton rounded-0 border-0"
            >
              Ver mais
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6 col-12 pb-4">
        <div className="card">
          <img
            src={tennisShoesMobile}
            className="d-block d-md-none"
            alt="Foco nos pés de modelo usando par de tênis e meia na cor branca, e calça na cor preta, pisando em uma poça de água."
          />
          <img
            src={tennisShoesTablet}
            className="d-none d-md-block d-xl-none"
            alt="Foco nos pés de modelo usando par de tênis e meia na cor branca, e calça na cor preta, pisando em uma poça de água."
          />
          <img
            src={tennisShoes}
            className="d-none d-xl-block"
            alt="Foco nos pés de modelo usando par de tênis e meia na cor branca, e calça na cor preta, pisando em uma poça de água."
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">Tênis Chunky</h5>
            <p className="card-text">
              Snicker casual com solado mais alto e modelagem robusta. Modelo
              unissex.
            </p>
            <p className="fw-bold">R$ 250,00</p>
            <a
              href="#"
              className="btn btn-primary lilacButton rounded-0 border-0"
            >
              Ver mais
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6 col-12 pb-4">
        <div className="card">
          <img
            src={jacketMobile}
            className="d-block d-md-none"
            alt="Modelo masculino vestindo toca e calça na cor preta, jaqueta jeans azul, blusa branca e cordão dourado, em um fundo branco."
          />
          <img
            src={jacketTablet}
            className="d-none d-md-block d-xl-none"
            alt="Modelo masculino vestindo toca e calça na cor preta, jaqueta jeans azul, blusa branca e cordão dourado, em um fundo branco."
          />
          <img
            src={jacket}
            className="d-none d-xl-block"
            alt="Modelo masculino vestindo toca e calça na cor preta, jaqueta jeans azul, blusa branca e cordão dourado, em um fundo branco."
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">Jaqueta Jeans</h5>
            <p className="card-text">
              Modelo unissex oversized com gola de camurça. Atemporal e
              autêntica!
            </p>
            <p className="fw-bold">R$ 150,00</p>
            <a
              href="#"
              className="btn btn-primary lilacButton rounded-0 border-0"
            >
              Ver mais
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6 col-12 pb-4">
        <div className="card">
          <img
            src={glassesMobile}
            className="d-block d-md-none"
            alt="Modelo masculino com blusa branca e um par de óculos de lentes transparentes arredondadas, utilizando um notebook, com um cachorro poodle branco no seu colo, e em um fundo branco."
          />
          <img
            src={glassesTablet}
            className="d-none d-md-block d-xl-none"
            alt="Modelo masculino com blusa branca e um par de óculos de lentes transparentes arredondadas, utilizando um notebook, com um cachorro poodle branco no seu colo, e em um fundo branco."
          />
          <img
            src={glasses}
            className="d-none d-xl-block"
            alt="Modelo masculino com blusa branca e um par de óculos de lentes transparentes arredondadas, utilizando um notebook, com um cachorro poodle branco no seu colo, e em um fundo branco."
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">Óculos Redondo</h5>
            <p className="card-text">
              Armação metálica em grafite com lentes arredondadas. Sem erro!
            </p>
            <p className="fw-bold">R$ 120,00</p>
            <a
              href="#"
              className="btn btn-primary lilacButton rounded-0 border-0"
            >
              Ver mais
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6 col-12 pb-4">
        <div className="card">
          <img
            src={handbagMobile}
            className="d-block d-md-none"
            alt="Cintura, pernas e pés de modelo feminina vestindo sobretudo de cor predominante bege com detalhes em tom vermelho e escuro, com calça e par de sapatos na cor preta, segurando bolsa na cor bege, com fundo de prédio."
          />
          <img
            src={handbagTablet}
            className="d-none d-md-block d-xl-none"
            alt="Cintura, pernas e pés de modelo feminina vestindo sobretudo de cor predominante bege com detalhes em tom vermelho e escuro, com calça e par de sapatos na cor preta, segurando bolsa na cor bege, com fundo de prédio."
          />
          <img
            src={handbag}
            className="d-none d-xl-block"
            alt="Cintura, pernas e pés de modelo feminina vestindo sobretudo de cor predominante bege com detalhes em tom vermelho e escuro, com calça e par de sapatos na cor preta, segurando bolsa na cor bege, com fundo de prédio."
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">Bolsa coringa</h5>
            <p className="card-text">
              Bolsa camel em couro sintético de alta duração. Ideal para
              acompanhar você por uma vida!
            </p>
            <p className="fw-bold">R$ 120,00</p>
            <a
              href="#"
              className="btn btn-primary lilacButton rounded-0 border-0"
            >
              Ver mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
