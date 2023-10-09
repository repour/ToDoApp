import { useContext } from 'react'
import { AppData } from '../AppDataProvider'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

const FilterTodoList = () => {
    const { setActiveFilter, activeFilter, allTodos, allCompletedTodos, allPendingTodos } = useContext(AppData)

    return (
        <>
            <ToggleButtonGroup
                color="primary"
                value={activeFilter}
                exclusive
                onChange={(e) => setActiveFilter(e.target.value)}
                aactivria-label="Platform"
                className="mt-6"
                sx={{
                    display: 'flex',
                    backgroundColor: '#dbffdb'
                }}
            >
                <ToggleButton value="all" className="basis-1/3">all ( {allTodos} )</ToggleButton>
                <ToggleButton value="completed" className="basis-1/3">completed ( {allCompletedTodos} )</ToggleButton>
                <ToggleButton value="pending" className="basis-1/3">pending ( {allPendingTodos} )</ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}


export default FilterTodoList