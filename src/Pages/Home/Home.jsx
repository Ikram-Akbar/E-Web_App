import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { AuthContext } from '../../Providers/AuthProvider';


const Home = () => {
    const authInfo = useContext(AuthContext);
    return (
        <Container className="my-5">
                <h1>Mr {authInfo.name}</h1>
                <h1>Welcome to M/S Sharif Electric</h1>
                <p>
                    Your one-stop solution for all electrical products. Explore our range of products and services.
                </p>
                <p>
                    <Button variant="primary" href="/products">Shop Now</Button>
                </p>
       
        </Container>
    );
}

export default Home;
