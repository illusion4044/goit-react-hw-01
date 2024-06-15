import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
console.log(css)

export default function FriendList({ friends }) {
  return (
<<<<<<< HEAD
    <div className="friendListContainer">
=======
    <div className={css.friendListContainer}>
>>>>>>> 06d741a90db3fabffc82b3380c44736956e566b4
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
