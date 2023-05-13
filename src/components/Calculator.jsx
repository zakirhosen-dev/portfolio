import { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";

export default class Calculator extends Component {
  state = {
    temp: "",
  };
  handleChange = (e) => {
    this.setState({
      temp: e.target.value,
    });
  };
  render() {
    const { temp } = this.state;

    return (
      <>
        <fieldset action="">
          <legend>enter a temperature</legend>
          <input type="text" />
        </fieldset>
        <BoilingVerdict celsius={parseFloat(temp)} />
      </>
    );
  }
}
