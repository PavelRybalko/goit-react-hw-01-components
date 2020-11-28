import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import s from './FriendsList.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.friendsList}>
      {friends.map(el => (
        <FriendsListItem
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
