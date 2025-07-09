import { useEffect, useRef, useState } from "react";
import "./github-profile-finder.css";

const GithubProfileFinder = () => {
  const userNameRef = useRef();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchUserGithubDetails = async (userName) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => fetchUserGithubDetails(userNameRef.current.value);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="git-profile-container">
      <div>
        <input
          type="text"
          ref={userNameRef}
          placeholder="Enter github username"
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      <div className="card">
        <img src={user?.avatar_url} alt="avatar" width={200} height={200} />
        <a href={user?.html_url} target="_blank">
          <h2>{user?.login}</h2>
        </a>
        <p>{user?.bio}</p>
      </div>
    </div>
  );
};

export default GithubProfileFinder;
