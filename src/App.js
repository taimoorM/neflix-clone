import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Login, Signup } from "./pages";

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.LOGIN}>
        <Login />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
