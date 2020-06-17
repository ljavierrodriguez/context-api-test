import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Detail from './views/detail';
import Navbar from './components/navbar';
import inyectContext from './store/appContext';

const App = props => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/character/:id/details" component={Detail} />
          <Route exact path="/" component={Home} />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default inyectContext(App);
