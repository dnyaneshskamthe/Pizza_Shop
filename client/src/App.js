import "./App.css";
import { Container } from "react-bootstrap";
import Topbar from "./components/Topbar"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import About from './components/About'
import ContactUs from "./components/ContactUs";
import Policy from "./components/Policy";
import NavBar from './components/NavBar'
import Homescreen from "./screens/Homescreen";

function App() {
  return (
    <BrowserRouter>
    <Topbar/>
    <NavBar/>
      <Switch>
        <Route path="/about" component={About} exact></Route>
        <Route path="/contact" component={ContactUs} exact></Route>
        <Route path="/policy" component={Policy} exact></Route>
        <Route path="/" component={Homescreen} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
