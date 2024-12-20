"use client";
import { createContext, useContext, useEffect, useState } from 'react';
import "@radix-ui/themes/styles.css";
import { Theme, Button } from "@radix-ui/themes";
import { darkTheme, globalStyles } from '../styles/stitches.config';

type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Recupera o tema do localStorage, se existir
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
    const initialTheme = systemPrefers ? 'dark' : 'light';
    // Retorna o tema salvo ou 'light' como padrão
    return savedTheme ?? initialTheme;
  });

  useEffect(() => {
    globalStyles(); // Aplica os estilos globais

    // Verifica o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    console.log("tem ou nao no localStorage > "+savedTheme);
    if (savedTheme) {
      // Se existir no localStorage, usa o tema salvo
      setTheme(savedTheme);
    } else {
      // Se não existir, verifica as preferências do sistema e define
      const systemPrefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      const initialTheme = systemPrefers ? 'dark' : 'light';
      //console.log(initialTheme);
      setTheme(initialTheme);
      localStorage.setItem('theme', initialTheme); // Salva a escolha inicial
    }
  }, []);

  useEffect(() => {
    console.log(theme);
    // Aplica o tema alterando a classe no body
    document.body.classList.toggle(darkTheme, theme === 'dark');
    localStorage.setItem('theme', theme); // Salva o tema no localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme appearance={theme}>
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
