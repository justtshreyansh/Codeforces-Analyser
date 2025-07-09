import React, { useContext } from 'react';
import { Context } from '../context/Context';
import './FutureContest.css';

const formatDuration = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  return `${hrs}h ${mins}m`;
};

const FutureContest = () => {
  const { futureContest } = useContext(Context);

  if (!futureContest || futureContest.length === 0) {
    return (
      <div className="future-contest">
        <h2 className="future-title">Upcoming Contests</h2>
        <p className="no-contest">No upcoming contests found.</p>
      </div>
    );
  }

  return (
    <div className="future-contest">
      <h2 className="future-title">Upcoming Contests</h2>
      {futureContest.map((ele, index) => (
        <div key={index} className="contest-card">
          <a
            href={`https://codeforces.com/contest/${ele.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contest-name-link"  // changed here
          >
            {ele.name}
          </a>
          <p className="contest-start-time">
            {new Date(ele.startTimeSeconds * 1000).toLocaleDateString(undefined, {
              weekday: 'long',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
          <p className="contest-duration">Duration: {formatDuration(ele.durationSeconds)}</p>
        </div>
      ))}
    </div>
  );
};

export default FutureContest;
