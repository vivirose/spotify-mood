import React, { useState } from "react";
import MoodPicker from "../MoodPicker/MoodPicker";
import Song from "../Song/Song";
import useMood from "../../hooks/useMood";
import "./Finder.css"

function Finder() {
  const [currentMood, setCurrentMood] = useState("Happy");
  const [showSong, setShowSong] = useState(false);

  const { topSongInfo } = useMood(currentMood);
  const onPick = (e) => {
    let mood = e.target.value;
    setCurrentMood(mood);
    setShowSong(true)
  };
  return (
    <div className="finder">
      <div className="finder__mood">
        <h1>How are you feeling?</h1>
        <MoodPicker onPick={onPick} />
      </div>
      {showSong && <Song topSongInfo={topSongInfo} />}
    </div>
  );
}

export default Finder;
