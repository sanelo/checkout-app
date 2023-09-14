import React from "react";
import {
  Row,
  Button,
  Card,
  CardBody,
  Col,
  ButtonGroup,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Billing = ({ selectedShow, ticketCount }) => {
  if (!selectedShow.name) return null;

  const fee = 8;
  const { name, price, date } = selectedShow;

  return (
    <Row className="my-3">
      <Col lg={8}>
        <Card>
          <CardHeader tag="h5">Billing Details</CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">First Name</Label>
                    <Input id="exampleEmail" name="text" type="email" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Last Name</Label>
                    <Input id="examplePassword" name="text" type="password" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input
                  id="exampleAddress"
                  name="address"
                  placeholder="1234 Main St"
                />
              </FormGroup>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input id="exampleCity" name="city" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleState">State</Label>
                    <Input id="exampleState" name="state" />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input id="exampleZip" name="zip" />
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              <Row className="mt-5">
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCity">Credit Card Number</Label>
                    <Input id="exampleCity" name="city" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleState">Expiration Date</Label>
                    <Input id="exampleState" name="state" />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="exampleZip">CVV</Label>
                    <Input id="exampleZip" name="zip" />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Row>
          <Col>
            <Card>
              <CardHeader tag="h5">
                Total Cost{" "}
                <span className="float-end">
                  ${(price + fee) * ticketCount}
                </span>
              </CardHeader>
              <CardBody>
                <Row className="mb-3">
                  <Col>
                    <h6 className="fw-bold">Tickets</h6>
                    <span>
                      ${price} x {ticketCount}
                    </span>
                    <span className="float-end">${price * ticketCount}</span>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <h6 className="fw-bold">Fees</h6>
                    <span>
                      Service Fee ${fee} x {ticketCount}
                    </span>
                    <span className="float-end">${fee * ticketCount}</span>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <h6 className="fw-bold">Delivery</h6>
                    <span>Free Mobile Delivery</span>
                    <span className="float-end">Free</span>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Card>
              <CardBody>
                <Button size="lg" block color="primary">
                  Purchase
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Billing;
