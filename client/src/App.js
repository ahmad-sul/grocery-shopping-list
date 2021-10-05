
import React from 'react';
import './App.css'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './component/Home'
import UpdateItem from './component/UpdateItem'

export default function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <Home/>
      <Switch>
         <Route exact path="/" component={Home} /> 
        <Route exact path="/update/:id" component={UpdateItem} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

