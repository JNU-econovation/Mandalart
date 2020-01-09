import React, { Component } from "react";
import { Link } from "react-router-dom";

class All_mandal extends Component {
  render() {
    return (
      <div>
        <table border="1">
          <tr>
            <Link to="/specificmandal">
              <td>NW</td>
            </Link>
            <td>North</td>
            <td>NE</td>
          </tr>
          <tr>
            <td>West</td>
            <Link to="/mainmandal">
              <td>main</td>
            </Link>
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
