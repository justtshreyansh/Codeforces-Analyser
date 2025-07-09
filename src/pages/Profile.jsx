import React, { useContext } from 'react';
import { Context } from '../context/Context';
import './Profile.css';

const Profile = () => {
  const { data, loading, error } = useContext(Context);

  if (loading) return <p className="profile-loading">Searching user data...</p>;
  if (error) return <p className="profile-error">{error}</p>;
  if (!data) return null;

  return (
    <div className="profile-container">
      <h2 className="profile-title">Codeforces Profile</h2>

      <p className="profile-info">
        <strong>Handle:</strong> {data.handle || 'No data'}
      </p>

      {data.rank ? (
        <p className="profile-info">
          <strong>Rank:</strong> {data.rank}
        </p>
      ) : null}

      {data.maxRank ? (
        <p className="profile-info">
          <strong>Max Rank:</strong> {data.maxRank}
        </p>
      ) : null}

      {data.rating !== undefined ? (
        <p className="profile-info">
          <strong>Rating:</strong> {data.rating}
        </p>
      ) : null}

      {data.contribution !== undefined ? (
        <p className="profile-info">
          <strong>Contribution:</strong> {data.contribution}
        </p>
      ) : null}

      {data.maxRating !== undefined ? (
        <p className="profile-info">
          <strong>Max Rating:</strong> {data.maxRating}
        </p>
      ) : null}

      {data.avatar ? (
        <img className="profile-avatar" src={data.avatar} alt="User avatar" />
      ) : (
        <p className="profile-info">No avatar available</p>
      )}
    </div>
  );
};

export default Profile;
