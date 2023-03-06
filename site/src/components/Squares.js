import React, { useEffect } from "react";

function GenerateSquares() {
  useEffect(() => {
    const squares = document.getElementsByClassName("squares");

    for (let i = 0; i < squares.length; i++) {
      squares[i].style.height = getRandomNum(150, 1) + "px";
      squares[i].style.width = getRandomNum(150, 1) + "px";
      squares[i].style.left = getRandomNum(100, 0) + "vw";
      squares[i].style.animationDuration = getRandomNum(100, 25) + "s";
      squares[i].style.animationDelay = getRandomNum(50, 0) + "s";
    }
  }, []);

  function getRandomNum(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return <div className="squares"></div>;
}

export default GenerateSquares;