import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './VadersVault.css'; 
const VadersVault = () => {
  return (
    <Container className="vaders-vault">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Vader's Vault</Card.Title>
              <Card.Text>
                Welcome to Vader's Vault! Explore the dark side of the Force.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VadersVault;
