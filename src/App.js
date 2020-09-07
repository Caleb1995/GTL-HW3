import React from 'react';
import Navitems from './components/nav-items'
import Imagecard from './components/Imagecard'
import Searchtext from './components/searchtext'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="container">
          <Navitems text="Halk" />
          <div style={{ borderBottom: "5px solid white", fontSize: "2rem" }}>
            <Navitems text="Marvel" />
          </div>
          <Navitems text="Venom" />

        </div>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Searchtext />
      </div>

      <div className="arrange">
        <Imagecard imgsource={process.env.PUBLIC_URL + '/venom-1.jpg'} />
        <Imagecard imgsource={process.env.PUBLIC_URL + './hulk-1.jpg'} />
        <Imagecard imgsource={process.env.PUBLIC_URL + 'venom-2.jpg'} />
      </div>
    </div>
  );
}

export default App;
