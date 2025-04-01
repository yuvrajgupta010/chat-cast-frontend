import React from "react";
import { Card, FormControl, InputGroup } from "react-bootstrap";

const SearchBar = ({
  placeholder = "Search...",
  onSearchChangeHandler = (event) => {},
  value = "",
}) => {
  return (
    <Card className="m-0 br-0 shadow-none">
      <Card.Body className="">
        {/* <InputGroup>
          <FormControl type="text" placeholder="Search ..." />
        </InputGroup> */}
        <InputGroup>
          <FormControl
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onSearchChangeHandler}
          />
          <InputGroup.Text className="btn bg-white text-muted border-start-0">
            <i className="fe fe-search"></i>
          </InputGroup.Text>
        </InputGroup>
      </Card.Body>
    </Card>
  );
};

export default SearchBar;
