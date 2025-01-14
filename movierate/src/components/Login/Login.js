import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import './Login.css';

export const Login = () => {

    const { onLoginSubmit } = useContext(AuthContext);

    const { values, changeHandler, onSubmit } = useForm({
        "email":'',
        "password": '',
    }, onLoginSubmit)

    return (
        <>
           <section id="login-page" className="auth" >
            <form className="login-form" method="POST" onSubmit={onSubmit}>
                <h1 className="login-header">Login</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" value={values.email} onChange={changeHandler} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input name="password" type="password" className="form-control" id="password" value={values.password} onChange={changeHandler} required/>
                </div>      
                <button type="submit" className="btn-primary">Login</button>
                <div className="registeroption">
                    <p className="registerOptionText">
                        You don't have a profile? ... Come on... Go to the<Link to={"/register"} style={{"textDecoration":"none"}}> <b>Register page</b>  </Link>
                    </p>
                </div>
            </form>
        </section>
        </>
    )
}