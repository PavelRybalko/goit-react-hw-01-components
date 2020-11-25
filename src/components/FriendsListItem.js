import PropTypes from 'prop-types';

export default function FriendsListItem({id, avatar, name, isOnline}){
	return (
		<li class="item" key={id}>
		  <span class="status"></span>
		  <img class="avatar" src={avatar} alt={name} width="48" />
		  <p class="name">{name}</p>
		</li>
		)
}

FriendsListItem.propTypes = {
	id: PropTypes.number.isRequired,
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
}