import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import Layout from '../../components/Layout/index';
import Input from '../../components/UI/Input/input';
import { login } from '../../actions/auth.actions';
import { useDispatch } from 'react-redux';

const SignIn = (props) => {

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email: 'vinh123456@gmial.com',
            password: '123456'
        }
        
        dispatch(login(user));
    }

    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px'}}>  
                    <Col md={{span: 6, offset: 3}}>
                        <Form onSubmit={userLogin}>
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
                </Row>
            </Container>
        </Layout>
    );
};

export default SignIn;