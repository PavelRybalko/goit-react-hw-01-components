import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendsList from "./components/FriendsList";
import TransactionHistory from "./components/TransactionHistory";
import userData from "./user.json";
import statisticalData from './statistical-data.json';
import friendsData from './friends.json';
import transactionsData from './transactions.json';

export default function App(){
	return (
		<div>
			<Profile 
				imageUrl={userData.avatar}
				name={userData.name}
				tag={userData.tag}
				location={userData.location}
				followers={userData.stats.followers}
				views={userData.stats.views}
				likes={userData.stats.likes}
				/>,
			<Statistics 
				title="Upload stats" 
				stats={statisticalData} />,
			<FriendsList 
				friends={friendsData} />,
			<TransactionHistory 
				items={transactionsData} />,
		</div>
		)
};