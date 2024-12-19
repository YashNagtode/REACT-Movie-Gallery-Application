import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();

    var isLoggedIn = sessionStorage.getItem("isLoggedIn");
    var username = sessionStorage.getItem("email");

    // const handleOnClick = () => {
    //     history.push("/dashboard");
    //   }

    const Signin = () => {
        history.push("/");
    }

    const Signout = () => {
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("userId");
        sessionStorage.clear();
        history.push("/");
    }


    return (

        <div className="container">

            <img alt="logo" src="http://localhost:3000/logo.jpg"
                className="img-responsive logo"
            />

            {
                username == null ? <button className='btn btn-danger ' onClick={Signin}>SignIn</button> :
                    <>      <button className='btn btn-danger ' onClick={Signout}>Sign out</button>

                        <h5>Hello, {username}</h5>
                    </>

            }

        </div>
    );
}

export default Header;
