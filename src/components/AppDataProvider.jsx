import { createContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

export const AppData = createContext(null);
let nextId = 0;

const AppDataProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [category, setCategory] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [currentTime, setCurrentTime] = useState('')

  const filterredTodos = useMemo(() => {
    if (activeFilter === 'all') {
      if (categoryFilter === 'All') {
        return todos
      }
      if (categoryFilter === 'Others') {
        return todos.filter(todo => todo.category === 'Others')
      }
      if (categoryFilter === 'Personal') {
        return todos.filter(todo => todo.category === 'Personal')
      }
      if (categoryFilter === 'Work') {
        return todos.filter(todo => todo.category === 'Work')
      }
    } 

    if (activeFilter === 'completed') {
      const res = todos.filter(todo => todo.completed === true)
      if (categoryFilter === 'All') {
        return todos.filter(todo => todo.completed === true)
      }
      if (categoryFilter === 'Others') {
        return res.filter(todo => todo.category === 'Others')
      }
      if (categoryFilter === 'Personal') {
        return res.filter(todo => todo.category === 'Personal')
      }
      if (categoryFilter === 'Work') {
        return res.filter(todo => todo.category === 'Work')
      }
    }

    if (activeFilter === 'pending') {
      const res = todos.filter(todo => todo.completed === false)
      if (categoryFilter === 'All') {
        return todos.filter(todo => todo.completed === false)
      }
      if (categoryFilter === 'Others') {
        return res.filter(todo => todo.category === 'Others')
      }
      if (categoryFilter === 'Personal') {
        return res.filter(todo => todo.category === 'Personal')
      }
      if (categoryFilter === 'Work') {
        return res.filter(todo => todo.category === 'Work')
      }
    }

  }, [activeFilter, todos, categoryFilter])

  const allTodos = useMemo(() => {
    return todos.length
  }, [todos])

  const allCompletedTodos = useMemo(() => {
    return todos.filter(todo => todo.completed === true).length
  }, [todos])

  const allPendingTodos = useMemo(() => {
    return todos.filter(todo => todo.completed === false).length
  }, [todos])

  const allCatTodos = useMemo(() => {
    return todos.length
  }, [todos])

  const personalTodos = useMemo(() => {
    return todos.filter(todo => todo.category === 'Personal').length
  }, [todos])

  const workTodos = useMemo(() => {
    return todos.filter(todo => todo.category === 'Work').length
  }, [todos])
  const othersTodos = useMemo(() => {
    return todos.filter(todo => todo.category === 'Others').length
  }, [todos])


  const addNewTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        text,
        completed: false,
        category
      }
    ])

    setTodoText('')
  }

  const toggleTodoCompletion = (id) => {

    const foundTodoIndex = todos.findIndex(todo => todo.id === id);
    if (foundTodoIndex != -1) {
      const copiedTodos = [...todos];
      const copiedTodo = { ...todos[foundTodoIndex] }
      copiedTodo.completed = !copiedTodo.completed
      copiedTodos.splice(foundTodoIndex, 1, copiedTodo)

      setTodos(copiedTodos);
    }
  }

  const updateTodoText = (id, text , cat) => {

    const foundTodoIndex = todos.findIndex(todo => todo.id === id);
    if (foundTodoIndex != -1) {
      const copiedTodos = [...todos];
      const copiedTodo = { ...todos[foundTodoIndex] }
      copiedTodo.text = text
      copiedTodo.category = cat
      copiedTodos.splice(foundTodoIndex, 1, copiedTodo)

      setTodos(copiedTodos);
    }
  }

  const handleDeleteTodoItem = (id) => {
    const foundTodoIndex = todos.findIndex(todo => todo.id === id);
    if (foundTodoIndex != -1) {
      const copiedTodos = [...todos];
      copiedTodos.splice(foundTodoIndex, 1)
      setTodos(copiedTodos);
    }
  }


  const value = {
    todos: filterredTodos,
    todoText,
    activeFilter,
    allTodos,
    allCompletedTodos,
    allPendingTodos,
    setActiveFilter,
    setTodoText,
    addNewTodo,
    toggleTodoCompletion,
    updateTodoText,
    handleDeleteTodoItem,
    setCategory,
    category,
    categoryFilter,
    setCategoryFilter,
    allCatTodos,
    personalTodos,
    workTodos,
    othersTodos,
    currentTime,
    setCurrentTime
  }

  return (
    <AppData.Provider value={value}>
      {children}
    </AppData.Provider>
  )
}

AppDataProvider.propTypes = {
  children: PropTypes.node.isRequired
}


export default AppDataProvider