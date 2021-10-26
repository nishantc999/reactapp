import logo from './logo.svg';
import './App.css';
import StateProvider from './StateProvider';
import {Route,Switch} from 'react-router-dom'
import List from './List'
import Summary from './Summary'
import Bookform from './Bookform'

function App() {
  return (<>
  <StateProvider>
<Switch>
  <Route exact path="/" component={List} />
  <Route exact path="/summary/:id" component={Summary} />
  <Route exact path="/book/:movieid" component={Bookform} />
</Switch>

  </StateProvider>
  </>
   
  );
}

export default App;
