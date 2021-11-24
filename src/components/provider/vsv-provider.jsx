import React from "react";
import MyContext from "../context/vsc-context.jsx";

class VsvProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default VsvProvider;
