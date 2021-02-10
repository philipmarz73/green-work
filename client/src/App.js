import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import LogIn from "./containers/LogIn/LogIn";
import PlantCare from "./containers/PlantCare/PlantCare";
import SignIn from "./containers/SignIn/SignIn";




function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/logIn" component={LogIn}/>
          <Route exact path="/plantCare" component={PlantCare}/>
          <Route exact path="/signIn" component={SignIn}/>




        </Switch>
      </Router>
    </div>
  );
}

export default App;
