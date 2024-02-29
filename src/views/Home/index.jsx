// Home.jsx
import React from 'react';
import gymIcon from '../../../src/common/assets/images/gym.jpg'

const Home = () => {
  return (
    <div id="Home">
      <img src={gymIcon} alt='Gym Image' style={{ maxWidth: '100%', height: 'auto',overflow: 'hidden' }} />
    </div>
  );
};

export default Home;
