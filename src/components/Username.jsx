import React, { useContext } from 'react';
import { Context } from '../context/Context';
import './Username.css';

const Username = () => {
  const {
    username,
    setUsername,
    setSearchUsername,
    error,
    setError,
    setLoading,
  } = useContext(Context);

  function submitHandler(e) {
    e.preventDefault();

    if (username.trim() === '') {
      setError("Please fill the input field");
      return;
    }

    setError('');
    setLoading(true);
    setSearchUsername(username);
  }

  return (
    <div className="username-container">
      <input
        type="text"
        className="username-input"
        placeholder="Your Codeforces ID"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <button className="username-button" onClick={submitHandler}>
        Find user
      </button>

     
    </div>
  );
};

export default Username;
