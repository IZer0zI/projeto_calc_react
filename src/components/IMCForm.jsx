import React, { useState } from 'react';

const IMCForm = ({ onCalculate }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const identificador = (e) => {
        e.preventDefault();
        onCalculate(Number(altura), Number(peso));
    };

    return (
        <form onSubmit={identificador}>
            <div>
                <label>
                    Altura (cm):
                    <input
                        type="number"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Peso (kg):
                    <input
                        type="number"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Calcular o IMC</button>
        </form>
    );
};

export default IMCForm;
