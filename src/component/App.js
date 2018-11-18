import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import keyReference from "../logic/keyReference";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      lastKey: "",
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  makeCalculation = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  handleClick = buttonName => {
    this.makeCalculation(buttonName);
  };

  resetLastKey = () => {
    this.setState({ lastKey: "" });
  };

  handleKeyDown = keyName => {
    const buttonName = keyReference(keyName);
    if (!buttonName) return false;
    this.setState({
      lastKey: buttonName,
      ...calculate(this.state, buttonName),
    });
    // this.makeCalculation(buttonName);
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel
          clickHandler={this.handleClick}
          lastKey={this.state.lastKey}
          resetLastKey={this.resetLastKey}
        />
      </div>
    );
  }
}
export default App;
