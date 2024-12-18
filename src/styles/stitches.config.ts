import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, theme, createTheme } = createStitches({

    theme: {
        colors: {
            primary: '#4A90E2',
            secondary: '#50E3C2',
            background: '#E0E8F6',
            text: '#333333',
            linkHover: '#0056c1',
        },
        fonts: {
            body: 'Poppins, sans-serif',
        },
        space: {
            sm: '8px',
            md: '16px',
            lg: '24px',
        },
        radii: {
            sm: '4px',
            md: '8px',
        },
        media: {
            // Breakpoints para responsividade
            xs: '(max-width: 480px)',     // Telas extra pequenas (smartphones pequenos)
            sm: '(max-width: 768px)',     // Smartphones e tablets pequenos
            md: '(max-width: 1024px)',    // Tablets e telas menores
            lg: '(max-width: 1200px)',    // Laptops e telas médias
            xl: '(max-width: 1440px)',    // Telas grandes e monitores
            // Preferências do sistema
            prefersReducedMotion: '(prefers-reduced-motion: reduce)', // Usuários que preferem menos animações
            prefersDarkMode: '(prefers-color-scheme: dark)',          // Modo escuro do sistema
            prefersLightMode: '(prefers-color-scheme: light)',        // Modo claro do sistema
            hover: '(hover: hover)',                                  // Dispositivos que suportam hover
            touch: '(hover: none) and (pointer: coarse)',             // Dispositivos touch
        },
    },
});

export const darkTheme = createTheme({
    colors: {
        background: '#1A1A1A',
        text: '#E1E1E1',
    },
});

export const globalStyles = globalCss({
    body: {
        margin: 0,
        padding: 0,
        fontFamily: 'sans-serif',
        backgroundColor: '$background',
        color: '$text',
    },
});
globalStyles();