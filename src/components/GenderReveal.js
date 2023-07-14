import React, { useState } from 'react';

const GenderReveal = () => {
  const [revealed, setRevealed] = useState(false);

  const revealGender = () => {
    setRevealed(true);
  };

  return (
    <div>
      {revealed ? (
        <h2 className="gender-reveal-text">É uma menina!</h2>
      ) : (
        <button onClick={revealGender}>Clique para revelar o gênero</button>
      )}
    </div>
  );
};

export default GenderReveal;
