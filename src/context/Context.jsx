import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState('');
  const [searchUsername, setSearchUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetching() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`https://codeforces.com/api/user.info?handles=${searchUsername}`);
        const val = await res.json();
        console.log(val);
        if (val.status === 'OK') {
          setData(val.result[0]);
          setUsername('')
        } else {
          setError(val.comment);
          setData(null);
          setUsername('')
        }
      } catch (e) {
        setError('Error occurred while fetching');
        setData(null);
      }
      setLoading(false);
    }

    if (searchUsername) {
      fetching();
    }
  }, [searchUsername]);

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        setData,
        data,
        username,
        setUsername,
        searchUsername,
        setSearchUsername,
        error,
        setError,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
