import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  //mouse animation funtionnality

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
    button: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "#D65A31",
      mixBlendMode: "difference",
    },
    image: {
      height: 180,
      width: 180,
      x: mousePosition.x - 90,
      y: mousePosition.y - 90,
      backgroundColor: "#D65A31",
      mixBlendMode: "difference",
    }
  }
  const imageEnter = () => setCursorVariant("image");
  const buttonEnter = () => setCursorVariant("button");
  const textEnter = () => setCursorVariant("text");
  const Leave = () => setCursorVariant("default");

  


  return (
    <AppContext.Provider
      value={{
        variants,
        cursorVariant,
        imageEnter,
        buttonEnter,
        textEnter,
        Leave,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };