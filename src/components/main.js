import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Odontologos from './odontologos';
import LandingPage from './landing';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/odontologos" component={Odontologos} />   
    </Switch>
)
export default Main;