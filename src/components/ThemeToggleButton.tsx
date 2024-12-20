'use client';
import * as Toggle from '@radix-ui/react-toggle';
import { useThemeStore } from '../store/ThemeStore';
import { styled } from '../styles/stitches.config';

const StyledToggle = styled(Toggle.Root, {
    all: 'unset',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '$background',
    color: '$text',
    border: '1px solid $text',
    '&:hover': {
      opacity: 0.8,
    },
    // Estilos para quando o botão estiver "pressionado" (tema escuro)
  '&[data-state=on]': {
    backgroundColor: '$background', // Cor personalizada para tema escuro
    color: '$background',
    borderColor: '$primary',
  },
  // Estilos para quando o botão não estiver "pressionado" (tema claro)
  '&[data-state=off]': {
    backgroundColor: '$background', // Cor personalizada para tema claro
    color: '$text',
    borderColor: '$text',
  },
  });

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <StyledToggle pressed={theme === 'dark'} onPressedChange={toggleTheme}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </StyledToggle>
  );
};