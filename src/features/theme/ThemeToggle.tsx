import s from './ThemeToggle.module.css';
import { useThemeContext } from '@/common/components/theme';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className={s.themeToggle}
      title={isDark ? 'Светлая тема' : 'Темная тема'}
    >
      <span className={s.icon}>{isDark ? '☀️' : '🌙'}</span>
    </button>
  );
};
