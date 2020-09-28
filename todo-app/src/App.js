import React from 'react';
import './App.css';

import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"


const tasks = [
  {
    name: "Sweeping",
    id: "1",
    completed: false,
  },
  {
    name: "Washing dishes",
    id: "2",
    completed: false,
  },
  {
    name: "Cleaning bathrooms",
    id: "3",
    completed: false,
  },
  {
    name: "Preparing meals",
    id: "4",
    completed: false,
  },
];


class App extends React.Component {
  constructor (){
    super();
    this.state = {
      tasks
    }
  }

  addTodo = (e, item) => {
    e.preventDefault()
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks:[...this.state.tasks, newItem]
    });
  };

  toggleItem = (itemId)=>{
    this.setState({
      tasks: this.state.tasks.map((item)=> {
        if(itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    })
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter((item)=> !item.completed)
    })
  }
  render() {
    return (
      <div className = "App">
        <div className = "header">
          <h1> Tasks List</h1>
          <TodoForm addItem ={this.addTodo} />
          <TodoList 
            tasks ={this.state.tasks} 
            toggleItem ={this.toggleItem} 
            clearCompleted ={this.clearCompleted}
            />
          
        </div>
      </div>
    )
  }
}

  
export default App;
