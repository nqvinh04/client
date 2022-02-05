import './home.css';
import React, { useEffect } from 'react';
import Layout from '../../components/Layout/index';
import {Row, Col} from 'react-bootstrap';


export default function Home(props) {

    return (
        <Layout>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
            {/* <div className="text-center">
                <h1>Welcome to Admin Dashboard</h1>
            </div> */}
        </Layout>
    )
};

// export default Home;