import { useState } from 'react';
import axios from 'axios';
import './Add.css';

function Add() {
    const [rowKey, setRowKey] = useState('');
    const [ProdId, setProdId] = useState('');
    const [ProdName, setProdName] = useState('');
    const [cost, setcost] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/v1/add', {
              rowKey,
              ProdId,
              ProdName,
              cost
            });

            setMessage(response.data.message);
            setError('');
        } catch (error) {
            setMessage('');
            setError('Failed to add entity');
            console.error('Error adding entity:', error.message);
        }
    };

    return (
        <div className="form-container">
            <h2>Azure Table App</h2>
            <form onSubmit={handleSubmit} className="entity-form">
                <div className="form-group">
                    <label htmlFor="azureTableName">Enter Azure Table Name:</label>
                    <input type="text" id="azureTableName" value={rowKey} onChange={(e) => setRowKey(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="productId">Enter Product ID:</label>
                    <input type="text" id="productId" value={ProdId} onChange={(e) => setProdId(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Enter Product Name:</label>
                    <input type="text" id="productName" value={ProdName} onChange={(e) => setProdName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Enter Product Price:</label>
                    <input type="text" id="productPrice" value={cost} onChange={(e) => setcost(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="Image">Upload Image:</label>
                    <input type="file" id="formFileDisabled"  />
                </div>
                <button type="submit">Add Data!!!</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Add;
