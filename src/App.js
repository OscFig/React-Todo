import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

  // you will need a place to store your state in this component. 
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

const tasks = [
  {
    name: 'Sleep',
    id: 123,
    completed: false
  },
  {
    name: 'Eat',
    id: 234,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: tasks
    }
  }
  handleTaskToggle = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(task.id === taskId){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return(task);
      })
    });
  };
  handleTaskAdd = taskName => {
    const tasks = {
      name: taskName,
      id: Date.now(),
      completed: false
    };

    const newTasks = [...this.state.tasks, tasks];

    this.setState({
      tasks: newTasks
    });
  }
  handleTaskCompleted = () => {
    const newTasks = this.state.tasks.filter(task => {
      return(!task.completed)
    });

    this.setState({
      tasks: newTasks
    });
  }
 
  render() {
    return (
      <div className='App-div'>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm handleTaskAdd={this.handleTaskAdd}/>
        </div>
        <TodoList tasks={this.state.tasks} handleTaskCompleted={this.handleTaskCompleted} handleTaskToggle={this.handleTaskToggle} />
      </div>
    );
  }
}

export default App;
