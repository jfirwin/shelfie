import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home.js';
import Shelf from './components/Shelf.js';
import Bin from './components/Bin.js';
import Create from './components/Create.js';


export default(
    <Switch>
      <Route component={ Home } path="/" exact/>
      <Route component={ Shelf } path="/shelf/:id" />
      <Route component={ Bin } path="/bin/:id2" />
      <Route component={ Create } path="/create/:id2" />
    </Switch>
)
