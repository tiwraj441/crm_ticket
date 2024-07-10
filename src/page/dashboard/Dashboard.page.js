import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col className="text-center mt-5 mb-2">
                    <Button variant="info" style={{ fontSize: "2rem", padding: "10px" }}>Add new text here</Button>
                </Col>
            </Row>
            <Row>
            <Col className="text-center  mb-2">
                 <div> Total tickets:50</div>
                 <div>Pending tickets:5</div>


            </Col>
            </Row>
            <Row>
            <Col className="text-center  mb-2">
                  Recently Added tickets


            </Col>
            </Row>
            <hr/>


            
        </Container>
    );
};

