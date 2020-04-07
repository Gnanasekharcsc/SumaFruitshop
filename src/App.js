import React from 'react';
import './App.css';
import HomePage from './Home/homepage';
import {Route, Switch} from 'react-router-dom';

const BananasPage =()=>(
  <div>
    <h2>welcome to Bananas page</h2>
  </div>
)

const GrapesPage =()=>(
  <div>
    <h2>welcome to Grapes page</h2>
  </div>
)

function App() {
  return (
    <div>
      <h1>Suma Fruits Shop</h1>
      <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/bananas' component={BananasPage}/>
    <Route path='/grapes' component={GrapesPage}/>
    </Switch>
    </div>
  );
}

export default App;
