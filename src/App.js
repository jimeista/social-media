import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { PostsList } from './features/posts/PostsList'
import { AddPost } from './features/posts/AddPost'
import { SinglePost } from './features/posts/SinglePost'
import { EditPost } from './features/posts/EditPost'

import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
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
          <Route exact path={`/posts/:postId`} component={SinglePost} />
          <Route exact path={'/edit/:postId'} component={EditPost} />
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  )
}

export default App
