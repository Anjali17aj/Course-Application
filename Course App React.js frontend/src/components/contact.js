import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const Contact = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h3">Contact Us</CardTitle>
          <CardText>
            If you have any questions or feedback, feel free to reach out to us.
          </CardText>
          <CardText>
            <strong>Email:</strong> support@abc.com <br />
            <strong>Phone:</strong> +91 9100000000 <br />
            <strong>Address:</strong> ABCXYZ Complex, MG Road, Pune, India
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Contact;
