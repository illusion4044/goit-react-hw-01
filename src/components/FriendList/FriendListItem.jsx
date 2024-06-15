import css from "./FriendList.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(css.status, {
        [css.statusOnline]: isOnline,
        [css.statusOffline]: !isOnline
      })}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
