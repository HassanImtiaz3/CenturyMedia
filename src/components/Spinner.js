import React, { Component } from "react";

import loading from "./loading.gif";

export default class Spinner extends Component {
  render() {
    return (
        <>
      <section>
        <div>
          <img className="my-3" src={loading} alt="loading" />
        </div>
      </section>
      </>
    );
  }
}
