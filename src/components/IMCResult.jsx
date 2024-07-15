import React from 'react';

const IMCResultado = ({ imc, classificacao }) => {
    return (
        <div>
            <h2>Seu IMC: {imc}</h2>
            <p>Classificação: {classificacao}</p>
        </div>
    );
};

export default IMCResultado;
