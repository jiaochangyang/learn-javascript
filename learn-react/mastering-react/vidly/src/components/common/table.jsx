import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  sortColumn: PropTypes.object,
  onSort: PropTypes.func.isRequired,
  data: PropTypes.array,
};

export default Table;
