import React, { useEffect, useState } from 'react';
import GenderReveal from './GenderReveal';

const GenderRevealPage = () => {
  const [revealed, setRevealed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const revealGender = () => {
    setRevealed(true);
  };

  return (
    <div>
      <h1>Revelação de Gênero</h1>      
        <>
          {revealed ? (
            <h2 className="gender-reveal-text">É uma menina!</h2>
          ) : (
            <GenderReveal />
          )}
        </>
    </div>
  );
};

export default GenderRevealPage;
