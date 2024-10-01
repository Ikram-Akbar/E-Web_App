import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { SlLogin } from "react-icons/sl";
import { GrUserNew } from "react-icons/gr";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';



const SignIn = () => {
    const { logInUser, logInByGoogle } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        logInUser(email, password)
            .then((result) => {
                toast.success("User log in successfully");
                console.log(result.user);
                e.target.reset();
                navigate("/")
            })
            .catch((error) => {
                toast.error(error.message);
            })
    };
    const handleGoogleLogIn = () => {
        logInByGoogle()
            .then(() => {
                toast.success("successfully login");
                navigate("/")
            })
            .catch((err) => toast.error(err.message));
    }
    return (
        <Container className="my-5 mx-auto w-75">
            <h2 className="text-center mb-4">Sign In</h2>
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name='email'
                                type="email"
                                placeholder="Enter email"
                                required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name='password'
                                type="password"
                                placeholder="Password"
                                required />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100">
                            <SlLogin /> Sign In
                        </Button>
                    </Form>
                    <div className="text-center mt-3">
                        <GrUserNew size={24} className='mx-1' />  <Link to="/register">New user? Please Register</Link>
                    </div>
                </Col>
                <Col md={6} className="d-flex flex-column align-items-center">
                    <h3 className="text-center mb-3">Log in with Social Media</h3>
                    <div className="d-flex flex-column">
                        <Button
                            onClick={handleGoogleLogIn}
                            variant="outline-primary"
                            className="mb-2"
                            style={{ width: '100%' }}>
                            <FaGoogle />  Google
                        </Button>
                        <Button
                            variant="outline-primary"
                            className="mb-2"
                            style={{ width: '100%' }}>
                            <FaGithub /> GitHub
                        </Button>
                        <Button
                            variant="outline-primary"
                            style={{ width: '100%' }}>
                            <FaFacebook /> Facebook
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SignIn;
