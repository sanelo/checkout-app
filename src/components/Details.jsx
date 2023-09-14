import React from "react";
import { Row, Button, Card, CardBody, Col, ButtonGroup } from "reactstrap";

const Details = ({ selectedShow, ticketCount, setTicketCount }) => {
  if (!selectedShow.name) return null;
  return (
    <Row className="my-3">
      <Col lg={8}>
        <Card>
          <CardBody>
            <span className="btn disabled">
              Great choice, you will be watching the{" "}
              <span className="fw-bold">{selectedShow?.name} </span>
              on
              <span className="fw-bold"> {selectedShow?.date}</span>
            </span>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card>
          <CardBody>
            <span className="btn disabled">Number of tickets</span>
            <ButtonGroup className="float-end">
              <Button
                onClick={() => setTicketCount((now) => (now > 1 ? now - 1 : 1))}
              >
                -
              </Button>
              <Button color="light" disabled>
                {ticketCount}
              </Button>
              <Button onClick={() => setTicketCount((now) => now + 1)}>
                +
              </Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
export default Details;
