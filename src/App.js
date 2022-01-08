import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
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

        </Switch>
      </Router>
    </div>
  );
}

export default App;
