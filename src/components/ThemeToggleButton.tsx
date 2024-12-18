'use client';
import * as Toggle from '@radix-ui/react-toggle';
import { useTheme } from '../context/ThemeProvider';
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
  });

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledToggle pressed={theme === 'dark'} onPressedChange={toggleTheme}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </StyledToggle>
  );
};