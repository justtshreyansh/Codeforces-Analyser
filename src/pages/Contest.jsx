import React from 'react';
import FutureContest from '../components/FutureContest';
import PastContest from '../components/PastContest';
import CurrentContest from '../components/CurrentContest';
import './Contest.css';
const Contest = () => {
  return (
    <div className="contest-container">
      <FutureContest />
      <CurrentContest />
      <PastContest />
    </div>
  );
};

export default Contest;
