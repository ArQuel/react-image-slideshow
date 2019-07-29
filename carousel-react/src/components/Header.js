import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header
        style={{
          background: `#230cae`
        }}
      >
        <div
          style={{
            position: `relative`,
            margin: `0 auto`,
            maxWidth: 999,
            padding: `13rem 1.0875em`
          }}
        />
      </header>
    );
  }
}

export default Header;
