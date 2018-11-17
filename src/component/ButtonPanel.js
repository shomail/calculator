import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

class ButtonPanel extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    const { lastKey } = this.props;
    return (
      <div className="component-button-panel">
        <div>
          <Button
            isActiveKey={lastKey === "AC"}
            name="AC"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
          />
          <Button
            isActiveKey={lastKey === "+/-"}
            name="+/-"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
          />
          <Button
            isActiveKey={lastKey === "%"}
            name="%"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
          />
          <Button
            isActiveKey={lastKey === "÷"}
            name="÷"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
            orange
          />
        </div>
        <div>
          <Button
            isActiveKey={lastKey === "7"}
            name="7"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
          />
          <Button
            isActiveKey={lastKey === "8"}
            name="8"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
          />
          <Button
            isActiveKey={lastKey === "9"}
            name="9"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
          />
          <Button
            isActiveKey={lastKey === "x"}
            name="x"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
            orange
          />
        </div>
        <div>
          <Button
            isActiveKey={lastKey === "4"}
            name="4"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
          />
          <Button
            isActiveKey={lastKey === "5"}
            name="5"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
          />
          <Button
            isActiveKey={lastKey === "6"}
            name="6"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
          />
          <Button
            isActiveKey={lastKey === "-"}
            name="-"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
            orange
          />
        </div>
        <div>
          <Button
            isActiveKey={lastKey === "1"}
            name="1"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
          />
          <Button
            isActiveKey={lastKey === "2"}
            name="2"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
          />
          <Button
            isActiveKey={lastKey === "3"}
            name="3"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
          />
          <Button
            isActiveKey={lastKey === "+"}
            name="+"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
            orange
          />
        </div>
        <div>
          <Button
            isActiveKey={lastKey === "0"}
            name="0"
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
            wide
          />
          <Button
            isActiveKey={lastKey === "."}
            name="."
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
          />
          <Button
            isActiveKey={lastKey === "="}
            name="="
            clickHandler={this.handleClick}
            resetLastKey={this.props.resetLastKey}
            orange
          />
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
  lastKey: PropTypes.string,
  resetLastKey: PropTypes.func,
};
export default ButtonPanel;
