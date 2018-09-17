import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Liste extends Component {
    render() {
        return(
              <div className="liste">Todos : { this.showTodos(this.props.todos) }</div>
        );

    }

    toggleTodo(todo, index){
     this.props.onTodoToggle(todo, index)
    };

    showTodos(todos){
        return(
            todos.map((todo, idx) => {
                
                return(
                    <TodoItem todo = { todo } idx = { idx } toggleTodo = { this.toggleTodo.bind(this) } />
                )
            })
        );
    }
}

export default Liste;