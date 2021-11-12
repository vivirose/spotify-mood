import { getTokenFromUrl } from '../components/Spotify/spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const token = getTokenFromUrl();


let spotify = null;
if (token) {
    spotify = new SpotifyWebApi();
    spotify.setAccessToken(token);
    console.log('spotify', spotify);
}

export {
    spotify, token
};
    