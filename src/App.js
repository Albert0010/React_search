import {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Table from "./Table/Table.js";

class App extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
        <>
          <Table/>
        </>
    )
  }
}

export default App;


