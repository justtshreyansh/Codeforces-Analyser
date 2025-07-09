import React, { useContext } from 'react';
import { Context } from '../context/Context';
import './Profile.css';

const Profile = () => {
  const { data, loading, error } = useContext(Context);

  if (loading) {
    return (
      <div className="profile-container">
        <p className="profile-message">Searching user data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-container">
        <p className="profile-error">User not found</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="profile-container">
        <p className="profile-message">Enter a username to see profile details</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2 className="profile-title">Codeforces Profile</h2>

      <p className="profile-info">
        <strong>Handle:</strong>{' '}
        {data.handle ? (
          <a
            href={`https://codeforces.com/profile/${data.handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            {data.handle}
          </a>
        ) : (
          'No data'
        )}
      </p>

      {data.rank && (
        <p className="profile-info">
          <strong>Rank:</strong> {data.rank}
        </p>
      )}

      {data.maxRank && (
        <p className="profile-info">
          <strong>Max Rank:</strong> {data.maxRank}
        </p>
      )}

      {data.rating !== undefined && (
        <p className="profile-info">
          <strong>Rating:</strong> {data.rating}
        </p>
      )}

      {data.contribution !== undefined && (
        <p className="profile-info">
          <strong>Contribution:</strong> {data.contribution}
        </p>
      )}

      {data.maxRating !== undefined && (
        <p className="profile-info">
          <strong>Max Rating:</strong> {data.maxRating}
        </p>
      )}

      {data.avatar ? (
        <img className="profile-avatar" src={data.avatar} alt="User avatar" />
      ) : (
        <p className="profile-info">No avatar available</p>
      )}
    </div>
  );
};

export default Profile;
