import logo from './logo.svg';
import './App.css';
import StateProvider from './StateProvider';
import {Route,Switch} from 'react-router-dom'
import List from './List'
import Summary from './Summary'

function App() {
  return (<>
  <StateProvider>
<Switch>
  <Route exact path="/" component={List} />
  <Route exact path="/summary/:id" component={Summary} />
</Switch>

  </StateProvider>
  </>
   
  );
}

export default App;
