import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const Register = () => {
    return (

        <div>
            <Container className=" mx-auto mt-5">
                <div className="container">
                    <div className="row mx-auto">
                        <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12 mx-auto">
                            <h3>Please Register</h3>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Your name" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPhoto">
                                    <Form.Label>Photo URL</Form.Label>
                                    <Form.Control type="text" name="photo" placeholder="Your Photo" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" name="accept" label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
                                </Form.Group>

                                <Button variant="dark" type="submit">
                                    Register
                                </Button> <br />
                                <Form.Text className="text-black">
                                    Already have an Account? <Link to='/login'>Login</Link>
                                </Form.Text>
                                <Form.Text className="text-success">

                                </Form.Text>
                                <Form.Text className="text-danger">

                                </Form.Text>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;