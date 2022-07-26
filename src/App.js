import React from 'react';
import Produtos from './Produtos';

const App = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [carregando, setCarregando] = React.useState('');

  async function handleClick(event) {
    setCarregando(true);
    const produto = event.target.innerText;
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
    );
    const json = await response.json();
    console.log(json);
    setProdutos(json);
    setCarregando(false);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
      {carregando && <p>Carregando...</p>}
      {produtos && <Produtos produto={produtos} />}
    </div>
  );
};

export default App;
