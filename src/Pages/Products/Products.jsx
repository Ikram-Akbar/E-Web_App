import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Products = () => {
    const productList = [
        { id: 1, name: "Product 1", price: "$20", description: "Description of Product 1" },
        { id: 2, name: "Product 2", price: "$30", description: "Description of Product 2" },
        { id: 3, name: "Product 3", price: "$40", description: "Description of Product 3" },
        { id: 4, name: "Product 4", price: "$50", description: "Description of Product 4" },
        { id: 5, name: "Product 1", price: "$20", description: "Description of Product 1" },
        { id: 6, name: "Product 2", price: "$30", description: "Description of Product 2" },
        { id: 7, name: "Product 4", price: "$50", description: "Description of Product 4" },
        { id: 8, name: "Product 1", price: "$20", description: "Description of Product 1" },
        { id: 9, name: "Product 2", price: "$30", description: "Description of Product 2" },
        { id: 10, name: "Product 3", price: "$40", description: "Description of Product 3" },
        { id: 11, name: "Product 4", price: "$50", description: "Description of Product 4" },
    ];

    return (
        <Container className="my-5">
            <h2>Products</h2>
            <Row>
                {productList.map(product => (
                    <Col md={3} key={product.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text><strong>{product.price}</strong></Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;
