import { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


function Register() {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    })
    const [message, setMessage] = useState("");
    const url = "http://localhost:4444/user/register";

    const history = useHistory();

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
    const DoRegister = () => {
        debugger;
        axios.post(url, credentials)
            .then((result) => {

                if (result.data) {
                    setMessage("Registration Successful!")

                    history.push("/login");
                } else {
                    setMessage("Register Again")
                }
            })

    }


    return (
        <>
            <div className="alert alert-warning"><h2>{message}</h2></div>
            <div className='table-responsive'>

                <table className='table col-md-6'>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                        </tr>
                        <tr>
                            <td>
                                <input type='text' value={credentials.userName}
                                    name='uname' onChange={onTextChange}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                        </tr>
                        <tr>
                            <td>
                                <input type='text' value={credentials.email}
                                    name='email' onChange={onTextChange}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                        </tr><tr>
                            <td>
                                <input type='password' value={credentials.password}
                                    name='password' onChange={onTextChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Mobile Number:</td>
                        </tr>
                        <tr>
                            <td>
                                <input type='text' value={credentials.mobile}
                                    name='mobile' onChange={onTextChange}></input>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <button onClick={DoRegister} className='btn btn-primary'>Register</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>);
}

export default Register;