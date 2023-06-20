import { BrowserRouter as Router, Link, Routes, Route, Navigate} from "react-router-dom";
import Form from "./Form";
import Home from './Home';
import { Recorder } from "timecatjs";

import { Component } from "react";

export default class Record extends Component {
  recorder?: Recorder;
  async componentDidMount() {
    this.recorder = new Recorder();
  }
  async componentWillUnmount() {
    this.recorder?.destroy();
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/record/home">Record Home</Link>
          </li>
          <li>
            <Link to="/record/form">Record Form</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/home" element={ <Home /> }></Route>
          <Route path="/form" element={ <Form /> }></Route>
        </Routes>
      </div>
    );
  }
}
