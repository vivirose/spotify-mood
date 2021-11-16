import { useState, useEffect } from "react";
import { spotify } from "../api/spotify";

const useMood = () => {



  useEffect(() => {
    (async()=> {
      const playlist = await getPlaylist();
      const songs = await getSongs(playlist);
      const topSong = await getTopSong(songs);
      console.log(playlist)
    })();
    //return topSong
  }, []);


  const getPlaylist = () => {
    return spotify.search("happy", ["playlist"]).then(function (result) {
      const playlistIds = [];
      result.playlists.items.forEach((element) => playlistIds.push(element.id));
      return playlistIds;
    });
  }

  const getSongs = async (playlistIds) => {
    const playlistsSongs = [];
    await Promise.all(playlistIds.map(async (element) => {
      const result = await spotify.getPlaylistTracks(element);

      result.items.forEach(async (item) => {
        playlistsSongs.push(item.track.id)
      });

    }));
    return playlistsSongs;
  }

  const getTopSong = (songs) => {
    const hashmap = songs.reduce( (acc, val) => {
      acc[val] = (acc[val] || 0 ) + 1
      return acc
   },{})
  console.log("topsong", Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b))
  }

  return {
    //topSong
  };
};

export default useMood;
