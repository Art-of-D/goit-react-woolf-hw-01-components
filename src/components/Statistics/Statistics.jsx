import style from './Statistics.module.css';
import { getHex } from '../../utils/color-changer';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={[
              style.statisticsItem,
              title ? null : style.addBorder,
            ].join(' ')}
            style={{ backgroundColor: getHex() }}
            key={id}
          >
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage + '%'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
