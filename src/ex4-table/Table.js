import React from "react";

const TableHader = () => {
  return (
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableAction = () => {
  return (
    <>
      <button type="button" className="btn btn-danger">
        Delete
      </button>
      <button type="button" className="btn btn-warning">
        Edit
      </button>
    </>
  );
};

const TableRow = () => {
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td>Test Testsson</td>
        <td>
          <TableAction />
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Liljana Ristevska</td>
        <td>
          <TableAction />
        </td>
      </tr>
    </tbody>
  );
};

const Table = () => {
  return (
    <div className="test">
      {" "}
      {/* define a class in react */}
      <table className="table table-dark table-striped">
        <TableHader />
        <TableRow />
      </table>
    </div>
  );
};

export default Table;
