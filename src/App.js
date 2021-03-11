import Login from "./components/Login";
import Home from "./components/Home";
import VideoGame from './components/VideoGame'
import Dlc from './components/Dlc'
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
const App = () => {
  return (
    <Router>
        <Route path={['/home']} component={Home} />
        <Route path="/video-games" component={VideoGame} />
        <Route path="/dlc" component={Dlc} />
    </Router>
  );
};
export default App;
