import { Link } from 'react-router-dom';

import './Register.css';

export const Register = () => {
    return (
        <>
        <div>
            <form style={{width:"50%", margin: "80px auto"}} id="register-form"  method="POST">
                <h1 className="register-header">Register</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input name="password"  type="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input name="confirm-password"  type="password" className="form-control" id="confirm-password" required/>
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