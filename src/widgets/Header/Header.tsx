import { useState, useEffect } from 'react';
import { Path } from '@/App/Routing/Routing.tsx';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { ThemeToggle } from '@/features';
import { TMDBLogo } from '@/widgets';

const navItems = [
  { to: Path.Main, label: 'Main' },
  { to: '/category/popular', label: 'Category Movies' },
  { to: Path.FilteredMovies, label: 'Filtered Movies' },
  { to: Path.Search, label: 'Search' },
  { to: Path.Favorites, label: 'Favorites' },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`${s.container} ${scrolled ? s.scrolled : ''}`}>
      <div className={s.headerContent}>
        <NavLink to={Path.Main} className={s.logo}>
          <TMDBLogo />
        </NavLink>

        <nav>
          <ul className={s.list}>
            {navItems.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />

        <div
          className={`${s.burger} ${menuOpen ? s.open : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {menuOpen && (
        <div className={s.mobileMenu}>
          <ul>
            {navItems.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `${s.mobileLink} ${isActive ? s.active : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
