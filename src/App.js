import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { PostsList } from './features/posts/PostsList'
import { AddPost } from './features/posts/AddPost'

import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <React.Fragment>
                <AddPost />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  )
}

export default App
