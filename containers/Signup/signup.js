import React, { useState } from 'react';
import { Container , Form, Row, Button, Col} from 'react-bootstrap';
import Layout from '../../components/Layout/index';
import Input from '../../components/UI/Input/input';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignUp = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    const userSignup = () => {

    }

    if(auth.authenticate){
        return <Navigate to={`/`}/>
    }
    
    return (
        <Layout>
            <Container md={{span: 6, offset: 3}} style={{ marginTop: '50px' }}>
                {/* { user.message } */}
                <Col md={{span: 6, offset: 3}}>
                    <Form onSubmit={ userSignup }>
                        <Row className="mb-3">
                            <Col md={6} >
                                <Input
                                    // label="First Name"
                                    placeholder="First Name"
                                    value={firstName}
                                    type="text"
                                    onChange={() => {}} 
                                />
                            </Col>
                            <Col md={6}>
                                <Input
                                    // label="Last Name"
                                    placeholder="Last Name"
                                    value={lastName}
                                    type="text"
                                    onChange={() => {}} 
                                />
                            </Col>
                        </Row>

                        <Input
                            placeholder="Email"
                            value={email}
                            type="text"
                            onChange={() => {}} 
                        />

                        <Input
                            placeholder="Passworld"
                            value={password}
                            type="text"
                            onChange={() => {}} 
                        />

                        <Input
                            placeholder="Confirm Password"
                            value=''
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