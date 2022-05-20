import Profile from './Profile/';
import Statistics from './Statistics/';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory'

import userData from '../data/user.json';
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions'

export const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title={'Upload stats'} stats={data} />
      <FriendList data={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};


