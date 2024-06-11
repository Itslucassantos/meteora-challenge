import React from 'react';
import './Information.css';

const Information = () => {
  return (
    <section className="pb-4 bg-black text-white">
      <h2 className="text-center">Conheça todas as nossas facilidades</h2>
      <div className="d-flex flex-column align-items-center gap-3 flex-lg-row justify-content-center px-3">
        <div className="divs-facilidades d-flex align-items-center">
          <div>
            <i className="bi bi-x-diamond fs-1 text-yellow"></i>
          </div>
          <div>
            <div className="ms-3 mb-1 text-yellow">PAGUE PELO PIX</div>
            <div className='smaller-text ms-3'>Ganhe 5% OFF em pagamentos via PIX</div>
          </div>
        </div>
        <div className="divs-facilidades d-flex align-items-center">
          <div>
            <i className="bi bi-arrow-repeat fs-1 text-yellow"></i>
          </div>
          <div>
            <div className="ms-3 mb-1 text-yellow">TROCA GRÁTIS</div>
            <div className='smaller-text ms-3'>Fique livre para trocar em até 30 dias.</div>
          </div>
        </div>
        <div className="divs-facilidades d-flex align-items-center">
          <div>
            <i className="bi bi-flower1 fs-1 text-yellow"></i>
          </div>
          <div>
            <div className="ms-3 mb-1 text-yellow">SUSTENTABILIDADE</div>
            <div className='smaller-text ms-3'>Moda responsável, que respeita o meio ambiente.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
