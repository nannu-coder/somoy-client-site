import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/HomePage/Home/Home';
import NavBar from './Components/HomePage/NavBar/NavBar';
import Login from './Components/Login/Login/Login';
import SignUp from './Components/Login/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';
import BuyNow from './Components/BuyNow/BuyNow/BuyNow';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>

            <PrivateRoute path='/buynow/:Id'>
              <BuyNow></BuyNow>
            </PrivateRoute>

            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>

          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
