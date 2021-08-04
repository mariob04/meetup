import { Route, Switch } from 'react-router-dom';
import MainNav from './components/layout/MainNav';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
    <div>
      <MainNav />
      <Switch>
      <Route path='/' exact>
          <AllMeetups />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetup />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
