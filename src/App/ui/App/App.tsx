import '@/App.css';
import s from './App.module.css';
import { ToastContainer } from 'react-toastify';
import { LianerProgress } from '@/shared';
import { Footer, Header } from '@/widgets';
import { Routing } from '@/App';
import { ThemeProvider } from '@/common';

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
