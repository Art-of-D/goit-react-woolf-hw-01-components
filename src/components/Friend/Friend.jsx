import style from './Friend.module.css';

export const Friend = (data) => {
  return (
    <ul className={style.friendList}>
    {data.friends.map(({avatar, name, isOnline}) =>
      
        <li className={style.item}>
          <span className={isOnline ? style.statusOn : style.statusOff}></span>
          <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={style.name}>{name}</p>
      </li>)}
    </ul>
  );
};
