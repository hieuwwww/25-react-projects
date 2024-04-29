import { useEffect } from "react";
import { useState } from "react";
import Suggestions from "./suggestion";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 0) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }
  function handleClick(event) {
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }
  async function fetchListOfUsers() {
    setLoading(true);
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    if (data) {
      setLoading(false);
      setUsers(data.users.map((userItem) => userItem.firstName));
    }
  }
  useEffect(() => {
    fetchListOfUsers();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(users, filteredUsers);
  return (
    <div className="search-autocomplete-container">
      <input
        name="search-users"
        placeholder="Search users"
        value={searchParam}
        onChange={handleChange}
      />
      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}
