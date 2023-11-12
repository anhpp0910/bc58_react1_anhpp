import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="col-xs-12 col-md-6 col-xxl-3 mb-4">
        <div className="card" style={{ width: "100%" }}>
          <img
            src="..."
            className="card-img-top"
            alt="..."
            style={{ height: "8rem" }}
          />
          <div className="card-body py-4">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">
              Find Out More!
            </a>
          </div>
        </div>
      </div>
    );
  }
}
