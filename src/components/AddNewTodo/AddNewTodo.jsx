import { useContext, useRef } from 'react'
import SearchInput from '../SearchInput/SearchInput'
import AddButton from '../AddButton/AddButton'
import { AppData } from '../AppDataProvider'

const AddNewTodo = () => {
    const inputRef = useRef(null);

    const { addNewTodo, todoText, setTodoText, category, setCategory } = useContext(AppData)
    

    const handleAddNewItem = () => {
        if (todoText.length >= 3) {
            addNewTodo(todoText)

            inputRef.current.focus();
        }
    }

    return (
        <div className='flex pt-6'>
            <SearchInput onEnterPressed={handleAddNewItem} ref={inputRef} category={category} setCategory={setCategory} text={todoText} setText={setTodoText} className="flex-grow rounded-l-lg rounded-tr-none rounded-br-none " />
            <AddButton onClick={handleAddNewItem} isCategorySet={category} />
        </div>
    )
}


export default AddNewTodo