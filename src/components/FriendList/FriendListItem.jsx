import './FriendList.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
      <div className="friend-item">
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p className={clsx('status', { 'status-online': isOnline, 'status-offline': !isOnline })}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    );
  }