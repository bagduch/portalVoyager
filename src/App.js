import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import PrivateRoute from "./componets/PrivateRoute";
import PublicRoute from "./componets/PublicRoute";
import DashboardPage from "./pages/DashboardPage";
import { history } from "./helpers";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#009ee1",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={DashboardPage} />
          <PublicRoute exact path="/auth/login" component={LoginPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
