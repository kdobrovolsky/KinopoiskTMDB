import React, { createContext, useContext } from 'react';
import { useTheme } from '@/common/components/theme/useTheme/useTheme.tsx';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
