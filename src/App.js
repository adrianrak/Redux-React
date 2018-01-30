import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer.js';
import AddCommentContainer from './AddCommentContainer';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="App">
      <AddCommentContainer />
      <CommentsListContainer/>
      <DevTools />
    </div>
  );
};

export default App;
