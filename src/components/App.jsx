import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friends/FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../dataBase/user.json';
import data from '../dataBase/data.json';
import friends from '../dataBase/friends.json';
import transactions from '../dataBase/transaction.json';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
