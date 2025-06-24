import { createTheme, Theme } from '@mui/material/styles';

export interface ThemeConfig {
  name: string;
  description: string;
  primary: string;
  secondary: string;
  background: string;
  paper: string;
  textPrimary: string;
  textSecondary: string;
  accent1: string;
  accent2: string;
}

export const themeConfigs: ThemeConfig[] = [
  // DARK THEMES (5)
  {
    name: 'Gold Standard',
    description: 'Classic gold elegance on dark',
    primary: '#D4AF37',
    secondary: '#FFD700',
    background: '#000000',
    paper: '#1a1a1a',
    textPrimary: '#ffffff',
    textSecondary: '#cccccc',
    accent1: '#B8860B',
    accent2: '#DAA520'
  },
  {
    name: 'Cyber Punk',
    description: 'Neon green futuristic hacker',
    primary: '#00ff41',
    secondary: '#ff0080',
    background: '#0a0a0a',
    paper: '#1a1a2e',
    textPrimary: '#00ff41',
    textSecondary: '#b3b3b3',
    accent1: '#39ff14',
    accent2: '#ff073a'
  },
  {
    name: 'Deep Ocean',
    description: 'Blue depths and mystery',
    primary: '#1e90ff',
    secondary: '#00bfff',
    background: '#0c1829',
    paper: '#1a2332',
    textPrimary: '#e6f3ff',
    textSecondary: '#a6c8ff',
    accent1: '#4169e1',
    accent2: '#87ceeb'
  },
  {
    name: 'Phoenix Fire',
    description: 'Red flames and energy',
    primary: '#ff4500',
    secondary: '#ff6347',
    background: '#1a0a00',
    paper: '#2d1b1b',
    textPrimary: '#ffe4e1',
    textSecondary: '#ffb3a6',
    accent1: '#dc143c',
    accent2: '#ff7f50'
  },
  {
    name: 'Royal Purple',
    description: 'Luxurious purple majesty',
    primary: '#9370db',
    secondary: '#ba55d3',
    background: '#0f0a1a',
    paper: '#1e1a2e',
    textPrimary: '#f0e6ff',
    textSecondary: '#d1b3ff',
    accent1: '#8a2be2',
    accent2: '#dda0dd'
  },

  // LIGHT THEMES (5)
  {
    name: 'Emerald Forest',
    description: 'Natural green on clean white',
    primary: '#228b22',
    secondary: '#32cd32',
    background: '#ffffff',
    paper: '#f8fff8',
    textPrimary: '#1a4d1a',
    textSecondary: '#2d662d',
    accent1: '#006400',
    accent2: '#90ee90'
  },
  {
    name: 'Miami Sunset',
    description: 'Pink and teal vibrancy',
    primary: '#ff1493',
    secondary: '#00ced1',
    background: '#ffffff',
    paper: '#fff5fa',
    textPrimary: '#4d1a33',
    textSecondary: '#662d4d',
    accent1: '#ff69b4',
    accent2: '#20b2aa'
  },
  {
    name: 'Arctic Ice',
    description: 'Cool blue minimalism',
    primary: '#4682b4',
    secondary: '#87ceeb',
    background: '#ffffff',
    paper: '#f0f8ff',
    textPrimary: '#1a2d4d',
    textSecondary: '#2d4566',
    accent1: '#5f9ea0',
    accent2: '#b0e0e6'
  },
  {
    name: 'Steampunk Bronze',
    description: 'Industrial copper warmth',
    primary: '#cd853f',
    secondary: '#daa520',
    background: '#ffffff',
    paper: '#fdf5e6',
    textPrimary: '#4d3319',
    textSecondary: '#664426',
    accent1: '#b8860b',
    accent2: '#f4a460'
  },
  {
    name: 'Deep Space',
    description: 'Cosmic purple mystery',
    primary: '#663399',
    secondary: '#9966cc',
    background: '#ffffff',
    paper: '#f5f0ff',
    textPrimary: '#2d1a4d',
    textSecondary: '#4d2d66',
    accent1: '#483d8b',
    accent2: '#dda0dd'
  }
];

export const createCustomTheme = (config: ThemeConfig): Theme => {
  return createTheme({
    palette: {
      mode: config.background === '#ffffff' ? 'light' : 'dark',
      primary: {
        main: config.primary,
      },
      secondary: {
        main: config.secondary,
      },
      background: {
        default: config.background,
        paper: config.paper,
      },
      text: {
        primary: config.textPrimary,
        secondary: config.textSecondary,
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        color: config.textPrimary,
      },
      h2: {
        fontWeight: 700,
        color: config.textPrimary,
      },
      h3: {
        fontWeight: 600,
        color: config.textPrimary,
      },
      h4: {
        fontWeight: 600,
        color: config.textPrimary,
      },
      h5: {
        fontWeight: 600,
        color: config.textPrimary,
      },
      h6: {
        fontWeight: 600,
        color: config.textPrimary,
      },
      body1: {
        color: config.textSecondary,
      },
      body2: {
        color: config.textSecondary,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            fontWeight: 600,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundColor: config.paper,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
    },
  });
};

// Default theme (Gold Standard)
const defaultTheme = createCustomTheme(themeConfigs[0]);

export default defaultTheme; 