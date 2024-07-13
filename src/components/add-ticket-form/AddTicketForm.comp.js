import React from "react";
import {Form,Button,Row,Col} from 'react-bootstrap';

export const AddTicketForm =({handleOnSubmit,handleOnChange}) =>{
    return(
        <div class="jumbotron ">
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
                  <Form.Group as={Row}>
                    
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                    <Form.Control 
                    // type="subject"
                    name="subject"
                    // value={email}
                    onChange={handleOnChange}
                    placeholder="Enter email"
                     required
                    /></Col>
                  </Form.Group>
                  <br/>
                  <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue Found</Form.Label>
                   <Col sm={9}>
                   <Form.Control 
                    type="date"
                    name="issueDate"
                    // value={pass}
                     onChange={handleOnChange}
                    // placeholder="Enter password"
                    required
                    />
                   
                   </Col>
                    
                  </Form.Group>
                  <br/>
                  
                  <Form.Group>
                    <Form.Label>ABOUT ISSUE</Form.Label>
                    <Form.Control 
                    as="textarea"
                    type="details"
                    name="issueDate"
                    row="5"
                    // value={pass}
                     onChange={handleOnChange}
                    // placeholder="Enter password"
                    required
                    />
                  </Form.Group>
                  <br/>
                

                  <Button type="submit"  variant="info"  className="w-100">Login</Button>
                    
                </Form>
        </div>
    );
    
};