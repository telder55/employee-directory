import React from "react";
import Button from "react-bootstrap/Button";

function SortButton({ handleButtonClick }) {
  return (
    <Button variant="primary" onClick={handleButtonClick}>
      Sort by First Name
    </Button>
  );
}
export default SortButton;
