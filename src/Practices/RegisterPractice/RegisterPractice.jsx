import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';
import { toast } from 'react-toastify';
import { useState } from 'react';

const RegisterPractice = () => {
    const [showPass, setShowPass] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.success("Your Account has been created successfully!", {
                    icon: true,
                    theme: "colored"
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage, {
                    icon: true,
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
            });
    };

    return (
        <Container className="my-5 mx-auto w-50">
            <h2>Create a New Account</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                        required />
                    <p 
                        onClick={() => setShowPass(!showPass)} 
                        style={{ cursor: 'pointer', color: 'blue' }}>
                        {showPass ? 'Hide' : 'Show'} Password
                    </p>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <div className="text-center mt-3">
                <Link to="/login">Already Have an Account? Please Login</Link>
            </div>
        </Container>
    );
}

export default RegisterPractice;
