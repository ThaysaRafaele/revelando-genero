import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const GenderRevealButton = () => {
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/revelation" />;
  }

  return (
    <div className="gender-reveal-button-container">
      <h1>Família e amigos, é com muita alegria que eu venho lhes dizer:</h1>
      <h1>Tayler foi promovido a irmão mais velho!</h1>
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/imagens/flork-gravida.png'} alt="Imagem da Grávida" className="gravida-image" />
      </div>
      <button className="gender-reveal-button" onClick={handleClick}>
        Venha descobrir o sexo!
      </button>
    </div>
  );
};

export default GenderRevealButton;
