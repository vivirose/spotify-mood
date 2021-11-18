import useMood from "../../hooks/useMood";
import { spotify } from "../../api/spotify";
import { useEffect, useState } from "react/cjs/react.development";

function Artists({topSongInfo}) {
    return topSongInfo.artists.map((artist) => {
       return <h3>{artist.name}</h3>
    });
}

function Song({topSongInfo}) {
  

  console.log("SONG", topSongInfo);

  return (
    <div>
        {/* <img src={topSongInfo.album.images[1].url} alt="album cover"></img> */}
      <h2>{topSongInfo.name}</h2>
      <Artists topSongInfo={topSongInfo} />
      <form action={topSongInfo.external_urls.spotify} target="_blank" rel="noopener noreferrer">
        <input type="submit" value="Listen on Spotify" />
      </form> 
    </div>
  );
}

export default Song;

