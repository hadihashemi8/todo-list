import { createSlice } from "@reduxjs/toolkit"

let todos = JSON.parse(localStorage.getItem('todos'))


const todoSlice = createSlice({
    name: 'todos',
    initialState: todos !== null ? todos : []
    ,
    reducers: {
        addTodo: (state, action) => {

            const newTodo = {
                id: state.length + 1,
                title: action.payload.title,
                isComplated: false
            }
            state.push(newTodo)
            localStorage.setItem('todos', JSON.stringify(state))
        },
        removeTodo: (state, action) => {
            let todos = JSON.parse(localStorage.getItem('todos')).filter(todo => todo.id !== action.payload.id)

            localStorage.setItem('todos', JSON.stringify(todos))
            return state.filter(todo => todo.id !== action.payload.id)

        },
        clearAllTodos: (state, action) => {
            localStorage.removeItem('todos')
            return state = []
        },
        toggleTodo: (state, action) => {

            let index = state.findIndex(todo => todo.id === action.payload.id)

            state[index].isComplated = !state[index].isComplated
            localStorage.setItem('todos', JSON.stringify(state))
        },
        showAllTodos: (state) => {

            return state
        },
        showComplatedTodos: (state) => {
            return [...state, state.filter(todo => todo.isComplated)]


        },
        showUnComplatedTodos: (state) => {

            return [...state, state.filter(todo => !todo.isComplated)]


        }

    }
})


export const { addTodo, removeTodo, toggleTodo, showAllTodos, showComplatedTodos, showUnComplatedTodos, clearAllTodos } = todoSlice.actions

export default todoSlice.reducer