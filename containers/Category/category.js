import React, { useEffect, useState } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input/input";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, getAllCategory } from "../../actions/category.actions";

const Category = (props) => {
    const category = useSelector((state) => state.categories);
    const [categoryName, setCategoryName] = useState('');
    const [parentcategoryId, setParentCategoryId] = useState('');
    const [categoryPicture, setCategoryImage] = useState('');
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(getAllCategory());
    }, []);

    const handleClose = () => {
        const form = new FormData();

        form.append('name', categoryName);
        form.append('parentId', parentcategoryId);
        form.append('categoryPicture', categoryPicture);
        dispatch(addCategory(form))

        // const cat = {
        //     categoryName,
        //     parentcategoryId,
        //     categoryImage
        // };

        setShow(false)
    };
    const handleShow = () => setShow(true);

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category.name}>
                    {category.name}
                    {category.children.length > 0 ? (
                        <ul>{renderCategories(category.children)}</ul>
                    ) : null}
                </li>
            );
        }

        return myCategories;
    };

    const createCategoryList = (categories, options = []) => {

        for(let category of categories){
            options.push({ value: category._id, name: category.name});
            if(category.children.length > 0){
                createCategoryList(category.children, options)
            }
        }
        return options;
    }

    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0]);
    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                <Col md={12}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3 onClick={handleShow}>Category</h3>
                    <button onClick={handleShow}>Add</button>
                    </div>
                </Col>
                </Row>
                <Row>
                <Col md={12}>
                    <ul>
                        {renderCategories(category.categories)}
                        {/* {JSON.stringify(createCategoryList(category.categories))} */}
                    </ul>
                </Col>
                </Row>
            </Container>    

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        placeholder={'Category Name'}
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                    <br/>
                    <select 
                    className="form-control"
                    value={parentcategoryId} 
                    onChange={(e) => setParentCategoryId(e.target.value)}>
                        <option>Select category</option>
                        {
                            createCategoryList(category.categories).map(option => 
                                <option key={option.value} value={option.value}>
                                    {option.name}
                                </option>
                            )
                        }
                    </select>
                    <br/>
                    <input type="file" name="categoryPicture" onChange={handleCategoryImage}/>
                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </Layout>
    );
};

export default Category;
