import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/landing page/LandingPage.js"
import Home from './components/home/Home';
import Details from "./components/details/Details"
import newRecipe from "./components/newRecipe/NewRecipe"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home/:id" component={Details} />
          <Route path="/home" component={Home} />
          <Route path="/recipe" component={newRecipe} />

        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
