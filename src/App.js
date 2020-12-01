import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar";
import Content from "./components/content";

const App = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    setSearch("");
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
    setQuery(event.target.value);
  };

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(
        `https://www.breakingbadapi.com/api/characters/?name=${query}`
      );
      const data = await response.json();
      setItems(data);
    };
    fetchItem();
  }, [query]);

  return (
    <div>
      <NavBar
        navbar={items}
        onSearch={handleSearch}
        onEnter={getSearch}
        search={search}
      ></NavBar>
      <div className="container-fluid">
        <Content content={items} search={search}></Content>
      </div>
    </div>
  );
};

export default App;
