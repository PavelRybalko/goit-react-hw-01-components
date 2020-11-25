import FriendsListItem from "./FriendsListItem";

export default function FriendsList({friends}){
	return (
		<ul class="friend-list">
			{friends.map(el=>(
				<FriendsListItem 
					id={el.id}
					avatar={el.avatar}
					name={el.name}
					isOnline={el.isOnline}
				/>
				)
			)}
		</ul>
		)
}