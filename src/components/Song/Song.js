import "./Song.css";

function Artists({ topSongInfo }) {
  return topSongInfo.artists.map((artist) => {
    return <h3 key={artist.name}>{artist.name}</h3>;
  });
}

function Song({ topSongInfo }) {
  console.log("SONG", topSongInfo);

  return (
    <div className="song">
      <img src={topSongInfo.album.images[1].url} alt="album cover"></img>
      <div className="song__info">
        <h2>{topSongInfo.name}</h2>
        <Artists topSongInfo={topSongInfo} />

        <form
          action={topSongInfo.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          <input type="submit" value="Listen on Spotify" className="button"/>
        </form>
      </div>
    </div>
  );
}

export default Song;
