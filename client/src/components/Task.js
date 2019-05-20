import React, { Component } from 'react';

class Task extends Component {
    render() {
        return this.props.tasks.map((task) => (
            <p>{ task.title }</p>
        ));
    }
}

export default Task;