import React, { Component } from "react";
import axios from "axios";

class Personal_mandalart extends Component {
  constructor(props) {
    super(props);
    this.state = { Namelist: [] };
  }

  async componentDidMount() {
    let { data: Namelist } = await axios.post("/");
    this.setState({ Namelist });
  }

  render() {
    const { Namelist } = this.state;
    return Namelist.map(value => {
      return (
        <div>
          <table border="1">
            <tr>
              <td>{value.goal11}</td>
              <td>{value.goal12}</td>
              <td>{value.goal13}</td>
              <td>{value.goal21}</td>
              <td>{value.goal22}</td>
              <td>{value.goal23}</td>
              <td>{value.goal31}</td>
              <td>{value.goal32}</td>
              <td>{value.goal33}</td>
            </tr>
            <tr>
              <td>{value.goal18}</td>
              <td>{value.goal10}</td>
              <td>{value.goal14}</td>
              <td>{value.goal28}</td>
              <td>{value.goal20}</td>
              <td>{value.goal24}</td>
              <td>{value.goal38}</td>
              <td>{value.goal30}</td>
              <td>{value.goal34}</td>
            </tr>
            <tr>
              <td>{value.goal17}</td>
              <td>{value.goal16}</td>
              <td>{value.goal15}</td>
              <td>{value.goal27}</td>
              <td>{value.goal26}</td>
              <td>{value.goal25}</td>
              <td>{value.goal37}</td>
              <td>{value.goal36}</td>
              <td>{value.goal35}</td>
            </tr>
            <tr>
              <td>{value.goal81}</td>
              <td>{value.goal82}</td>
              <td>{value.goal83}</td>
              <td>{value.goal10}</td>
              <td>{value.goal20}</td>
              <td>{value.goal30}</td>
              <td>{value.goal41}</td>
              <td>{value.goal42}</td>
              <td>{value.goal43}</td>
            </tr>
            <tr>
              <td>{value.goal88}</td>
              <td>{value.goal80}</td>
              <td>{value.goal84}</td>
              <td>{value.goal80}</td>
              <td>{value.goal100}</td>
              <td>{value.goal40}</td>
              <td>{value.goal48}</td>
              <td>{value.goal40}</td>
              <td>{value.goal44}</td>
            </tr>
            <tr>
              <td>{value.goal87}</td>
              <td>{value.goal86}</td>
              <td>{value.goal85}</td>
              <td>{value.goal70}</td>
              <td>{value.goal60}</td>
              <td>{value.goal50}</td>
              <td>{value.goal47}</td>
              <td>{value.goal46}</td>
              <td>{value.goal45}</td>
            </tr>
            <tr>
              <td>{value.goal71}</td>
              <td>{value.goal72}</td>
              <td>{value.goal73}</td>
              <td>{value.goal61}</td>
              <td>{value.goal62}</td>
              <td>{value.goal63}</td>
              <td>{value.goal51}</td>
              <td>{value.goal52}</td>
              <td>{value.goal53}</td>
            </tr>
            <tr>
              <td>{value.goal78}</td>
              <td>{value.goal70}</td>
              <td>{value.goal74}</td>
              <td>{value.goal68}</td>
              <td>{value.goal60}</td>
              <td>{value.goal64}</td>
              <td>{value.goal58}</td>
              <td>{value.goal50}</td>
              <td>{value.goal54}</td>
            </tr>
            <tr>
              <td>{value.goal77}</td>
              <td>{value.goal76}</td>
              <td>{value.goal75}</td>
              <td>{value.goal67}</td>
              <td>{value.goal66}</td>
              <td>{value.goal65}</td>
              <td>{value.goal57}</td>
              <td>{value.goal56}</td>
              <td>{value.goal55}</td>
            </tr>
          </table>
        </div>
      );
    });
  }
}

export default Personal_mandalart;
