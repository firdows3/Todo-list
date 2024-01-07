import TodoList from "./Components/ToDoList";
import { connect } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Header from "./Components/header";
import EachTaskDescription from "./Components/eachTaskDescription";
import Footer from "./Components/footer";
import AddTask from "./Components/addTask";
import { useEffect, useState } from "react";

function App(props) {

  const location = useLocation()
  const [routes, setRoutes] = useState(location.pathname.split('/'))
  const navigate = useNavigate()

  
  useEffect(()=>{
    setRoutes(location.pathname.split('/'))
  },[location.pathname])

  return (
      <div className="App">
      <div className='todo-list-container'>
          <Header />
          <Routes>
            <Route path="/" element={<TodoList tasks={props.tasks} routes={routes[1]} navigate={navigate}/>}>
              <Route path=":id" element={<EachTaskDescription navigate={navigate} routes={routes[1]} />} />
              <Route path="addTodoList" element={<AddTask />} />
            </Route>
          </Routes>
          <Footer />
      </div> 
      </div>
  );
}

function mapStateToProps (state) {
  return {
    tasks: state.todo.tasks
  };
}

export default connect(mapStateToProps)(App)