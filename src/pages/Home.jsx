import React from 'react';
import CodeForcesForm from '../components/CodeForcesForm';
import Profile from '../components/Profile';
import './Home.css';  // Import CSS for layout

const Home = () => {
  return (
    <div className="home-container">
      <div className="form-wrapper">
        <CodeForcesForm />
      </div>
      <div className="profile-wrapper">
        <Profile />
      </div>
    </div>
  );
};

export default Home;
