import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const [error, setError] = useState('');

    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);


    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/login';


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;


        console.log(name, photo, email, password);

        if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/.test(password)) {
            setError('Password must contain atleast one capital letter, one number, one symbol and 8 characters long')
            return
        }


        createUser(email, password)

            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                navigate(from, { replaCE: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })

    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }
    return (

        <div>
            <Container className=" mx-auto mt-5">
                <div className="container">
                    <div className="row mx-auto">
                        <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12 mx-auto">
                            <h3>Please Register</h3>
                            <Form onSubmit={handleRegister}>
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
                                    <Form.Check onClick={handleAccepted} type="checkbox" name="accept" label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
                                </Form.Group>
                                <Form.Text className='text-danger'>
                                    {error}
                                </Form.Text> <br />

                                <Button disabled={!accepted} variant="dark" type="submit">
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