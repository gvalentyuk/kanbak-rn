import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import TasksList from "./tasks/kanban-board/TasksList";

import Login from "./user/components/Login";
import Register from "./user/components/Register";

const App: React.FC = () => {
  const { isLogged, login, logout, user } = useAuth();
  let routes;
  if (isLogged) {
    routes = (
      <Switch>
        <Route path={"/"} exact={true} component={TasksList} />
        <Redirect to={"/"} />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path={"/login"} component={Login} />
        <Route path={"/register"} component={Register} />
        <Redirect to={"/login"} />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{ isLogged, login, logout, user }}>
      <Router>{routes}</Router>
    </AuthContext.Provider>
  );
};

export default App;
