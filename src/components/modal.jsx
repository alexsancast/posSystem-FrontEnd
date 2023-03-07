import React, { useState } from "react";
import Modal from "react-modal";

export const ModalComponent = ({ isOpen, onClose }) => {
    const [items, setItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const { name, quantity, price } = event.target;
        const newItem = {
            name: name.value,
            quantity: parseInt(quantity.value),
            price: parseInt(price.value),
        };
        setItems([...items, newItem]);
        name.value = "";
        quantity.value = "";
        price.value = "";
    };

    const calculateTotalCost = () => {
        let total = 0;
        items.forEach((item) => {
            total += item.quantity * item.price;
        });
        setTotalCost(total);
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <h2>Calculadora de Costos</h2>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Nombre del artículo:</label>
                <input type="text" name="name" required />

                <label htmlFor="quantity">Cantidad:</label>
                <input type="number" name="quantity" required />

                <label htmlFor="price">Precio:</label>
                <input type="number" name="price" required />

                <button type="submit">Agregar</button>
            </form>

            <h3>Artículos:</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.quantity} x ${item.price}
                    </li>
                ))}
            </ul>

            <button onClick={calculateTotalCost}>Calcular Costo Total</button>
            {totalCost > 0 && <p>Costo Total: ${totalCost}</p>}
        </Modal>
    );
};


