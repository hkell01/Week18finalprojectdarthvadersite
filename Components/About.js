import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Page</h1>
      <Card className="about-card">
        <Card.Body>
          <Card.Title className="about-card-title">About Darth VADER</Card.Title>
          <Card.Text className="about-card-text">
            Darth Vader A.K.A. Anakin Skywalker is the most iconic and prolific villians of all time.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;

