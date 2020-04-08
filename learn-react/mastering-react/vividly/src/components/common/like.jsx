import React, { Component } from "react";

// Input Liked {boolean}
// Output: onClick

const Like = (props) => {
    let classes = "fa fa-heart";
    if (!props.liked) classes += "-o";
    return (
        <i
            style={{ cursor: "pointer" }}
            onClick={props.onClick}
            className={classes}
            aria-hidden="true"
        ></i>
    );
};

export default Like;
