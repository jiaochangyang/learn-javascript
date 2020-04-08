import React, { Component } from "react";

class Counter extends Component {
  // componentDidUpdate(previousProps, previousState) {
  //   console.log("PP", previousProps);
  //   console.log("PS", previousState);
  //   if (previousProps.counter.value !== this.props.counter.value) {
  //     // Ajax call and get new data from server
  //   }
  // }

  componentWillUnmount() {
    console.log("Counter - UnMount");
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  render() {
    console.log("Counter - Rendered");
    console.log(this.props.counter);
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => {
              this.props.onIncrement(this.props.counter);
            }}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
            onClick={() => {
              this.props.onDecrement(this.props.counter);
            }}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>

        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }
}

export default Counter;
