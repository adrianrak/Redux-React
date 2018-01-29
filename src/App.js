import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer.js';
import AddCommentContainer from './AddCommentContainer';

const App = () => {
  return (
    <div className="App">
      <AddCommentContainer />
      <CommentsListContainer/>
    </div>
  );
};

export default App;
