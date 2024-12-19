import { Route } from "react-router-dom";
import Login from "./login";

function ProtectedRoute(props) {
    var isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (isLoggedIn == "true") {
        return (<Route exact path={props.path} component={props.component} />)
    } else {
        return <Login />
    }
}

export default ProtectedRoute;