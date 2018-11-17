import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      className: "",
    };
  }
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  componentDidUpdate(prevProps) {
    if (this.props.isActiveKey && !this.state.active) {
      this.setState({ active: true, className: "active" });
    }
  }

  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
      this.state.className,
      //this.props.isActiveKey ? "active" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  isActiveKey: PropTypes.bool,
  clickHandler: PropTypes.func,
};
export default Button;
