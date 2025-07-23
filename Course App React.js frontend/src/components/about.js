// src/components/About.js
import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const About = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h3">About This Course Application</CardTitle>
          <CardText>
            This application allows users to add, view, and manage courses. It is built using React.js and Reactstrap for styling. The goal is to demonstrate basic CRUD operations and routing in a single-page application.
          </CardText>
          <CardText>
            Technologies Used: React, React Router, Reactstrap, and Toastify.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
