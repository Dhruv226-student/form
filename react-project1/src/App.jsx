import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItem1 from "./components/TodoItem1"
import "./App.css"

function App() {
  return (
    <>
      <div className="content">
       <AppName />
        <AddTodo />
     
        <div className="container">
         <TodoItem1/>
         <TodoItem1/>
        
        </div>
      </div>

    </>
  )
}

export default App
