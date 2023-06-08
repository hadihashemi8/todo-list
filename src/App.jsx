import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import TodosContainer from './components/TodosContainer/TodosContainer'
import { addTodo  , clearAllTodos} from './redux/todoSlice'


function App() {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  let [filterTodos , setFilterTodos] = useState('All')

  const addTodoToStore = () => {
      if (value.trim() !== '') {
        dispatch(addTodo({
          title: value
        }))
      }
      setValue('')
    }

const removeAllTodos = () => {
  dispatch(clearAllTodos())
}



  return (
    <div className='container'>
          <div className='input-container'>
            <div>
                <input className='todo-input' type="text" placeholder='Enter Todo...' onKeyUp={(e) => e.key == 'Enter' && addTodoToStore() } value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className='btn-container'>
            <button className='add-todo-btn' onClick={addTodoToStore}>Add Todo</button>
            <button className='remove-todos-btn'   onClick={removeAllTodos}>Clear All</button>
            </div>
            <div className='filter-Buttons'>
                <button onClick={() => setFilterTodos('All')}>All</button>
                <button onClick={() => setFilterTodos('Complated')}>Complated</button>
                <button onClick={() => setFilterTodos('UnComplated')}>UnComplated</button>
            </div>
        </div>
      <TodosContainer filterTodos={filterTodos}/>
    </div>
  )
}

export default App
