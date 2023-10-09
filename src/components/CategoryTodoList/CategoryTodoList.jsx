import PropTypes from 'prop-types'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useContext } from 'react'
import { AppData } from '../AppDataProvider'

const CategoryTodoList = () => {
    const { categoryFilter, setCategoryFilter, allCatTodos, personalTodos, workTodos, othersTodos} = useContext(AppData)

    return (

                    <ToggleButtonGroup
                    color="warning"
                    value={categoryFilter}
                    exclusive
                    onChange={(e)=>setCategoryFilter(e.target.value)}
                    aactivria-label="Platform"
                    className="mt-6"
                    sx={{
                        display: 'flex',
                    }}
                >
                    <ToggleButton value="All" className="basis-1/3">All ( {allCatTodos} )</ToggleButton>
                    <ToggleButton value="Work" className="basis-1/3">Work ( {workTodos} )</ToggleButton>
                    <ToggleButton value="Personal" className="basis-1/3">Personal ( {personalTodos} )</ToggleButton>
                    <ToggleButton value="Others" className="basis-1/3">Others ( {othersTodos} )</ToggleButton>
                </ToggleButtonGroup>
    )
}
CategoryTodoList.propTypes = {
    categoryFilter: PropTypes.string,
    setCategoryFilter: PropTypes.func,

}

export default CategoryTodoList