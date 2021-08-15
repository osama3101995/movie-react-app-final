import MainAppBar from "./components/AppBar/AppBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WatchLater from "./domain/WatchLater/WatchLater";
import MovieList from "./domain/MovieList/MovieList";



function App() {



  return (

    <Router>
    <div className="App">
      <MainAppBar ></MainAppBar>


      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/watch-later" component={WatchLater} />
      </Switch>

    </div>
    </Router>

  );
}

export default App;
