import React, { useContext } from 'react';
import { Context } from '../context/Context';
import './CodeForcesForm.css';

const CodeForcesForm = () => {
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
    setUsername('');
  }

  return (
    <div className="form-container">
      <form onSubmit={submitHandler} className="form-wrapper">
        <input
          type="text"
          className="form-input"
          placeholder="Your Codeforces ID"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          autoComplete="off"
        />
        <button type="submit" className="form-button">
          Find user
        </button>
      </form>
    </div>
  );
};

export default CodeForcesForm;
