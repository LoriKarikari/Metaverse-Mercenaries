import { useEffect, useState } from 'react'
import { useAccount } from '../hooks/useAccount'
import { useContract } from '../hooks/useContract'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  const [account, updateAccount] = useAccount()
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const contract = useContract({})
  const [loading, setLoading] = useState(true)

  async function createTodo() {
    const todoTxn = await contract?.functions.createTodo(todo)
  }

  async function getTodos() {
    const todos = await contract?.functions.getTodos()
    return todos
  }

  useEffect(() => {
    async function callGetTodos() {
      const todos = await getTodos()
      setTodos(todos)
    }
    callGetTodos()
    setLoading(false)
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Todo App</h1>
        {account ? (
          <div>
            {loading ? (
              <p>loading</p>
            ) : (
              <div>
                {todos?.map((todo) => (
                  <div>{todo.text}</div>
                ))}
                <input
                  value={todo}
                  onChange={(event) => setTodo(event.target.value)}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
                <button onClick={createTodo}>Create todo</button>
              </div>
            )}
          </div>
        ) : (
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={updateAccount}
          >
            Connect with Metamask
          </button>
        )}
      </main>
    </div>
  )
}
