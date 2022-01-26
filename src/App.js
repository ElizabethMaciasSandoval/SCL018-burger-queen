import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ViewHome from './components/views/ViewHome';
import ViewWaiter from './components/views/ViewWaiter';
import ViewCook from './components/views/ViewCook';
function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Switch>
        <Route path='/' exact>
          <ViewHome />
        </Route>
        <Route path='/meserx'>
          <ViewWaiter />
        </Route>
        <Route path='/cocinerx'>
          <ViewCook />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
