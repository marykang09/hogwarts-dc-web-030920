import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";

import HogsContainer from './HogsContainer'
import Settings from './Settings'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogs,
      showGreased: false,
      sortBy: ""
    }
  }

  changeFilter = (event) => {
    console.log(event.target.checked)
    this.setState({
      showGreased: event.target.checked
    })
  }

  changeSort = (event) => {
    let sortedHogs
    if (event.target.name === "sortbyname"){
      sortedHogs = this.state.hogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name))
    } else if (event.target.name === "sortbyweight"){
      sortedHogs = this.state.hogs.sort((hog1, hog2) => hog1.weight - hog2.weight)
    }

    this.setState({
      hogs: sortedHogs,
      sortBy: event.target.name
    })
  }

  render() {
    let hogsToShow
    if(this.state.showGreased){
      hogsToShow = this.state.hogs.filter(hog => hog.greased)
    } else {
      hogsToShow = this.state.hogs
    }

    return (
      <div className="App">
        <Nav />
        <Settings 
          changeFilter={this.changeFilter}
          sortBy={this.state.sortBy}
          changeSort={this.changeSort} />
        <HogsContainer 
          hogs={hogsToShow} />
        {/* <HelloWorld /> */}
      </div>
    );
  }

}

export default App;
