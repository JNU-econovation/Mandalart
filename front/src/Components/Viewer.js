import React, { Component } from "react";
import axios from "axios/index";
import { Link } from "react-router-dom";
class Viewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Viewer: {}
    };
  }
  async componentDidMount() {
    let { data: Viewer } = await axios.post("/");
    this.setState({ Viewer });
  }
  Viewer() {
    const apiUrl = "../data/Viewer.json";
  }
  render() {
    const episode = this.state.episode;
    return (
      <div className="wrap_viewer">
        {" "}
        {episode.id ? (
          <div>
            {" "}
            <div className="top_viewer">
              {" "}
              {episode.title}{" "}
              <Link to={`/webtoon/${episode.webtoonId}`} className="btn_close">
                X
              </Link>{" "}
            </div>{" "}
            <div className="wrap_images">
              {" "}
              {episode.images.map((img, index) => (
                <img key={index} src={img} />
              ))}{" "}
            </div>{" "}
          </div>
        ) : (
          <span>LOADING...</span>
        )}{" "}
      </div>
    );
  }
}
export default Viewer;
