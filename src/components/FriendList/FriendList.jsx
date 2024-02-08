import style from './FriendList.module.css';
import { FriendTitle } from './FriendTitle';

export const FriendList = data => {
  const { friends } = data;
  return (
    <ul className={style.friendList}>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <FriendTitle key={id} friend={{ name, avatar, isOnline }} />
      ))}
    </ul>
  );
};
