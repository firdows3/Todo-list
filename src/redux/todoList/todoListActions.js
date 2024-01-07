export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const ADD_TASK = 'ADD_TASK'

export const addTodo = (task) => {
    return {
        type: ADD_TODO,
        payload: task
    }
}

export const addTask = (title, task) => {
    return {
        type: ADD_TASK,
        payload: { title, task}
    }
}

export const removeTodo = (id) => {
    return{
        type: REMOVE_TODO,
        payload: id
    }
}

export const updateTodo = (id) => {
    return{
        type: UPDATE_TODO,
        payload: id
    }
}