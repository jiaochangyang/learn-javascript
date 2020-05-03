import React, { Component } from "react";

class MovieForm extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <h1>{"Movie Form " + id}</h1>
        <button
          className="btn btn-primary"
          onClick={() => this.props.history.push("/movies")}
        >
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
