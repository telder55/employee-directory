import React from "react";
import Table from "react-bootstrap/Table";
import TableRow from "../TableRow";

function EmployeeTable({ list }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {list.length > 0 &&
          list.map((employee) => {
            return (
              <TableRow
                image={employee.picture.large}
                first={employee.name.first}
                last={employee.name.last}
                phone={employee.phone}
                email={employee.email}
              />
            );
          })}
      </tbody>
    </Table>
  );
}
export default EmployeeTable;
