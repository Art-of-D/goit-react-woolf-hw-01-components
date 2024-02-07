import style from './Data.module.css';
import {getHex} from '../../utils/color-changer';

export const Data = (data) => {
    return (
        <section className={style.statistics}>
            {data.title ? <h2 className={style.title}>{data.title}</h2> : null}

            <ul className={style.statList}>
                {data.stats.map(({id, label, percentage}) =>
                (
                    <li className={[style.statisticsItem, data.title ? null: style.addBorder].join(' ')} style={{backgroundColor: getHex()}} key={id}>
                        <span className={style.label}>{label}</span>
                        <span className={style.percentage}>{percentage + "%"}</span>
                    </li>
                )
                )}
            </ul>
        </section>
    );
}