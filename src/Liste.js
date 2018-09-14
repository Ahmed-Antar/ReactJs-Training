import React, { Component } from 'react';

class Liste extends Component {
    render() {
        return(
              <div className="liste">{this.props.todos.length}</div>
        );

    }
}

export default Liste;