// Import necessary modules from React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your components

import App from './App';
import Login from '../../login/src/App'

// Create your routing component
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
