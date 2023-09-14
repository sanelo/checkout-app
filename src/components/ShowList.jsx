import React from "react";
import {
  Row,
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";

const ShowList = ({ shows, selectedShow, setSelectedShow }) => (
  <Row>
    {shows.map((show) => (
      <Col key={show.name}>
        <Card>
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">{show.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              ${show.price}
            </CardSubtitle>
            <CardText>{show.desc}</CardText>
            <Button
              onClick={() => setSelectedShow(show)}
              className={`${
                selectedShow.name === show.name ? "bg-success" : ""
              }`}
            >
              Select
            </Button>
          </CardBody>
        </Card>
      </Col>
    ))}
  </Row>
);
export default ShowList;
