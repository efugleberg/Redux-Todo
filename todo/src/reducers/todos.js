import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
    todos: [
        { todo: 'Learn React', completed: false },
        { todo: 'Learn Redux', completed: false },
        { todo: 'Watch Anime', completed: false }
    ]
}

export const todos = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            const newTodo = { todo: action.payload, completed: false };
            return {
                ...state,
                todos: [...state.todos, newTodo ]
            };
            case TOGGLE_TODO:
                return {
                    ...state,
                    todos: state.todos.map((todo, index) => {
                        if(action.payload === index) {
                            return {
                                ...todo,
                                completed: !todo.completed
                            }
                        } else {
                            return todo;
                        }
                    })
                };
            default:
                return state
    }
}

