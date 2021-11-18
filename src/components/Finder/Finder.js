import React, { useEffect, useState } from "react";
import MoodPicker from "../MoodPicker/MoodPicker";
import Song from "../Song/Song";
import useMood from "../../hooks/useMood";

function Finder() {
  const [currentMood, setCurrentMood] = useState("Happy");
  
  const { topSongInfo } = useMood(currentMood);
  const onPick = (e) => {
    let mood = e.target.value;
    setCurrentMood(mood);
  };
  return (
    <div>
      <h1>How are you feeling?</h1>
      <MoodPicker onPick={onPick} />
      <Song topSongInfo={topSongInfo} />
    </div>
  );
}

export default Finder;
