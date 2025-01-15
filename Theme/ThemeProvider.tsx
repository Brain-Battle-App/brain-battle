// theme/ThemeProvider.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Appearance } from 'react-native';

const ThemeContext = createContext();

const lightTheme = {
  colors: {
    background: '#F3F3F3',
    text: '#000000',
    white:"#FFFFFF",
    primary:"#51B5FD",
    green:"#43C62F",
    blue:"#006FF50D",
    black_Shade:"#F6F7FA",
    black_gray:"#454D51",
    text_Black:"#111719",
    pink:"#FF5A90",
    red:"#FF3A31",
    yellow:"#FCB810",
    text_gray:"#3D5057"


  
  },
};

const darkTheme = {
  colors: {
    background: '#181818',
    white: '#000000',
    text: '#FFFFFF',
    primary:"#51B5FD",
    text_gray:"#3D5057",
    green:"#43C62F",
    blue:"#006FF50D",
    black_Shade:"#141414",
    black_gray:"#454D51",
    text_Black:"#FFFFFF",
    pink:"#FF5A90",
    red:"#FF3A31",
    yellow:"#FCB810"







  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme
  );

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
    });

    return () => listener.remove();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
