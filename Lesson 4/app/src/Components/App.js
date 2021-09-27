import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Chats from "./Chats/Chats";
import Main from "./Main/Main";
import NotFound from "./NotFound/NotFound";
import Profile from "./Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <Link to="/">Home Page</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/chats">Chats</Link>
        </div>

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/chats" component={Chats} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
