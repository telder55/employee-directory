import React from "react";
import Table from "react-bootstrap/Table";

function EmployeeTable(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <img src={props.image} />
          </td>
          <td>{props.first}</td>
          <td>{props.last}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
        </tr>
        <tr></tr>
        <tr></tr>
      </tbody>
    </Table>
  );
}

export default EmployeeTable;
