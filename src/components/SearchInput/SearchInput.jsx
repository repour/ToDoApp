import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

let SearchInput = ({ className, text, setText, onEnterPressed, category, setCategory }, ref) => {



    const handleKeyUp = (keyUpEvent) => {
        if (keyUpEvent.code == 'Enter') {
            onEnterPressed?.()
        }

    }

    return (
        <>
            <TextField id="outlined-multiline-static" label="Set your new task" multiline ref={ref} onKeyUp={handleKeyUp} value={text} onChange={(evt) => setText(evt.target.value)} type="text" className={className} />
            <FormControl sx={{ ml: 2, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='Work'>Work</MenuItem>
                    <MenuItem value='Personal'>Personal</MenuItem>
                    <MenuItem value='Others'>Others</MenuItem>

                </Select>
            </FormControl>
        </>
    )
}


SearchInput.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    setText: PropTypes.func.isRequired,
    setCategory: PropTypes.func.isRequired,
    onEnterPressed: PropTypes.func
}

SearchInput = forwardRef(SearchInput)


export default SearchInput