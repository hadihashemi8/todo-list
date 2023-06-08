import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from "../TodoItem/TodoItem"

export default function TodosContainer({ filterTodos }) {

    const complatedTodos = useSelector(state => state.todos.filter(todo => todo.isComplated))
    const todos = useSelector(state => state.todos)
    let [filterdTodosList, setFilterdTodosList] = useState([])

    useEffect(() => {
        let filterItems = filterTodos == 'Complated' ? todos.filter(todo => todo.isComplated) : filterTodos == 'UnComplated' ?todos.filter(todo => !todo.isComplated) : todos
        setFilterdTodosList(filterItems)
    }, [todos , filterTodos])



    return (
        <div className='todos-container'>
            <ul className='todos-list'>
                {filterdTodosList.map(todo => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </ul>
            {todos.length > 0 && filterTodos == 'All' && (
                <h4 style={{ textAlign: 'center', marginTop: 10 }}>Complated Todos : {complatedTodos.length} </h4>

            )}
        </div>
    )
}
