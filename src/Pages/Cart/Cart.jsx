import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Cart = () => {
    const cartItems = [
        { id: 1, name: "Product 1", price: "$20", quantity: 2 },
        { id: 2, name: "Product 2", price: "$30", quantity: 1 },
        { id: 3, name: "Product 3", price: "$40", quantity: 1 },
    ];

    return (
        <Container className="my-5">
            <h2>Your Cart</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{`$${parseFloat(item.price.replace('$', '')) * item.quantity}`}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button variant="success" className="mt-3">Checkout</Button>
        </Container>
    );
}

export default Cart;
