import style from './FriendList.module.css';
import { FriendTitle } from './FriendTitle';

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <FriendTitle key={id} friend={{ name, avatar, isOnline }} />
      ))}
    </ul>
  );
};
