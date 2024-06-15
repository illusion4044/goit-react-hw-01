import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
console.log(css)

export default function FriendList({ friends }) {
  return (
    <div className={css.friendListContainer}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </div>
  );
}
