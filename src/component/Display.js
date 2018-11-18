import React from "react";
import PropTypes from "prop-types";
import UndoButton from "./UndoButton";
import "./Display.css";

class Display extends React.Component {
  formatCalculation = () => {
    const operations = ["+", "-", "x", "÷"];
    const str = this.props.state.history.reduce((acc, val) => {
      if (operations.includes(val)) {
        return acc + ` ${val} `;
      }
      return acc + val;
    }, "");
    return `(${str})`;
  };

  render() {
    const calculation = this.props.state.history.length
      ? this.formatCalculation()
      : "()";

    return (
      <div className="component-display">
        <div className="component-display__result">
          {(this.props.state.lastKey === "%" && this.props.state.next) ||
            this.props.state.total ||
            "0"}
        </div>
        <div className="component-display__calculation">
          <span>{calculation}</span>
          <UndoButton handleUndo={this.props.handleUndo} />
        </div>
      </div>
    );
  }
}
Display.propTypes = {
  value: PropTypes.string,
  state: PropTypes.object,
};
export default Display;
