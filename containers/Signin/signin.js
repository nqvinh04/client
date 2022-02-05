import {useEffect, useState} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import Layout from '../../components/Layout/index';
import Input from '../../components/UI/Input/input';
import { isUserLoggendIn, login } from '../../actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import Home from '../../containers/Home/home';

const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, serError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();
    
    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email,
            password
        }
        
        dispatch(login(user));
    }

    if(auth.authenticate){
        return <Navigate to={`/`}/>
    }

    return (    
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px'}}>  
                    <Col md={{span: 6, offset: 3}}>
                        <Form onSubmit={userLogin}>
                            <Input 
                                placeholder="Email"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input 
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
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