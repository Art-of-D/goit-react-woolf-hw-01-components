import { Profile } from './Profile/Profile';
import userData from '../data/user.json';
import { Data } from './Data/Data';
import data from '../data/data.json';
import { Friend } from './Friend/Friend';
import friends from '../data/friends.json';
import {TransactionHistory} from './Transactions/TransactionHistory';
import transactions from '../data/transactions.json';

export default function App() {
  return (
    <>
      <Profile username={userData.username}
              tag={userData.tag}
              location={userData.location}
              avatar={userData.avatar}
              stats={userData.stats}/>
      <Data stats={data}/> 
      <Friend friends={friends} />
      <TransactionHistory items={transactions}/>
    </>);
}

//title="Upload stats"