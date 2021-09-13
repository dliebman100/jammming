import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

class Playlist extends React.Component {
  render() {
    return (
      <div class="Playlist">
        <input defaultValue={"New Playlist"} />
        <TrackList tracks={this.props.playlistTracks} />
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
