import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Content from "./Component/Content.js"
class App extends React.Component{
	render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello World^^ Pham Minh Tuan</h1>
          <Content  title="Hello World"/>
        </header>
      </div>
    );
  }
}

export default App;
