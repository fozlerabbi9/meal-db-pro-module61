import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('');
    const emailValue = useRef('');
    const passWord = useRef('');
    const confurmPass = useRef('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, errorr] = useCreateUserWithEmailAndPassword(auth)

    const submitFormFun = (e) => {
        e.preventDefault();
        const email = emailValue.current.value;
        const password2 = passWord.current.value;
        const confurmPassword = confurmPass.current.value;

        if (password2 !== confurmPassword) {
            setError("Your passWord Not Matching...Please Try Again")
            return;
        }
        else if (password2.length < 6) {
            setError("You must type 6 desite in password");
            return;
        }
        else {
            createUserWithEmailAndPassword(email, password2);
            setError("Register Successes you can log-in now")
        }
        // console.log(email, password, confurmPassword);
        // createUserWithEmailAndPassword(email, password2);
    }

    if(user){
        navigate("/");
    }
    
    return (
        <div>
            <h3>this is header page</h3>

            <div className='form-style'>
                <Form onSubmit={submitFormFun}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailValue} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passWord} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confurm Password</Form.Label>
                        <Form.Control ref={confurmPass} type="password" placeholder="Confurm-Password" required />
                    </Form.Group>
                    {
                        error ? <p style={{ color: "red" }}>{error}</p> : ''
                    }
                    <p>If You Are Already Registerd Go To... <Link className='text-decoration-none' to="/login">Login</Link> </p>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>


        </div>
    );
};

export default Register;