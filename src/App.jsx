import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddNewTodo from './components/AddNewTodo/AddNewTodo'
import FilterTodoList from './components/FilterTodoList/FilterTodoList'
import AppDataProvider from './components/AppDataProvider'
import CategoryTodoList from './components/CategoryTodoList/CategoryTodoList'

function App() {
  return (
    <AppDataProvider>
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
