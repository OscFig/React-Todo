// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    const handleClick = () => {
        props.handleTaskCompleted();
    }

    return(
        <div className='TodoList-div'>
            {props.tasks.map(task => (
                <Todo handleTaskToggle={props.handleTaskToggle} key={task.id} task={task}/>
            ))}
            <button onClick={handleClick} className='clearBtn'>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;