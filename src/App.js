import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Movie from './movie/Movie';
import NotFound from './NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/movie/:id" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
