import React from "react";
import PropTypes from "prop-types";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.propTypes = {
  items: PropTypes.array,
  textProperty: PropTypes.string,
  valueProperty: PropTypes.string,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object,
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
