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
      history: [],
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  makeCalculation = buttonName => {
    const calculation = calculate(this.state, buttonName);
    let history = this.state.history;

    if (!history.length && this.state.total && calculation.operation) {
      history.push(this.state.total);
    }

    if (!["AC", "=", "+/-", "+", "-", "x", "÷", "%"].includes(buttonName)) {
      history.push(buttonName);
    }

    if (
      ["+", "-", "x", "÷"].includes(buttonName) &&
      this.state.lastKey !== calculation.operation
    ) {
      history.push(buttonName);
    }

    if (buttonName === "%" && this.state.next) {
      history.push(buttonName);
    }

    if (buttonName === "+/-") {
      if (history.length && this.state.next) {
        history.splice(
          history.length - this.state.next.length,
          this.state.next.length,
        );
        history = [...history, ...calculation.next.split("")];
      } else {
        history.pop();
        history.push(calculation.total);
      }
    }

    if (buttonName === "=" && calculation.next) {
      history = [...history];
    }

    if (buttonName === "AC" || (buttonName === "=" && !calculation.next)) {
      history = [];
    }

    this.setState({
      lastKey: buttonName,
      ...calculation,
      history,
    });
  };

  handleClick = buttonName => {
    this.makeCalculation(buttonName);
  };

  handleUndo = () => {
    if (!this.state.operation && !this.state.next && this.state.total)
      return false;

    const history = this.state.history;
    const next = this.state.next;

    if (history.length) {
      const updatedHistory = history.slice(0, history.length - 1);
      const newNext = next !== null ? next.slice(0, -1) : null;
      const operation =
        !next && this.state.operation ? null : this.state.operation;
      this.setState({
        next: newNext,
        history: updatedHistory,
        operation,
      });
    }
  };

  handleKeyDown = keyName => {
    const buttonName = keyReference(keyName);
    if (!buttonName) return false;
    if (buttonName === "Back") {
      this.handleUndo();
      return;
    }

    this.makeCalculation(buttonName);
  };

  render() {
    return (
      <div className="component-app">
        <Display state={this.state} handleUndo={this.handleUndo} />
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
