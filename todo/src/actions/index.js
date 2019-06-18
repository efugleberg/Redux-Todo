export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


export const addTodo = newTodo => {
    console.log('text', newTodo);
    return {
        type: ADD_TODO,
        payload: newTodo   
    };
}

export const toggleTodo = index => {
    console.log('truthy', index);
    return {
        type: TOGGLE_TODO,
        payload: index
    };
}