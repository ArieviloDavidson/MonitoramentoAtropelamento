import React from 'react';
import "./footer.css"
import Logo from "./logo-iprj.png"

const Rodape = () => {
  return (
    <div className='rodape'>
      <div className='logos'>
        <img src={Logo} alt="" className='logo'/>
      </div>
      <p className='nomes'>Desenvolvido por: Julya Matias, Davidson Oliveira e Luis Eduardo</p>
    </div>
  );
};

export default Rodape;