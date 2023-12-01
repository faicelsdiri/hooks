import { Card, CardGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function Pet({ name, race, type, location, photo, status }) {
  const [petstatus, setPetStatus] = useState(status);
  const [isCardVisible, setIsCardVisible] = useState(true);

  const handleAdopt = () => {
    // Update the status when the button is clicked
    setPetStatus("Adopted");
    setIsCardVisible(false);
  };

  return (
    <>
      <CardGroup>
        <Card style={{ textAlign: "center", marginTop: "50px" }}>
          <Card.Img
            variant="top"
            src={photo}
            style={{ width: "200px", height: "150px" }}
          />
          <Card.Body>
            <Card.Title> {name}</Card.Title>
            <Card.Text> {race} </Card.Text>
            <Card.Text> {type} </Card.Text>
            <Card.Text> {location} </Card.Text>
            <Card.Text> {petstatus} </Card.Text>
            {isCardVisible && (
              <Button variant="primary" onClick={handleAdopt}>
                Adopte
              </Button>
            )}
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default Pet;
