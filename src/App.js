import React, { Component } from 'react';
 
import HomePage from "./screens/home/home";
import Header from "./screens/header/header"
class App extends Component{
  render(){
    return(

      <div>
          <Header />
          < HomePage />
      </div>
      )
  }
}

export default App;
