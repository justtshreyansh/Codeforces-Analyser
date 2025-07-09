import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState('');
  const [searchUsername, setSearchUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  

  const [futureContest, setFutureContest] = useState([]);
  const [pastContest, setPastContest] = useState([]);
  const [runningContest, setRunningContest] = useState([]);

  useEffect(() => {
    async function fetchingContestData() {
      try {
        const res = await fetch("https://codeforces.com/api/contest.list");
        const val = await res.json();

        if (val.status === "OK") {
          const contests = val.result;
          setFutureContest(contests.filter(c => c.phase === "BEFORE"));
          setRunningContest(contests.filter(c => c.phase === "CODING"));
          setPastContest(contests.filter(c => c.phase === "FINISHED"));
        } else {
          console.error("Failed to fetch contests", val.comment);
          setFutureContest([]);
          setRunningContest([]);
          setPastContest([]);
        }
      } catch (e) {
        console.log("Error occurred while fetching contests", e);
        setFutureContest([]);
        setRunningContest([]);
        setPastContest([]);
      }
    }
    fetchingContestData();
  }, []);

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
        pastContest,
        setPastContest,
        futureContest,
        setFutureContest,
        runningContest,
        setRunningContest
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
