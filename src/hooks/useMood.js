import { useState, useEffect } from "react";
import { spotify } from "../api/spotify";

const useMood = () => {

  const [topSongInfo, setTopSongInfo] = useState({name: ""});
  console.log("topSongInfo", topSongInfo)

  useEffect(() => {
    (async () => {
      const playlist = await getPlaylist();
      const songs = await getSongs(playlist);
      const topSongId = await getTopSong(songs);
      const topSongInfo = await getTrackInfo(topSongId);
      console.log("topSongInfo2", topSongInfo)
      setTopSongInfo(topSongInfo)
    })();
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
    const hashmap = songs.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1
      return acc
    }, {})
    return Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b)
  }

  const getTrackInfo = (topSongId) => {
    return spotify.getTrack(topSongId).then(function (result) {
      console.log("id", topSongId)
      console.log(result);
      return result
    });
  }

  return {
    topSongInfo
  };
};

export default useMood;
