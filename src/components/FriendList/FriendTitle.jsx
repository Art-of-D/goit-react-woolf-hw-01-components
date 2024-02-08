import style from './FriendList.module.css';

export const FriendTitle = data => {
  const { avatar, name, isOnline } = data.friend;
  return (
    <li className={style.item}>
      <span className={isOnline ? style.statusOn : style.statusOff}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};
