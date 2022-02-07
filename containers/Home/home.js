import './home.css';
import React, { useEffect } from 'react';
import Layout from '../../components/Layout/index';
import {Row, Col, Container} from 'react-bootstrap';
import './home.css';


export default function Home(props) {

    return (
        <Layout>
            <Container fluid>
                <Row>
                    <Col md={2} className="sidebar">Side bar</Col>
                    <Col md={10} style={{ marginLeft: 'auto'}}>Container</Col>
                </Row>
            </Container>
            {/* <div className="text-center">
                <h1>Welcome to Admin Dashboard</h1>
            </div> */}
        </Layout>
    )
};

// export default Home;