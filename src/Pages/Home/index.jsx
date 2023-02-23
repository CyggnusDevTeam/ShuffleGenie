import React, { useContext } from 'react';
// import AppContext from '../../Context/AppContext';
import logo from '../../Img/logo.svg';
import './Home.css';

function Home() {

  // const {
  //   collection,
  // } = useContext(AppContext);

  // useEffect(() => {
  //   const checkURL = () => {
  //     const urlFromLocal = localStorage.getItem('profileURL');
  //     if (urlFromLocal !== null) {
  //       setProfileURL(urlFromLocal)
  //     } else {
  //       setProfileURL(DEFAULT_URL)
  //     }
  //   }
  //   checkURL();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
