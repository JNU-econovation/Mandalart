import React, { Component } from "react";
import "./SingleMandalBox.css";

class SingleMandalBox extends Component {
  render() {
    return (
      <>
        <div className="mandals_oneMandal">
          <div className="mandals_mandalImage" id="my_mandal">
            <div className="create_newmandal-wrapper">
              <div className="create_newmandal"> + </div>
            </div>
          </div>
          <p id="mandals_mandalName" className="mandals_mandalName">
            {this.props.name}
          </p>
        </div>
      </>
    );
  }
}

export default SingleMandalBox;
