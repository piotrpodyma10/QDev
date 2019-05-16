import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Route } from 'react-router-dom'
import Game from './Views/Game'
import Result from './Views/Result'

ReactDOM.render(
  <BrowserRouter>
    <Route 
      exact component={App}
      path="/"      
    />
    <Route 
      component={Game}
      path="/Game"
    />
    <Route 
      component={Result}
      path="/Result"
    />
  </BrowserRouter>,
  document.getElementById('root')
)