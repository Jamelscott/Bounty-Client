import Home from './components/pages/Home';
import Bounty from './components/pages/Bounty';
import Bounties from './components/pages/Bounties';

import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  //state to hold the bounties
  const [bounties, setBounties] = useState([]);
  //use effect to get all of the bounties
  useEffect(() => {
    console.log(process.env.REACT_APP_SERVER_URL);
    axios
      .get(process.env.REACT_APP_SERVER_URL + '/bounties')
      .then((response) => {
        setBounties(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/bounties"
            element={<Bounties bounties={bounties} setBounties={setBounties}/>}
          ></Route>
          <Route
            exact
            path="/bounties/:id"
            element={<Bounty bounties={bounties} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
