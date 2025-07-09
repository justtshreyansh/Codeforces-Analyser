import React, { useContext } from 'react';
import { Context } from '../context/Context';
import './PastContest.css';

const formatDuration = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  return `${hrs}h ${mins}m`;
};

const PastContest = () => {
  const { pastContest } = useContext(Context);

  if (!pastContest || pastContest.length === 0) {
    return (
      <div className="past-contest">
        <h2 className="past-title">Past Contests</h2>
        <p className="no-contest">No past contests found.</p>
      </div>
    );
  }

  const last10Contests = pastContest.slice(0, 10);

  return (
    <div className="past-contest">
      <h2 className="past-title">Past Contests</h2>
      <div className="contest-list">
        {last10Contests.map((ele, index) => {
          const date = new Date(ele.startTimeSeconds * 1000);
          return (
            <div key={index} className="contest-card">
              <p className="contest-name">
                <a
                  href={ele.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contest-name-link"
                >
                  {ele.name}
                </a>
              </p>
              <p className="contest-start-time">{date.toLocaleDateString(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}</p>
              <p className="contest-duration">Duration: {formatDuration(ele.durationSeconds)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PastContest;
