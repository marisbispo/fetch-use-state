import React from 'react';

const Produtos = ({ produto }) => {
  return (
    <div>
      <h1>{produto.nome}</h1>
      <ul>
        <li>{produto.preco}</li>
        <li>{produto.descricao}</li>
        <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
      </ul>
    </div>
  );
};

export default Produtos;
