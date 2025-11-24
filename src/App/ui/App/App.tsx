import '@/App.css';
import { Header } from '@/widgets/Header/Header.tsx';
import { Routing } from '@/App/Routing/Routing.tsx';
import { Footer } from '@/widgets/footer/Footer.tsx';
import s from './App.module.css';
import { ThemeProvider } from '@/common/components/theme';
import { LianerProgress } from '@/common/components/LianerProgress/LianerProgress.tsx';

export const App = () => {
  return (
    <ThemeProvider>
      <div className={s.app}>
        <Header />
        <LianerProgress />
        <main className={s.main}>
          <Routing />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
