import React from 'react';
import './AddComment.css';

const AddComment = ({ text, addComment }) => {
    let input 
    return (
        <div>
            <form className="Add" onSubmit={ (e) => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                addComment(input.value);
                input.value = ''
            }}>
                <input
                    type="text"
                    placeholder="Add Comment"
                    value = { text }
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">
                    <i className="fa fa-plus-square"></i>
                </button>
            </form>
        </div>
    )
}
export default AddComment;