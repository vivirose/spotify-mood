import React, { useState, useEffect } from "react";
import { spotify } from "../api/spotify";

const useMood = () => {
  const [playlists, setPlaylists] = useState([]);
  const [songs, setSongs] = useState([])

  useEffect(() => {
    spotify.search("happy", ["playlist"]).then(function (result) {
      const playlistIds = [];
      result.playlists.items.forEach((element) => playlistIds.push(element.id));
      setPlaylists(playlistIds);
    });
  }, []);

  useEffect(() =>{
    playlists.forEach((element) => 
        spotify.getPlaylistTracks(element).then(function (result){
            const playlistsSongs = [];
            console.log("songs", result);
            result.items.forEach((item) => playlists.push(item.id))
            setSongs(playlistsSongs)
            console.log("song ids", songs)
        }))
  }, [playlists])

  return playlists;
};

export default useMood;
