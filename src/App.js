import React from 'react';

import './App.css';
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'

const store=createStore(()=>[],{},applyMiddleware())

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <PostForm></PostForm>
      <Posts></Posts>
    </div>
    </Provider>
    
  );
}

export default App;
