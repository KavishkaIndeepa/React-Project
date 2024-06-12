import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

export class  Admin extends Component {
    state = {
        showModal: false,
        items: [],
        newItem: {
            id: '',
            name: '',
            unitPrice: '',
            quantity: '',
            file: null
        }
    };

    handleShow = () => this.setState({ showModal: true });
    handleClose = () => this.setState({ showModal: false });

    // @ts-ignore
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ newItem: { ...this.state.newItem, [name]: value } });
    };

    // @ts-ignore
    handleFileChange = (e) => {
        this.setState({ newItem: { ...this.state.newItem, file: e.target.files[0] } });
    };

    handleAddItem = () => {
        const { items, newItem } = this.state;
        // @ts-ignore
        const updatedItems = [...items, { ...newItem, total: newItem.unitPrice * newItem.quantity }];
        this.setState({ items: updatedItems, showModal: false, newItem: { id: '', name: '', unitPrice: '', quantity: '', file: null } });
    };

    render() {
        const { showModal, items, newItem } = this.state;



        return (
            <div className="container mt-5">
                <div className={"border-b-4"}></div>
                <Button variant="primary mt-5" onClick={this.handleShow}>Add Item</Button>

                <Modal show={showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" name="id" value={newItem.id} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={newItem.name} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Unit Price</Form.Label>
                                <Form.Control type="number" name="unitPrice" value={newItem.unitPrice} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" name="quantity" value={newItem.quantity} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>File Uploader</Form.Label>
                                <Form.Control type="file" name="file" onChange={this.handleFileChange} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                        <Button variant="primary" onClick={this.handleAddItem}>Save</Button>
                    </Modal.Footer>
                </Modal>

                <table className="table table-responsive mt-4">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map(({id, name, quantity, total, unitPrice}, index) => (
                        <tr key={index}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{unitPrice}</td>
                            <td>{quantity}</td>
                            <td>{total}</td>
                            <td>
                                <Button variant="warning" className="mr-2"><FontAwesomeIcon icon={faEdit} /></Button>
                                <Button variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}


