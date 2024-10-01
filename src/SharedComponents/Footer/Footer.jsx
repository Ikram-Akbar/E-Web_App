import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';  // Social icons

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <Container>
                <Row>
                    {/* About Section */}
                    <Col lg={4} md={6} sm={12}>
                        <h5>About Us</h5>
                        <p className="small">
                            We are a leading e-commerce platform offering the best quality products at affordable prices. Follow us for more updates and offers!
                        </p>
                    </Col>

                    {/* Quick Links Section */}
                    <Col lg={4} md={6} sm={12}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/home" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="/products" className="text-white text-decoration-none">Products</a></li>
                            <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
                            <li><a href="/blogs" className="text-white text-decoration-none">Blogs</a></li>
                        </ul>
                    </Col>

                    {/* Social Media Section */}
                    <Col lg={4} md={6} sm={12}>
                        <h5>Follow Us</h5>
                        <div className="d-flex gap-3">
                            <a href="https://facebook.com" className="text-white"><FaFacebookF size={24} /></a>
                            <a href="https://twitter.com" className="text-white"><FaTwitter size={24} /></a>
                            <a href="https://instagram.com" className="text-white"><FaInstagram size={24} /></a>
                            <a href="https://linkedin.com" className="text-white"><FaLinkedinIn size={24} /></a>
                        </div>
                    </Col>
                </Row>

                <hr className="mt-4" />

                {/* Copyright Section */}
                <Row className="text-center">
                    <Col>
                        <p className="small mb-0">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
