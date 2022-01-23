import React from 'react';
import {Form, Button, Container, Col} from 'react-bootstrap';
import Layout from '../../components/Layout/index';
import Input from '../../components/UI/Input/input';

const SignIn = (props) => {
    return (
        <Layout>
            <Container>
                <Col md={{span: 6, offset: 3}} style={{ marginTop: '50px'}}>
                    <Form>
                        <Input 
                            placeholder="Email"
                            value=""
                            type="email"
                            onChange={() => {}}
                        />
                        <Input 
                            placeholder="Password"
                            value=""
                            type="password"
                            onChange={() => {}}
                        />
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}

                        <Button style={{marginTop:'20px'}} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Container>
        </Layout>
    );
};

export default SignIn;