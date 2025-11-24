import '@/App.css';
import { Header } from '@/widgets/Header/Header.tsx';
import { Routing } from '@/App/Routing/Routing.tsx';
import { Footer } from '@/widgets/footer/Footer.tsx';
import s from './App.module.css';
import { ThemeProvider } from '@/common/components/theme';
import { LianerProgress } from '@/shared/ui/LianerProgress/LianerProgress.tsx';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <ThemeProvider>
      <div className={s.app}>
        <Header />
        <LianerProgress />
        <main className={s.main}>
          <Routing />
        </main>
        <ToastContainer />
        <Footer />
      </div>
    </ThemeProvider>
  );
};
