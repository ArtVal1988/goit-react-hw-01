import React from 'react';
import Profile from './Profile/Profile';
import styles from './App.module.css';

const user = {
  name: 'Jeffrey Lebowski',
  tag: 'TheDude',
  location: 'Los Angeles, USA',
  avatar: 'https://i.gifer.com/OjvK.gif',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const App = () => (
  <div className={styles.container}>
    <Profile {...user} />
  </div>
);

export default App;
