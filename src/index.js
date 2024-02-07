import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/Profile/Profile';
import userData from './data/user.json';
import { Data } from 'components/Data/Data';
import data from './data/data.json';
import { Friend } from 'components/Friend/Friend';
import friends from './data/friends.json';
import {TransactionHistory} from './components/Transactions/TransactionHistory';
import transactions from './data/transactions.json';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile username={userData.username}
            tag={userData.tag}
            location={userData.location}
            avatar={userData.avatar}
            stats={userData.stats}/>
    <Data stats={data}/> 
    <Friend friends={friends} />
    <TransactionHistory items={transactions}/>
  </React.StrictMode>
);

//title="Upload stats"
