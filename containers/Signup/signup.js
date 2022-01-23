import React from 'react';
import { Container , Form, Row, Button, Col} from 'react-bootstrap';
import Layout from '../../components/Layout/index';
import Input from '../../components/UI/Input/input';

const SignUp = (props) => {
    return (
        <Layout>
            <Container md={{span: 6, offset: 3}} style={{ marginTop: '50px' }}>
                <Col md={{span: 6, offset: 3}}>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6} >
                                <Input
                                    // label="First Name"
                                    placeholder="First Name"
                                    value=""
                                    type="text"
                                    onChange={() => {}} 
                                />
                            </Col>
                            <Col md={6}>
                                <Input
                                    // label="Last Name"
                                    placeholder="Last Name"
                                    value=""
                                    type="text"
                                    onChange={() => {}} 
                                />
                            </Col>
                        </Row>

                        <Input
                            // label="Email"
                            placeholder="Email"
                            value=""
                            type="text"
                            onChange={() => {}} 
                        />

                        <Input
                            // label="Email"
                            placeholder="Passworld"
                            value=""
                            type="text"
                            onChange={() => {}} 
                        />

                        <Input
                            // label="Email"
                            placeholder="Confirm Password"
                            value=""
                            type="text"
                            onChange={() => {}} 
                        />

                        <Input
                            placeholder="Address: 1234 Main St"
                            value=""
                            type="text"
                            onChange={() => {}} 
                        />

                        <Input
                            placeholder="Apartment, studio, or floor"
                            value=""
                            type="text"
                            onChange={() => {}} 
                        />

                        {/* <Row className="mb-3"> */}
                            {/* <Form.Group as={Col} controlId="formGridCity">
                            {/* <Form.Label>City</Form.Label> */}
                                {/* <Form.Control placeholder="City"/> */}
                            {/* </Form.Group> */}

                            {/* <Form.Group as={Col} controlId="formGridState"> */}
                            {/* <Form.Label>State</Form.Label> */}
                            {/* <Form.Select defaultValue="Choose...">
                                <option>State...</option>
                                <option>...</option>
                            </Form.Select>
                            </Form.Group> */}

                            {/* <Form.Group as={Col} controlId="formGridZip"> */}
                            {/* <Form.Label>Zip</Form.Label> */}
                            {/* <Form.Control placeholder="Zip"/>
                            </Form.Group> */}
                        {/* </Row> */}

                        {/* <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>    */}

                        <Button style={{marginTop:'20px'}} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Container>
        </Layout>
    );
};

export default SignUp;