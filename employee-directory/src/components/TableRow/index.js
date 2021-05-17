import React from "react";

function TableRow({ image, first, last, phone, email }) {
  return (
    <tr>
      <td>
        <img src={image} />
      </td>
      <td>{first}</td>
      <td>{last}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
}

export default TableRow;
