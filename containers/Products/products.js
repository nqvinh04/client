import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProdcut } from "../../actions/product.actions";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input/input";
import Modal from "../../components/UI/Modal";


const Products = (props) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productPictures, setProductPictures] = useState([]);
    const [show, setShow] = useState(false);
    const category = useSelector((state) => state.categories);
    const product = useSelector((state) => state.product);
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
            <Table responsive="sm"> 
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.products.length > 0 ?
                        product.products.map(product => 
                            <tr key={product._id}>
                                <td>1</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
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
            
        </Layout>
    )
}

export default Products;