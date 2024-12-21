import { create } from 'zustand';
import { darkTheme } from '../styles/stitches.config';

type ThemeState = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.body.classList.toggle(darkTheme, newTheme === 'dark');
      return { theme: newTheme };
    });
  },
}));

