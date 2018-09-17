import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Liste extends Component {
    constructor( props ){
      super();
      this.state = {
          selectedTodos : []
      };
    }

    render() {
        const afficher = this.state.selectedTodos.length > 0;
        return(
              <div className="liste">Todos : { this.showTodos(this.props.todos) }
              { afficher ? <button onClick = { this.processTodos.bind(this) }>traiter</button> : null }
              </div>
        );

    }

    processTodos(){
        let list = this.state.selectedTodos;
        list.forEach( item => item.done = !item.done );
        this.setState({
          selectedTodos : list 
        });
        console.log("Les todos à traiter : ", this.state.selectedTodos);
    }

    toggleTodo(todo, index){
     this.props.onTodoToggle(todo, index)
    };

    addToList(index, doAdd){
      let _todo = this.props.todos[index];
      if( doAdd ){
        
       if ( this.state.selectedTodos.indexOf( _todo ) === -1 ){
          this.setState({
              selectedTodos : this.state.selectedTodos.concat( _todo )
          });
      }
    } else {
        let _list = this.state.selectedTodos;
        _list.splice( index, 1 );
        this.setState({
            selectedTodos : _list
        });
    }
    }

    showTodos(todos){
        return(
            todos.map((todo, idx) => {
                
                return(
                    <TodoItem todo = { todo } idx = { idx } key = { todo.title+''+idx } 
                    toggleTodo = { this.toggleTodo.bind(this) }
                    addToList = { this.addToList.bind( this ) } />
                )
            })
        );
    }
}

export default Liste;