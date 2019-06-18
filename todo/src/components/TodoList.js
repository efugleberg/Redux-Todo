import React from 'react'
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';


class TodoList extends React.Component {
    state = {
        newTodo: ''
    };

    handleChanges = e => {
        this.setState({ newTodo: e.target.value })
    }

    add = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' })
    };

    toggleTodo = (e, index) => {
        e.preventDefault();
        this.props.toggleTodo(index);
    }

    render() {
        return (
            <React.Fragment>
                <div className = "to-dos">
                    {this.props.todos.map((todo, index) => (
                        <h4 onClick={e => this.toggleTodo(e, index)} key={index}>
                            {todo.todo}
                            {todo.completed}

                        </h4>
                    ))}
                </div>
                <input
                type='text'
                value={this.state.newTodo}
                onChange={this.handleChanges}
                placeholder="Add new Todo"
                />
                <button onClick={this.add}>Add Todo</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        todos: state.todos.todos
    };
};

export default connect(
    mapStateToProps,
    {addTodo, toggleTodo}
)(TodoList);