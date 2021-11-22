import Home from "./pages/home/Home";
import TopBar from "./components/Topbar/Topbar";
import Saved from "./pages/reservations/Reservations";
import HotelFilter from "./pages/hotels/Hotels";
import { RoomView } from './pages/Hotel/RoomView';
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/hotels">{user ? <HotelFilter /> : <Login />}</Route>
        <Route path="/hotel/:id">{user ? <RoomView /> : <Login />}</Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/reservations">{user ? <Saved /> : <Login />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;