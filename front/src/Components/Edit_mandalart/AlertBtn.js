import React from "react";
import { withAlert } from "react-alert";

const AlertBtn = ({ alert }) => {
  <button
    onClick={() => {
      alert.show("saved!!");
    }}
  >
    저장!
  </button>;
};

export default withAlert()(AlertBtn);
