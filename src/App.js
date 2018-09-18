import React, { Component } from 'react';
import Liste from './Liste';
import Input from './Input';

import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      todos : []
    }
  }

  toggleTodoState(todo, index){
    let _todo = todo;
    _todo.done = !todo.done;
    let newTodos = this.state.todos;
    newTodos[index] = _todo;
    this.setState({ todos : newTodos });

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
        
        { this.renderInput() }
         <Liste todos={ this.state.todos} 
                 onTodoToggle = { this.toggleTodoState.bind(this) }/>
        </div>
      </div>
    );
  }

    renderInput(){
           return (<Input btnText = "Button"onNewTodo = {this.onNewTodo.bind(this)}/>)
    }
 
}

export default App;
