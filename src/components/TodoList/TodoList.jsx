import { useContext } from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import { AppData } from '../AppDataProvider'


const TodoList = () => {
    
    const { todos, toggleTodoCompletion, updateTodoText, handleDeleteTodoItem } = useContext(AppData)

    if (todos.length === 0) {
        return <div className='min-h-[6rem] flex items-center justify-center text-gray-600 user-select-none'> You have nothing to do.</div>
    }
    
    return (
        <div className="flex flex-col items-stretch gap-y-4">
            {todos.map(todo => <TodoListItem key={todo.id} deleteItem={handleDeleteTodoItem} updateText={updateTodoText} toggle={toggleTodoCompletion} id={todo.id} text={todo.text} category={todo.category} completed={todo.completed} />)}
        </div>
    )
}




export default TodoList