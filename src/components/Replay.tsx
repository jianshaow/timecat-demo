import React, { Component } from "react";
import { Player } from "timecatjs";

export default class Replay extends Component {
  player?: Player;
  async componentDidMount() {
    this.player = new Player({
      target: ".timecat-replay"
    });
  }
  async componentWillUnmount() {
    this.player?.destroy()
  }
  render() {
    return (
      <div>
        <h2>Replay</h2>
        <div
          className="timecat-replay"
          style={{ margin: "0 auto", width: "100%", height: "800px" }}
        ></div>
      </div>
    );
  }
}
