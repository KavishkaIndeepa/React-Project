import React, { Component, ChangeEvent, MouseEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

type Item = {
    id: number;
    name: string;
    price: number;
    currency: string;
    description: string;
    // @ts-ignore
    image: string | File;
};

type State = {
    showModal: boolean;
    showDropdown: boolean;
    items: Item[];
    newItem: Item;
    editingItemId: number | null;
    successMessage: string | null;
    errorMessage: string | null;
};

export class Admin extends Component<{}, State> {
    state: State = {
        showModal: false,
        showDropdown: false,
        items: [],
        newItem: {
            id: 0,
            name: '',
            price: 0,
            currency: '',
            description: '',
            image: ''
        },
        editingItemId: null,
        successMessage: null,
        errorMessage: null
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:4000/signin');
            this.setState({ items: res.data });
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    handleShow = () => this.setState({ showModal: true });
    handleClose = () => this.setState({ showModal: false, editingItemId: null, newItem: { id: 0, name: '', price: 0, currency: '', description: '', image: '' } });

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const { name, value, files } = e.target;
        if (name === 'image' && files) {
            this.setState({
                newItem: {
                    ...this.state.newItem,
                    [name]: files[0]
                }
            });
        } else {
            this.setState({
                newItem: {
                    ...this.state.newItem,
                    [name]: value
                }
            });
        }
    };

    handleAddOrUpdateItem = async () => {
        if (this.state.editingItemId !== null) {
            // @ts-ignore
            await this.handleUpdateItem(this.state.editingItemId);
        } else {
            await this.handleAddItem();
        }
    };

    handleAddItem = async () => {
        try {
            const { newItem } = this.state;
            // @ts-ignore
            const formData = new FormData();
            formData.append('id', newItem.id.toString());
            formData.append('name', newItem.name);
            formData.append('price', newItem.price.toString());
            formData.append('currency', newItem.currency);
            formData.append('description', newItem.description);
            // @ts-ignore
            if (newItem.image instanceof File) {
                formData.append('image', newItem.image);
            }

            const res = await axios.post('http://localhost:4000/signin', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            this.setState(prevState => ({
                items: [...prevState.items, res.data],
                showModal: false,
                newItem: {
                    id: 0,
                    name: '',
                    price: 0,
                    currency: '',
                    description: '',
                    image: ''
                },
                successMessage: "Item added successfully!",
                errorMessage: null
            }));
            // this.setState(prevState => ({
            //     items: [...prevState.items, res.data],
            //     showModal: false,
            //     newItem: { id: 0, name: '', price: 0, currency: '', description: '', image: '' },
            //     successMessage: "Item added successfully!",
            //     errorMessage: null
            // }));
        } catch (error) {
            console.error("Error adding item:", error);
            this.setState({
                successMessage: null,
                errorMessage: "Error adding item. Please try again."
            });
        }
    };


    // handleDeleteItem = async (id: number) => {
    //     try {
    //         await axios.delete(`http://localhost:4000/${id}`);
    //         this.setState(prevState => ({
    //             items: prevState.items.filter(item => item.id !== id),
    //             successMessage: "Item deleted successfully!",
    //             errorMessage: null
    //         }));
    //     } catch (error) {
    //         console.error("Error deleting item: ", error);
    //         this.setState({
    //             successMessage: null,
    //             errorMessage: "Error deleting item. Please try again."
    //         });
    //     }
    // };

    handleDeleteItem = async (id: number) => {
        try {
            await axios.delete(`http://localhost:4000/signin/${id}`);
            this.setState(prevState => ({
                items: prevState.items.filter(item => item.id !== id),
                successMessage: "Item deleted successfully!",
                errorMessage: null
            }));
        } catch (error) {
            console.error("Error deleting item: ", error);
            this.setState({
                successMessage: null,
                errorMessage: "Error deleting item. Please try again."
            });
        }
    };

    handleUpdateItem = async (id: number, updatedData: Item) => {
        try {
            // @ts-ignore
            const formData = new FormData();
            formData.append('id', updatedData.id.toString());
            formData.append('name', updatedData.name);
            formData.append('price', updatedData.price.toString());
            formData.append('currency', updatedData.currency);
            formData.append('description', updatedData.description);
            // @ts-ignore
            if (updatedData.image instanceof File) {
                formData.append('image', updatedData.image);
            } else {
                formData.append('image', updatedData.image);
            }

            const res = await axios.put(`http://localhost:4000/signin/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // this.setState(prevState => ({
            //     items: prevState.items.map(item => item.id === id ? res.data : item),
            //     successMessage: "Item updated successfully!",
            //     errorMessage: null
            // }));
            this.setState(prevState => ({
                items: prevState.items.map(item => item.id === id ? res.data : item),
                showModal: false,
                newItem: { id: 0, name: '', price: 0, currency: '', description: '', image: '' },
                successMessage: "Item updated successfully!",
                errorMessage: null,
                editingItemId: null
            }));
        } catch (error) {
            console.error("Error updating item: ", error);
            this.setState({
                successMessage: null,
                errorMessage: "Error updating item. Please try again."
            });
        }
    };

    handleEditItem = (item: Item) => {
        this.setState({
            newItem: { ...item, image: '' },
            editingItemId: item.id,
            showModal: true
        });
    };

    toggleDropdown = () => {
        this.setState(prevState => ({ showDropdown: !prevState.showDropdown }));
    };

    render() {
        const { showModal, showDropdown, items, newItem, successMessage, errorMessage } = this.state;

        return (
            <div className="container mx-auto mt-5 p-10">
                <div className="border-b-4 flex justify-between items-center">
                    <div></div>
                    <div className="relative px-4">
                        <button className="text-gray-600" onClick={this.toggleDropdown}>
                            <FontAwesomeIcon icon={faUser} size="2x" />
                        </button>
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                                <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    Profile
                                </button>
                                <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    Settings
                                </button>
                                <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    <a href="/">Log Out</a>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-5" onClick={this.handleShow}>
                    Add Item
                </button>

                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-2">
                            <div className="flex justify-between items-center p-4 border-b">
                                <h3 className="text-lg font-semibold">Add New Item</h3>
                                <button onClick={this.handleClose}>×</button>
                            </div>
                            <div className="p-4">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold">ID:</label>
                                    <input type="number" name="id" value={newItem.id} onChange={this.handleChange} className="border rounded py-2 px-3 w-full" />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold">Name:</label>
                                    <input type="text" name="name" value={newItem.name} onChange={this.handleChange} className="border rounded py-2 px-3 w-full" />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold">Price:</label>
                                    <input type="number" name="price" value={newItem.price} onChange={this.handleChange} className="border rounded py-2 px-3 w-full" />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold">Currency:</label>
                                    <input type="text" name="currency" value={newItem.currency} onChange={this.handleChange} className="border rounded py-2 px-3 w-full" />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold">Description:</label>
                                    <input type="text" name="description" value={newItem.description} onChange={this.handleChange} className="border rounded py-2 px-3 w-full" />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold">Image:</label>
                                    <input type="file" name="image" onChange={this.handleChange} className="border rounded py-2 px-3 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-end p-4 border-t">
                                <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2" onClick={this.handleClose}>
                                    Cancel
                                </button>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={this.handleAddItem}>
                                    {this.state.editingItemId !== null ? "Update" : "Add"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {successMessage && <p className="text-green-500">{successMessage}</p>}
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                <table className="min-w-full bg-white">
                    <thead>
                    <tr>
                        <th className="py-2">ID</th>
                        <th className="py-2">Name</th>
                        <th className="py-2">Price</th>
                        <th className="py-2">Currency</th>
                        <th className="py-2">Description</th>
                        <th className="py-2">Image</th>
                        <th className="py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td className="py-2">{item.id}</td>
                            <td className="py-2">{item.name}</td>
                            <td className="py-2">{item.price}</td>
                            <td className="py-2">{item.currency}</td>
                            <td className="py-2">{item.description}</td>
                            <td className="py-2"><img src={item.image} alt={item.name} className="w-16 h-16 object-cover" /></td>
                            <td className="py-2">
                                <button className="text-blue-500 mr-2" onClick={() => this.handleEditItem(item)}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button className="text-red-500" onClick={() => this.handleDeleteItem(item.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
