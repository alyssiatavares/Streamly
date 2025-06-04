import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      {/* Item List - Artist */}
      <ItemList
        title="Artists"
        items={10}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />
      {/* Item List - Songs */}
      <ItemList
        title="Songs"
        items={20}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  );
};

export default Main;
