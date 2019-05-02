import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import * as routes from '../../routes';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Shows from '../Shows/Shows';
import ArticlesVideos from '../ArticlesVideos/ArticlesVideos'
import Gallery from '../Gallery/Gallery';
import Bio from '../Bio/Bio';

import './App.css';

export default class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path={routes.HOME} component={Home}/>
            <Route exact path={routes.SHOWS} component={Shows}/>
            <Route exact path={routes.ARTICLESVIDEOS} component={ArticlesVideos}/>
            <Route exact path={routes.GALLERY} component={Gallery}/>
            <Route exact path={routes.BIO} component={Bio}/>
          </Switch>
        </div>
    </BrowserRouter>
  );
  }
}
