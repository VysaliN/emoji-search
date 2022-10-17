import React, { useEffect, useState } from "react";
import EmojiData from "./emoji.json";
import "./emoji.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = EmojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);
  return (
    <div>
      <center>
        <h1> Emoji </h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search emoji"
        />
      </center>
      {data.map((emoji) => (
        <div key={emoji.title}>
          {emoji.symbol} {emoji.title}
        </div>
      ))}
    </div>
  );
};
export default App;
