import React from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Card className="m-0 br-0 shadow-none">
      <Card.Body className="">
        <InputGroup>
          <FormControl type="text" placeholder="Search ..." />
          <Button variant="primary" className="input-group-text">
            Search
          </Button>
        </InputGroup>
      </Card.Body>
    </Card>
  );
};

export default SearchBar;
