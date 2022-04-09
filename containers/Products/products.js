import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProdcut } from "../../actions/product.actions";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input/input";
import Modal from "../../components/UI/Modal";
import { generatePublicUrl } from "../../urlConfig";
import './products.css';


const Products = (props) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productPictures, setProductPictures] = useState([]);
    const [show, setShow] = useState(false);
    const [productDetailModal, setProductDetailModal] = useState(false);
    const [productDetails, setProductDetail] = useState(null);
    const category = useSelector((state) => state.categories);
    const product = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        const form = new FormData();

        form.append('name', name);
        form.append('price', price);
        form.append('quantity', quantity);
        form.append('description', description);
        form.append('categoryId', categoryId);
        
        for(let pic of productPictures){
            form.append('productPictures', pic);
        }
        
        dispatch(addProdcut(form));
        setShow(false)
    };

    const handleShow = () => setShow(true);

    const handleProductImage = (e) => {
        setProductPictures([
            ...productPictures,
            e.target.files[0]
        ]);
    }

    const renderProducts = () => {
        console.log('Product', product)
        return (
            <Table style={({ fontSize:12  })} responsive="sm"> 
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        {/* <th>Description</th> */}
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.products.length > 0 ?
                        product.products.map(pro => 
                            <tr onClick={() => showProductDetailsModal(pro)} key={product._id}>
                                <td>1</td>
                                <td>{pro.name}</td>
                                <td>{pro.price}</td>
                                <td>{pro.quantity}</td>
                                <td>--</td>
                                {/* <td>{product.description}</td>
                                <td>{product.category}</td> */}
                            </tr>
                        ) : null
                    }
                    
                </tbody>
            </Table>
        )
    }

    const renderAddProductModal = () => {
        return (
            <Modal
                show={show}
                handleClose={handleAddProduct}
                modalTitle={'Add New Product'}
            >
                <Input
                    labe="Name"
                    placeholder={'Product Name'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /> 
                <Input
                    labe="Quantity"
                    placeholder={'Quantity'}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <Input
                    labe="Price"
                    placeholder={'Price Cost'}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <br/>
                <select
                    className="form-control"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                >
                    <option>Select category</option>
                    {
                        createCategoryList(category.categories).map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.name}
                                </option>
                            )
                        )
                    }
                </select>
                <Input
                    labe="description"
                    placeholder={'Description'}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br/>
                {
                    productPictures.length > 0 ?
                    productPictures.map((pic, index) => <div key={index}>{pic.name}</div>) : null
                    
                }
                <input
                    type="file"
                    name="productPictures"
                    onChange={handleProductImage}
                />
            </Modal>
        )
    }

    const handleCloseProductDetailsModal = () => {
        setProductDetailModal(false);
    }

    const showProductDetailsModal = (product) => {
        setProductDetail(product)
        setProductDetailModal(true);
        console.log(1111111, product);
        console.log(2222222, product);
    }

    const renderProductDetailsModal = () => {
        if(!productDetails) {
            return null;
        }
        console.log('productDetails', productDetails)

        return (
            <Modal
                show={productDetailModal}
                handleClose={() => handleCloseProductDetailsModal()}
                modalTitle={'Product Details'}
                size="lg"
            >
                <Row>
                    <Col md="6">
                        <label className="key">Name: </label>
                        <span className="value">{productDetails.name}</span>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">price: </label>
                        <span className="value">{productDetails.price}</span>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Quantity: </label>
                        <span className="value">{productDetails.quantity}</span>
                    </Col>
                </Row>
                {/* <Row>
                    <Col md="6">
                        <label className="key">Category: </label>
                        <span className="value">{productDetails.category.name}</span>
                    </Col>
                </Row> */}
                <Row>
                    <Col md="12">
                        <label className="key">Description: </label>
                        <span className="value">{productDetails.description}</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label className="key">Product Pictures</label>
                        <div style={{display: 'flex'}}>
                            {productDetails.productPictures.map((picture) => (
                                <div className="productImgContainer">
                                    <img alt="IMG" src={generatePublicUrl(picture.img)} />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Modal>
        )
    }

    

    const createCategoryList = (categories, options = []) => {

        for(let category of categories){
            options.push({ value: category._id, name: category.name});
            if(category.children.length > 0){
                createCategoryList(category.children, options)
            }
        }
        return options;
    }


    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h3 onClick={handleShow}>Product</h3>
                        <button onClick={handleShow}>Add</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {renderProducts()}
                    </Col>
                </Row>
            </Container>
            {renderAddProductModal()}
            {renderProductDetailsModal()}
        </Layout>
    )
}

export default Products;