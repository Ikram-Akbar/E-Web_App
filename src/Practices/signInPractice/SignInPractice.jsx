import { auth } from "../../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SlLogin } from "react-icons/sl";
import { GrUserNew } from "react-icons/gr";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";


const SignInPractice = () => {
    const [users, setUsers] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //Google :
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedUser = result.user;
                setUsers(loggedUser);
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    //GitHub: 
    const handleGitHubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUsers(result.user);
            })
            .catch((error) => {
                console.warn("Error Code :", error.code, " Message:", error.message)
            })
    }

    //LogOut: 
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUsers(null);
                console.log("user logout");
                window.alert("User Logout");
            })
            .catch((error) => {
                console.warn(error.message, error.code)
            })
    }
    return (
        <div>
            <Container className="my-5 mx-auto w-75">
                <h2 className="text-center mb-4">Sign In</h2>
                <Row>
                    <Col md={6}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                <SlLogin /> Sign In
                            </Button>
                        </Form>
                        <div className="text-center mt-3">
                            <GrUserNew size={24} className='mx-1' />  <Link to="/register">New user? Please Register</Link>
                        </div>
                    </Col>
                    <Col md={4} className="d-flex flex-column align-items-center">
                        <p className="text-center mb-3">Log in with Social Media</p>
                        <div className="d-flex flex-column">
                            <Button
                                onClick={handleGoogleLogin}
                                variant="outline-primary"
                                className="mb-2"
                                style={{ width: '100%' }}>
                                <FaGoogle />  Google
                            </Button>
                            <Button 
                            onClick={handleGitHubLogin}
                            variant="outline-primary" 
                            className="mb-2" 
                            style={{ width: '100%' }}>
                                <FaGithub /> GitHub
                            </Button>
                            <Button variant="outline-primary" style={{ width: '100%' }}>
                                <FaFacebook /> Facebook
                            </Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        {
                            users && <>
                                <p>{users?.displayName}</p>
                                <p>{users?.email}</p>
                                <img src={users?.photoURL} alt="" />
                                <Button onClick={handleLogOut}>Log Out</Button>
                            </>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignInPractice;