import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendsList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import userData from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friendsData from './components/FriendsList/friends.json';
import transactionsData from './components/TransactionHistory/transactions.json';

export default function App() {
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
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
}
