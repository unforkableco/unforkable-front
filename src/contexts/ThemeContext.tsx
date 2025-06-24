import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme } from '@mui/material/styles';
import { themeConfigs, createCustomTheme, ThemeConfig } from '../themes/theme';

interface ThemeContextType {
  currentTheme: Theme;
  currentThemeConfig: ThemeConfig;
  setTheme: (themeName: string) => void;
  availableThemes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentThemeName, setCurrentThemeName] = useState<string>('Gold Standard');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('unforkable-theme');
    if (savedTheme && themeConfigs.find(t => t.name === savedTheme)) {
      setCurrentThemeName(savedTheme);
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('unforkable-theme', currentThemeName);
  }, [currentThemeName]);

  const currentThemeConfig = themeConfigs.find(t => t.name === currentThemeName) || themeConfigs[0];
  const currentTheme = createCustomTheme(currentThemeConfig);

  const setTheme = (themeName: string) => {
    const themeExists = themeConfigs.find(t => t.name === themeName);
    if (themeExists) {
      setCurrentThemeName(themeName);
    }
  };

  const value: ThemeContextType = {
    currentTheme,
    currentThemeConfig,
    setTheme,
    availableThemes: themeConfigs,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 