import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <Container className=" mx-auto mt-5">
                <div className="container">
                    <div className="row mx-auto">
                        <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12 mx-auto">
                            <h3>Please Login</h3>
                            <Form className="">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" required />
                                </Form.Group>


                                <Button variant="dark" type="submit">
                                    Login
                                </Button> <br />
                                <Form.Text className="text-black">
                                    Do not have an Account? <Link to='/register'>Register</Link>
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

export default Login;


