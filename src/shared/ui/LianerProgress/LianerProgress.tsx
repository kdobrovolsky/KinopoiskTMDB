import { useSelector } from 'react-redux';
import { selectAppStatus } from '@/App/model/appSlice.ts';
import s from './LianerProgress.module.css';

export const LianerProgress = () => {
  const status = useSelector(selectAppStatus);

  if (status !== 'loading') {
    return null;
  }
  return (
    <div className={s.linearProgress}>
      <div className={s.progressBar}>
        <div className={s.progressBar__fill}></div>
      </div>
    </div>
  );
};
