import React from "react";
import PropTypes  from 'prop-types'
import { Button } from 'react-bootstrap';

import{container, Row, Col, Form} from 'react-bootstrap'
export const LoginForm = ({handleOnChange,handleOnSubmit,formSwitcher,email,pass})=> {
    return(
         <container>
            <Row>
                <Col>
                
                <h1> Client Login</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email"
                    name="email"
                    vslue={email}
                    onChange={handleOnChange}
                    placeholder="Enter email"
                     required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password"
                    name="password"
                    value={pass}
                    onChange={handleOnChange}
                    placeholder="Enter password"
                    required
                    />
                  </Form.Group>

                  <Button type="submit">Login</Button>
                    
                </Form>
                <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                  <a href='#!' onClick={() => formSwitcher('rest')}>Forget Password?</a>
                </Col>
            </Row>
         </container>
    );
};

LoginForm.propTypes= {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired
};