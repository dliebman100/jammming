import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Not<span className="highlight"> Spot</span>ify
        </h1>
        <div className="App">
          {/* <SearchBar /> */}
          <div className="App-playlist">
            {/* <SearchResults /> */}
            {/* <Playlist /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
