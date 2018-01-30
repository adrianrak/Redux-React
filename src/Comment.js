import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
  <li className="CommentLi">
    <div className="text">
      {text} 
    </div>
    <div>
      <span>votes: {votes}</span> 
      <button onClick={() => thumbUpComment(id)}><i className="fa fa-thumbs-o-up"></i></button>
      <button onClick={() => thumbDownComment(id)}><i className="fa fa-thumbs-o-down"></i></button>
      <button onClick={() => removeComment(id)}><i className="fa fa-trash"></i></button>
    </div>
  </li>;

export default Comment;