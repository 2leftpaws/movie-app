import './App.css';
import Profile from './Profile.js';
import Home from './Home.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="h-full">
        <BrowserRouter>
        <div className="h-full">
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/Profile/:id" component={Profile} />
        </Switch>
        </div>
        </BrowserRouter>
    </div>
  );
}


export default App;
