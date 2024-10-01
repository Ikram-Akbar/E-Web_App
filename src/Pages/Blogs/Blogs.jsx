import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Blogs = () => {
    const blogPosts = [
        { title: "Blog Post 1", content: "This is the content of blog post 1." },
        { title: "Blog Post 2", content: "This is the content of blog post 2." },
        { title: "Blog Post 3", content: "This is the content of blog post 3." },
    ];

    return (
        <Container className="my-5">
            <h2>Blogs</h2>
            {blogPosts.map((post, idx) => (
                <Card key={idx} className="mb-3">
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.content}</Card.Text>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
}

export default Blogs;
