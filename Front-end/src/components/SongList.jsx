import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  //let items = 5;
  //items += 5; //incrementing items to show more songs
  const [items, setitems] = useState(5);
  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          setitems(items + 5);
          //   items += 5;
        }}
      >
        See More
      </p>
    </div>
  );
};

export default SongList;
