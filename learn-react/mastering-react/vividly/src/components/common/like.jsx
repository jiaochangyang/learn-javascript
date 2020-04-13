import React from "react";
import PropTypes from "prop-types";

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

Like.propTypes = {
    liked: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default Like;
