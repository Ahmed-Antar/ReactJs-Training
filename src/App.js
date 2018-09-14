import React, { Component } from 'react';
import Liste from './Liste';
import TodoForm from './TodoForm';

import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      todos : []
    }
  }
  onNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({ todos : newTodoList });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">To Do List</h1>
        </header>
        <div className="App-intro">
        <TodoForm onNewTodo = {this.onNewTodo.bind(this)}/>
         <Liste todos={[]}/>
        </div>
      </div>
    );
  }
}

export default App;
