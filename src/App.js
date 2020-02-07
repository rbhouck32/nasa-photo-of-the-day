import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PostCard from "./components/PostCard/PostCard";
import BottomRow from "./components/BottomRow/BottomRow";
import axios from "axios";

function App() {
  // Making API calls
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=4HxMz0LDssTvA9zzxGdgjDEwyJWwpXmu6Tv1NYkd"
      )
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  }, []);
  console.log(data);
  if (!data) return <h3>Loading...</h3>;
  return (
    <div className="App">
      <Header />
      <PostCard data={data} />
      <BottomRow data={data} />
    </div>
  );
}

export default App;
