import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <div className="">
        <Banner />
        <div className="row gx-lg-5">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
}
