import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        console.log("Counters - Rendered");
        const {
            onReset,
            onDelete,
            onIncrement,
            onDecrement,
            counters,
        } = this.props;
        return (
            <React.Fragment>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                    ></Counter>
                ))}
            </React.Fragment>
        );
    }
}

export default Counters;
