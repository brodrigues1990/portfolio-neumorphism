"use client";
import { useEffect, useState } from 'react';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { globalStyles, darkTheme } from '../styles/stitches.config';
import { useThemeStore } from '../store/ThemeStore';

// Função utilitária para obter o tema inicial no cliente
const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light'; // Padrão para SSR

  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return savedTheme || (systemPrefersDark ? 'dark' : 'light');
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    globalStyles(); // Aplica os estilos globais
    document.body.classList.toggle(darkTheme, theme === 'dark');
    const initialTheme = getInitialTheme();
    useThemeStore.setState({ theme: initialTheme });
    setHasMounted(true);
  }, [theme]);

  // Evita renderização até que o tema esteja sincronizado
  if (!hasMounted) return null;

  return <Theme appearance={theme}>{children}</Theme>;
};