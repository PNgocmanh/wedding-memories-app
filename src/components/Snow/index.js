import React, { useEffect } from 'react';
import './Snow.css';

const Snow = () => {
  useEffect(() => {
    const flakesContainer = document.getElementById('flakes-container');

    function createSnowFlake() {
      const flake = document.createElement('div');
      flake.classList.add('flake');
      flake.style.left = `${Math.random() * 100}vw`;
      flake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      flakesContainer.appendChild(flake);

      setTimeout(() => {
        flake.remove();
      }, 5000);
    }

    setInterval(createSnowFlake, 300);
  }, []);

  return <div id="flakes-container" />;
};

export default Snow;
