import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddNewTodo from './components/AddNewTodo/AddNewTodo'
import FilterTodoList from './components/FilterTodoList/FilterTodoList'
import AppDataProvider from './components/AppDataProvider'
import CategoryTodoList from './components/CategoryTodoList/CategoryTodoList'
import DigitClock from './components/DigitClock/DigitClock'

function App() {
  return (
    <AppDataProvider>
      <div className='container pt-6 '>
        <DigitClock />
      </div>
      <div className='container mx-auto'>
        <AddNewTodo />
        <FilterTodoList />
        <CategoryTodoList />

        <div className="pt-6">
          <TodoList />
        </div>
      </div>
    </AppDataProvider>
  )
}

export default App
