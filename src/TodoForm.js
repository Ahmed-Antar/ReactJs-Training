import React, { Component } from 'react';

class TodoForm extends Component {
    onClick(evt){
        evt.preventDefault();
        const txt = this.todoTitle.value;
        this.todoTitle.value = '';
        console.log("hello")
        this.props.onNewTodo({
            title : txt,
            createdAt : new Date(),
            done : false
        });
        
        
    }
    render() {
        return(
         <div className="form">
         <input type="text" ref = {(input) => this.todoTitle = input}/>
         <button onClick = {this.onClick.bind(this)}>Ajouter</button>
         </div>
        );
    }
}
export default TodoForm;