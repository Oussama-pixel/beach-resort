import './App.css';
import Home from "./pages/Home";
import Error from "./pages/Error.js";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms" component={Rooms}/>
      <Route exact path="/rooms/:slug" component={SingleRoom}/>
      <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
