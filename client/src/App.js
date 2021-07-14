
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/layouts/Home'
import Auth from './views/Auth';
import AuthContextProvider from './contexts/AuthContext';
import ProtectedRoute from './routing/ProtectedRoute';
import Generality from './views/Generality';
import Analytics from './views/Analytics';
import User from './views/User';
import GeneralContextProvider from './contexts/GeneralContext';
import UserContextProvider from './contexts/UserContext';
import PredictContextProvider, { PredictContext } from './contexts/PredictContext';



function App() {
  return (
    <AuthContextProvider>
      <GeneralContextProvider>
        <UserContextProvider>
          <PredictContextProvider>
            <Router>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' render={props => <Auth {...props} authRoute='login'/>} />
                <Route exact path='/register' render={props => <Auth {...props} authRoute='register'/>} />
                <ProtectedRoute exact path='/generality' component={Generality}/>
                <ProtectedRoute exact path='/analytics' component={Analytics}/>
                <ProtectedRoute exact path='/user' component={User}/>
              </Switch>
            </Router>
          </PredictContextProvider>
        </UserContextProvider>
      </GeneralContextProvider>
    </AuthContextProvider>
  );
}

export default App;
