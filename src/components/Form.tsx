//this is the partice of sumit react .video on react form vidNO: 10

import React, { Component } from "react";

export default class Form extends Component {
  state = {
    text: "",
    text_area: "",
    pass: "",
    select: "angulaar",
  };

  handleChange = (e: any) => {
    //use console.log to cross check your code ...
    if (e.target.type == "text") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type == "textarea") {
      this.setState({
        text_area: e.target.value,
      });
    } else if (e.target.type == "password") {
      this.setState({
        pass: e.target.value,
      });
    } else if (e.target.type == "select-one") {
      this.setState({
        select: e.target.value,
      });
    } else {
      console.log("nothing");
    }
  };

  render() {
    return (
      <>
        <div className="m-5 ">
          <form action="">
            <input
              type="text"
              placeholder="enter your name"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <br /> <br />
            <textarea
              name="text-area"
              value={this.state.text_area}
              onChange={this.handleChange}
              placeholder="write about yourself"
            ></textarea>
            <br />
            <input
              type="password"
              value={this.state.pass}
              onChange={this.handleChange}
              placeholder="inter your passcode"
            />
            <br /> <br />
            <select value={this.state.select} onChange={this.handleChange}>
              <option>React</option>
              <option>Angular</option>
              <option>Veu js</option>
              <option>Next Js</option>
            </select>
            <input type="submit" />
          </form>
        </div>
      </>
    );
  }
}
