import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

import './Register.css';

export const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        'confirmPassword':''
    }, onRegisterSubmit)

    return (
        <>
        <div>
            <form className='register-form' id="register-form"  method="POST" onSubmit={onSubmit}>
                <h1 className="register-header">Register</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={values.email} onChange={changeHandler} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input name="password"  type="password" className="form-control" id="exampleInputPassword1" value={values.password} onChange={changeHandler} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input name="confirmPassword"  type="password" className="form-control" id="confirm-password" value={values['confirmPassword']} onChange={changeHandler} required/>
                </div>      
                <button type="submit" className="btn-primary">Register</button>
                <div className="loginoption">
                    <p className="loginOptionText">
                        You already have a profile? ... Come on... Go to the<Link to={"/login"} style={{"textDecoration":"none"}}> <b>Login page</b> </Link>
                    </p>
                </div>
            </form>
        </div>

        </>
    )
}