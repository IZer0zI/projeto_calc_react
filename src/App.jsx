import React, { useState } from 'react';
import IMCForm from './components/IMCForm';
import IMCResult from './components/IMCResult';


function App() {
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calculaIMC = (altura, peso) => {
    const alturaEmMetros = altura / 100;
    const imcValor = peso / (alturaEmMetros * alturaEmMetros);
    setImc(imcValor.toFixed(2));
    setClassificacao(getClassificacao(imcValor));
  };

  const getClassificacao = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 25 && imc < 29.9) return 'Acima do peso';
    if (imc >= 30) return 'Obeso';
    return '';
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <IMCForm onCalculate={calculaIMC} />
      {imc && <IMCResult imc={imc} classificacao={classificacao} />}
    </div>
  );
}

export default App;
