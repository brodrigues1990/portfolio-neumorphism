import { create } from 'zustand';
import { darkTheme } from '../styles/stitches.config';

type ThemeState = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const savedThemeLocal = localStorage.getItem('theme') as 'light' | 'dark' | null;
const systemPrefers = window.matchMedia("(prefers-color-scheme: dark)").matches;

export const useThemeStore = create<ThemeState>((set) => ({
  theme: savedThemeLocal || (systemPrefers ? 'dark' : 'light'),
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.body.classList.toggle(darkTheme, newTheme === 'dark');
      return { theme: newTheme };
    });
  },
}));
