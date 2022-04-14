import React, { useRef, useState } from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Login = () => {
    const getEmail = useRef('');
    const getPassword = useRef('');
    // const [error, setError] = useState();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if(user){
        navigate(from, {replace : true})
    }

    const submitLogin = (e) => {
        e.preventDefault();
        const email = getEmail.current.value;
        const password = getPassword.current.value;
        signInWithEmailAndPassword(email, password);
    }

    // const navigate = useNavigate();
    const goRegistrPageFun = (e) => {
        navigate('/register/');
    }
    return (
        <div>
            <h3> this is login page</h3>


            <div className='form-style'>
                <Form onSubmit={submitLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={getEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={getPassword} type="password" placeholder="Password" />
                    </Form.Group>
                    {
                        error && <p style={{color : "red"}}>{error.message}</p>
                    }

                    <p>If You New In Site Please ... <Link className='text-decoration-none' to="/register">Register</Link>... First </p>
                    <p>go to <span className='text-danger' onClick={goRegistrPageFun}> register </span></p>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

        </div>
    );
};

export default Login;