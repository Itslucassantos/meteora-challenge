import React from 'react';
import shirtsCategoryDesktop from '../../assets/Desktop/categorias/categoria-camiseta.png';
import bagsCategoryDesktop from '../../assets/Desktop/categorias/categoria-bolsa.png';
import shoesCategoryDesktop from '../../assets/Desktop/categorias/categoria-calcados.png';
import pantsCategoryDesktop from '../../assets/Desktop/categorias/categoria-calcas.png';
import coatsCategoryDesktop from '../../assets/Desktop/categorias/categoria-casacos.png';
import glassesCategoryDesktop from '../../assets/Desktop/categorias/categoria-oculos.png';

import shirtsCategoryTablet from '../../assets/Tablet/categorias/categoria-camiseta.png';
import bagsCategoryTablet from '../../assets/Tablet/categorias/categoria-bolsas.png';
import shoesCategoryTablet from '../../assets/Tablet/categorias/categoria-calcados.png';
import pantsCategoryTablet from '../../assets/Tablet/categorias/categoria-calcas.png';
import coatsCategoryTablet from '../../assets/Tablet/categorias/categoria-casacos.png';
import glassesCategoryTablet from '../../assets/Tablet/categorias/categoria-oculos.png';

import shirtsCategoryMobile from '../../assets/Mobile/categorias/categoria-camiseta.png';
import bagsCategoryMobile from '../../assets/Mobile/categorias/categoria-bolsas.png';
import shoesCategoryMobile from '../../assets/Mobile/categorias/categoria-calcados.png';
import pantsCategoryMobile from '../../assets/Mobile/categorias/categoria-calcas.png';
import coatsCategoryMobile from '../../assets/Mobile/categorias/categoria-casacos.png';
import glassesCategoryMobile from '../../assets/Mobile/categorias/categoria-oculos.png';

const Category = () => {
  return (
    <div className="container row mx-auto g-4">
      <div className="col-6 col-md-4 col-xxl-2">
        <div className="card rounded-0 border-0">
          <img
            className="d-md-none d-block"
            src={shirtsCategoryMobile}
            alt="Camiseta masculina de manga na cor verde, com bolso, com detalhe vermelho"
          />
          <img
            className="d-none d-md-block d-xl-none"
            src={shirtsCategoryTablet}
            alt="Camiseta masculina de manga na cor verde, com bolso, com detalhe vermelho"
          />
          <img
            className="d-none d-xl-block"
            src={shirtsCategoryDesktop}
            alt="Camiseta masculina de manga na cor verde, com bolso, com detalhe vermelho"
          />
          <div className="card-body bg-black text-bg-dark">
            <p className="card-text text-center">Camisetas</p>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-4 col-xxl-2">
        <div className="card rounded-0 border-0">
          <img
            className="d-md-none d-block"
            src={bagsCategoryMobile}
            alt="Bolsas"
          />
          <img
            className="d-none d-md-block d-xl-none"
            src={bagsCategoryTablet}
            alt="Bolsas"
          />
          <img
            className="d-none d-xl-block"
            src={bagsCategoryDesktop}
            alt="Bolsas"
          />
          <div className="card-body bg-black text-bg-dark">
            <p className="card-text text-center">Bolsas</p>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-4 col-xxl-2">
        <div className="card rounded-0 border-0">
          <img
            className="d-md-none d-block"
            src={shoesCategoryMobile}
            alt="Calçados"
          />
          <img
            className="d-none d-md-block d-xl-none"
            src={shoesCategoryTablet}
            alt="Calçados"
          />
          <img
            className="d-none d-xl-block"
            src={shoesCategoryDesktop}
            alt="Calçados"
          />
          <div className="card-body bg-black text-bg-dark">
            <p className="card-text text-center">Calçados</p>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-4 col-xxl-2">
        <div className="card rounded-0 border-0">
          <img
            className="d-md-none d-block"
            src={pantsCategoryMobile}
            alt="Calças"
          />
          <img
            className="d-none d-md-block d-xl-none"
            src={pantsCategoryTablet}
            alt="Calças"
          />
          <img
            className="d-none d-xl-block"
            src={pantsCategoryDesktop}
            alt="Calças"
          />
          <div className="card-body bg-black text-bg-dark">
            <p className="card-text text-center">Calças</p>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-4 col-xxl-2">
        <div className="card rounded-0 border-0">
          <img
            className="d-md-none d-block"
            src={coatsCategoryMobile}
            alt="Casacos"
          />
          <img
            className="d-none d-md-block d-xl-none"
            src={coatsCategoryTablet}
            alt="Casacos"
          />
          <img
            className="d-none d-xl-block"
            src={coatsCategoryDesktop}
            alt="Casacos"
          />
          <div className="card-body bg-black text-bg-dark">
            <p className="card-text text-center">Casacos</p>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-4 col-xxl-2">
        <div className="card rounded-0 border-0">
          <img
            className="d-md-none d-block"
            src={glassesCategoryMobile}
            alt="Óculos"
          />
          <img
            className="d-none d-md-block d-xl-none"
            src={glassesCategoryTablet}
            alt="Óculos"
          />
          <img
            className="d-none d-xl-block"
            src={glassesCategoryDesktop}
            alt="Óculos"
          />
          <div className="card-body bg-black text-bg-dark">
            <p className="card-text text-center">Óculos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
