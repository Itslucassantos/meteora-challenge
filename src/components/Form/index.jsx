import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <form className="container my-3 text-center my-xl-5 p-3 border border-secondary div-facilidades mx-auto">
      <h5>
        Quer receber nossas novidades, promoções exclusivas e 10% OFF na
        primeira compra? Cadastre-se!
      </h5>
      <div className="input-group my-3">
        <input
          className="form-control border-secondary  rounded-0"
          type="email"
          placeholder="Digite seu e-mail"
          aria-label="Digite seu e-mail"
        />
        <button
          className="btn btn-primary rounded-0 lilacButton border-0"
          type="button"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;
