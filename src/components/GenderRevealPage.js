import React, { useEffect, useState } from 'react';
import GenderReveal from './GenderReveal';
import { motion } from 'framer-motion';

const GenderRevealPage = () => {
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsAnimationComplete(true);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, []);

    const handleBoxClick = () => {
        setIsBoxOpen(true);
    };

    return (
        <div className="gender-reveal-page">
            <h1>Prepare seu coração (e colinho)</h1>
            <h1>Vamos revelar o gênero:</h1>
            {isBoxOpen ? (
                <>
                    <h2 className="gender-reveal-text">É uma menina!</h2>
                    <img src={process.env.PUBLIC_URL + '/imagens/flork-menina.png'} alt="Imagem de Menina" className="gender-reveal-image" />
                </>
            ) : (
                <motion.img
                    src={process.env.PUBLIC_URL + '/imagens/presente-removebg-preview.png'}
                    alt="Imagem de Presente"
                    className={`box ${isAnimationComplete ? 'box-open' : ''}`}
                    onClick={handleBoxClick}
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', duration: 1 }}
                />
            )}
        </div>
    );
};

export default GenderRevealPage;
