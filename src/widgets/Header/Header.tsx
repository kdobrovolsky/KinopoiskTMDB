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
  return (
    <header className={s.container}>
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
      </div>
    </header>
  );
};
