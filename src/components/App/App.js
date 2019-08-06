import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import LandingPage from '../../routes/LandingPage/LandingPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import ProfilePage from '../../routes/ProfilePage/ProfilePage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import JobsListPage from '../../routes/JobsListPage/JobsListPage';
import NavBar from '../../components/NavBar/NavBar';
import PrivateRoute from '../../components/Utils/PrivateRoute';

class App extends React.Component {
  state = {
    hasError: null
  }
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <NavBar />
        </header>
        <main className="App__main">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}

          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route path={'/login'} component={LoginPage} />
            <Route path={'/register'} component={RegistrationPage} />
            <Route path={'/jobs'} component={JobsListPage} />
            <PrivateRoute path={'/profile'} component={ProfilePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>


      </div>
    );
  }
}

export default App;