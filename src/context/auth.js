import { createContext} from 'react';
import { getTokenFromUrl } from '../components/Spotify/spotify';

const token = getTokenFromUrl();
export const userValues = {
    token
}
const UserContext = createContext(userValues);

export default UserContext;