import React from 'react'
import { FaTrash } from "react-icons/fa"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo , } from '../../redux/todoSlice'




export default function TodoItem(props) {

    const dispatch = useDispatch()


    return (
        <li className={`todo-item ${props.isComplated && "complated"}`}>
            <h3>{props.title}</h3>
            <div className='icons'>
                <FaTrash style={{ marginInline: 5, color: 'black', cursor: 'pointer' }} onClick={() => dispatch(removeTodo({id:props.id}))}/>
                <AiOutlineCheckCircle style={{ marginInline: 5, color: 'white', cursor: 'pointer' ,  }}  size={22} onClick={() => dispatch(toggleTodo({id:props.id}))}/>
            </div>
        </li>
    )
}
