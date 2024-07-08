import React from "react";
import PropTypes  from 'prop-types'
import { Button } from 'react-bootstrap';

import{container, Row, Col, Form} from 'react-bootstrap'
export const ResetPassword = ({handleOnChange,handleOnResetSubmit,formSwitcher,email,pass})=> {
    return(
         <container>
            <Row>
                <Col>
                
                <h1> Reset Password</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
                 

                  <Button type="submit">Reset Password</Button>
                    
                </Form>
                <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                  <a href='#!' onClick={() => formSwitcher('login')}>Login Now</a>
                </Col>
            </Row>
         </container>
    );
};

ResetPassword.propTypes= {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired
};