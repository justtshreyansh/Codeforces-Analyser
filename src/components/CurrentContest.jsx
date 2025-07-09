import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import './CurrentContest.css';

const formatDuration = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  return `${hrs}h ${mins}m`;
};

const formatTimeRemaining = (seconds) => {
  if (seconds <= 0) return 'Ended';
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs}h ${mins}m ${secs}s left`;
};

const CurrentContest = () => {
  const { runningContest } = useContext(Context);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="current-contest">
      <h2 className="current-title">Current Contests</h2>
      {runningContest && runningContest.length > 0 ? (
        runningContest.map((contest, index) => {
          const startDate = new Date(contest.startTimeSeconds * 1000);
          const endTime = (contest.startTimeSeconds + contest.durationSeconds) * 1000;
          const timeLeftSeconds = Math.floor((endTime - now) / 1000);

          // Construct Codeforces contest URL
          const contestUrl = `https://codeforces.com/contest/${contest.id}`;

          return (
            <div key={index} className="contest-card">
              <a
                href={contestUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contest-name-link"
              >
                {contest.name}
              </a>
              <p className="contest-start-time">Started at: {startDate.toLocaleString()}</p>
              <p className="contest-duration">Duration: {formatDuration(contest.durationSeconds)}</p>
              <p className="contest-time-left">Time Remaining: {formatTimeRemaining(timeLeftSeconds)}</p>
            </div>
          );
        })
      ) : (
        <p className="no-contest">No contests are currently running.</p>
      )}
    </div>
  );
};

export default CurrentContest;
