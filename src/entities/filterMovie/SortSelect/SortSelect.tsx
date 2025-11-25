import s from './SortSelect.module.css';
import { SORT_OPTIONS } from '@/shared';

type Props = {
  value: string;
  onChange: (sortBy: string) => void;
};

export const SortSelect = ({ value, onChange }: Props) => {
  return (
    <div className={s.filterGroup}>
      <div className={s.filterTitle}>Sort by</div>
      <select className={s.select} value={value} onChange={e => onChange(e.target.value)}>
        {SORT_OPTIONS.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
