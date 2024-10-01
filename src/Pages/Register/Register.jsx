import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value; 

        createUser(email, password)
            .then(res => {
                toast.success("user created");
                console.log(res);
                e.target.reset();
                navigate("/login")

            })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    return (
        <Container className="my-5 mx-auto w-50">
            <h2>Create a New Account</h2>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit">
                    Register
                </Button>
            </Form>
            <div className="text-center mt-3">
                <Link to="/login">Already Have an Account ? Please Login</Link>
            </div>
        </Container>
    );
}

export default Register;
