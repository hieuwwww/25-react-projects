import { useEffect, useState } from "react";
import User from "./user";
import "./styles.css";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("hieuwwww");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
    console.log(data);
  }
  useEffect(() => {
    fetchGithubUserData();
  }, []);
  function handleSubmit() {
    fetchGithubUserData();
  }
  if (loading) {
    return <h1>loading data</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null && !userData.message ? (
        <User user={userData} />
      ) : (
        <div>
          <h1>User not found!!</h1>
          <h2>Try again</h2>
        </div>
      )}
    </div>
  );
}
