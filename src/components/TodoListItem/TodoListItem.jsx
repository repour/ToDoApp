import { useState } from 'react'
import PropTypes from 'prop-types'
import { FaPen, FaTrashCan } from 'react-icons/fa6'
import EditableInput from '../EditableInput/EditableInput'
import { Button, Checkbox } from '@mui/material'

const TodoListItem = props => {
    const [isEditMode, setIsEditMode] = useState(false)

    const handleTodoItemEdit= () => {
        setIsEditMode(true);
    }

    const handleTodoDelete = () => {
        props.deleteItem?.(props.id)
    }

    const updateTodoText = (newText, newCategory) => {
        props.updateText?.(props.id, newText, newCategory)

        setIsEditMode(false)
    }

    const cancelTextUpdate = () => {
        setIsEditMode(false)
    }

    return (
        <div className='flex p-4 border border-gray-300 rounded-lg'>
            <div className='flex items-center flex-grow gap-x-4'>
                <Checkbox  label="Label" defaultChecked color="success" checked={props.completed} onChange={() => props.toggle(props.id)}  />
                {
                    isEditMode ?
                        <EditableInput defaultText={props.text} defaultCat={props.category} onSubmit={updateTodoText} onCancel={cancelTextUpdate}/> :
                        <div className={props.completed ? 'line-through' : ''}>{props.text}</div>
                }

            </div>
            <div className='flex items-center flex-shrink-0 gap-2'>
                <Button variant="contained" size="small" color="success" onClick={handleTodoItemEdit} endIcon={<FaPen />}>EDIT</Button>
                <Button variant="outlined" size="small" color="error" onClick={handleTodoDelete} endIcon={<FaTrashCan />}>DELETE</Button>

            </div>
        </div>
    )
}


TodoListItem.propTypes = {
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    updateText: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
}

export default TodoListItem