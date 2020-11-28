import s from './FriendsList.module.css';

export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={
          isOnline
            ? { backgroundColor: '#67AC5B' }
            : { backgroundColor: '#EC5F58' }
        }
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
