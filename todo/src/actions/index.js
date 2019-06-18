export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


export const addTodo = text => {
    console.log('text', text);
    return {
        type: ADD_TODO,
        payload: text   
    };
}

export const toggleTodo = index => {
    console.log(index);
    return {
        type: TOGGLE_TODO,
        payload: index
    };
}