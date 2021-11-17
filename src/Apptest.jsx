import React, { Component, useState, useEffect } from "react";
import CheckboxGroup from "react-checkbox-group";

import "./Apptest.scss";

export const CheckBox = (props) => {
  return (
    <li>
      <input
        key={props.id}
        onClick={props.handleCheckChieldElement}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />{" "}
      {props.value}
    </li>
  );
};

class Apptest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAllChecked: false,
      fruites: [
        { id: 1, value: "banana", isChecked: false },
        { id: 2, value: "apple", isChecked: false },
        { id: 3, value: "mango", isChecked: false },
        { id: 4, value: "grap", isChecked: false },
      ],
    };
  }

  handleAllChecked = (event) => {
    let fruites = this.state.fruites;
    let isAllChecked = this.state.isAllChecked;
    fruites.forEach((fruite) => {
      return (fruite.isChecked = event.target.checked);
    });
    this.setState({ fruites: fruites, isAllChecked: !isAllChecked });
  };

  handleCheckChieldElement = (event) => {
    let fruites = this.state.fruites;
    let isAllChecked = false;
    let selectionCount = 0;
    fruites.forEach((fruite) => {
      if (fruite.value === event.target.value)
        fruite.isChecked = event.target.checked;

      if (fruite.isChecked) {
        selectionCount++;
      }
      isAllChecked = selectionCount === fruites.length ? true : false;
    });

    this.setState({ fruites: fruites, isAllChecked: isAllChecked });
  };

  render() {
    return (
      <div className="App">
        <h1> Check and Uncheck All Example </h1>
        <input
          type="checkbox"
          onClick={this.handleAllChecked}
          value="checkedall"
          checked={this.state.isAllChecked}
        />{" "}
        Check / Uncheck All
        <ul>
          {this.state.fruites.map((fruite) => {
            return (
              <CheckBox
                handleCheckChieldElement={this.handleCheckChieldElement}
                {...fruite}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Apptest;
