import React from "react";
import PropTypes from "prop-types";

// Input Liked {boolean}
// Output: onClick

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked || liked === undefined) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={onClick}
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
