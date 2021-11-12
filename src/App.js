import './App.css';
import Login from './components/Login/Login';
import UserContext, { userValues } from './context/auth';
import { getTokenFromUrl } from './components/Spotify/spotify';
import { useState, useEffect } from 'react';
import Finder from './components/Finder/Finder';

const _token = getTokenFromUrl();

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    console.log('token', _token);
    window.location.hash = '';
    
    if (_token){
      setToken(_token);
    
    }
  }, [])
  return (
    <UserContext.Provider value={userValues}>
        {token ? <Finder/> : <Login />}
    </UserContext.Provider>
  );
}

export default App;
