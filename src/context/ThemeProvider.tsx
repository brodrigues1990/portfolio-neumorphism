"use client";
import { useEffect } from 'react';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { globalStyles, darkTheme } from '../styles/stitches.config';
import { useThemeStore } from '../store/ThemeStore';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    globalStyles(); // Aplica os estilos globais
    document.body.classList.toggle(darkTheme, theme === 'dark');
  }, [theme]);

  return <Theme appearance={theme}>{children}</Theme>;
};