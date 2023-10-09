import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { FaXmark, FaCheck } from 'react-icons/fa6'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const EditableInput = props => {
    const inputRef = useRef(null);

    const [text, setText] = useState(props.defaultText)
    const [category, setCategory] = useState(props.defaultCat)

    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    const onSubmit = () => {
        if (text.length) {
            props.onSubmit?.(text, category)
        }
    }

    const onCancel = () => {
        props.onCancel?.();
    }

    useEffect(() => {
        setTimeout(() => {
            inputRef.current.focus();
        }, 50)
    }, [])

    const handleKeyUp = (evt) => {
        if( evt.code === 'Enter'){
            onSubmit();
        }
        else if (evt.code === 'Escape'){
            onCancel();
        }
    }


    return (
        <div className='flex h-6 gap-2'>
            <input onKeyUp={handleKeyUp} ref={inputRef} value={text} onChange={handleChange} className='flex-grow p-2 text-gray-600 border border-gray-300 rounded focus:outline-none' />
            <FormControl size='small' sx={{width:120}}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <MenuItem value='Work'>Work</MenuItem>
                    <MenuItem value='Personal'>Personal</MenuItem>
                    <MenuItem value='Others'>Others</MenuItem>

                </Select>
            </FormControl>
            <Button color="primary"  disabled={text.length === 0} onClick={onSubmit}> <FaCheck /> </Button>
            <Button color="secondary" onClick={onCancel} ><FaXmark /></Button>
        </div>
    )
}
<Button color="secondary"></Button>
EditableInput.propTypes = {
    defaultText: PropTypes.string,
    defaultCat:PropTypes.string,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func
}

export default EditableInput