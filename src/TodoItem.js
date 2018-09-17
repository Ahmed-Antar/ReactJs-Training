import React, { Component } from 'react';

class TodoItem extends Component {
    render(){
        const todo = this.props.todo;
        const idx = this.props.idx;
        let str = todo.done ? 'marquer à faire' : 'marquer comme fait' ;
        return(
            <div className="todo" key = "todo-{ todo.title }">
                    { todo.title }
                    <button onClick =  { () => this.props.toggleTodo(todo, idx) }>{ str }</button>
                    </div>
        );
    }
}

export default TodoItem;