import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Content from "./Content.js"
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      status: "Khoi tao",
      start: "Running"
    }
  }
  componentWillMount(){
    console.log("Day la componentWillMount cua App")
  }
  componentDidMount(){
    console.log("Day la componentDidMount cua App")
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("day la ham shouldComponentUpdate cua App");
    return true;
  }
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log("day la ham componentWillUpdate cua App");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("day la ham componentDidUpdate cua App");
  }
  clickUpdate = () => {
    this.setState({
      status: "update thanh cong",
      start: "Thank you Update"
    })
  };
  render() {
    console.log("Day la ham render");
    console.log(this.state.status);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello World^^ Pham Minh Tuan</h1>
          <button onClick={()=> this.clickUpdate()}>Click me Update</button>
          <Content hehe={this.state.start}> </Content>
        </header>
      </div>
    );
  }
}

export default App;
