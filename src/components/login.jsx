import { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" })

    const url = "http://localhost:4444/user/login";
    const history = useHistory();
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (message != "") {
            setTimeout(() => {
                setMessage("");
            }, 3000);
        }
    }, [message]);

    const onTextChange = (args) => {
        var credentialsCopy = { ...credentials };
        credentialsCopy[args.target.name] = args.target.value;
        setCredentials(credentialsCopy);
    }

    const DoLogin = () => {
        debugger;
        axios.post(url, credentials).then((result) => {

            console.log(result.data);

            if (result.data.userData != null || result.data.userData != undefined) {
                // console.log(result.data.name)
                sessionStorage.setItem("isLoggedIn", "true");
                sessionStorage.setItem("email", result.data.userData.name);
                sessionStorage.setItem("token", result.data.token);
                console.log(result.data.token);
                debugger

                setMessage("Login Successful!")
                // debugger;
                history.push("/dashboard")

            }
        }).catch(setMessage("Login Again!"));
    }

    return (<>
        <div className="alert alert-warning"><h2>{message}</h2></div>
        <div className='table-responsive'>
            <table className='table col-md-6'>
                <tbody>
                    <tr>
                        <td>Email</td>
                    </tr>
                    <tr>
                        <td>
                            <input type='text' value={credentials.email}
                                name='email' onChange={onTextChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                    </tr><tr>
                        <td>
                            <input type='password' value={credentials.password}
                                name='password' onChange={onTextChange} />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={2}>
                            <button onClick={DoLogin} className='btn btn-primary'>Sign In</button>
                        </td>
                    </tr>
                    <tr>
                        <p>Don't have an account?
                            <a href="register" > Register</a>
                        </p>
                    </tr>
                </tbody>
            </table>
        </div>
    </>);
}

export default Login;