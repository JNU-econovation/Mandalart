import React, { Component } from "react";
import { Link } from "react-router-dom";

class All_mandal extends Component {
  render() {
    return (
      <div>
        <table border="1">
          <tr>
            <td>NW</td>
            <td>North</td>
            <td>NE</td>
          </tr>
          <tr>
            <td>West</td>
            <td>main</td>
            <td>East</td>
          </tr>
          <tr>
            <td>SW</td>
            <td>South</td>
            <td>SE</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default All_mandal;
