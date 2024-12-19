import { Route, Switch, useHistory } from "react-router-dom";
import DashBoard from "./dashboard";
import Login from "./login";
import Register from "./register";
import ProtectedRoute from "./protectedRoute";
import NotFound from "./notFound";
import ShowVideo from "./showVideo";
import Header from "./header";
// import { Router } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  return (
    <>
      <Header></Header>
      <Switch>

        <Route exact path="/" component={Login}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>

        {/* user */}
        <ProtectedRoute exact path="/dashboard" component={DashBoard} />
        <ProtectedRoute exact path="/showVideo/:id" component={ShowVideo} />



        <Route exact path="*" component={NotFound}></Route>

      </Switch>
    </>
  );
}

export default App;
