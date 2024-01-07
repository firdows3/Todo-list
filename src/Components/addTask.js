import { connect } from "react-redux";
import { useState } from "react";
import { addTodo} from "../redux/todoList/todoListActions"
import { useNavigate } from "react-router";

function AddTask(props){

    const navigation = useNavigate();
    const [title, setTitle] = useState('')

    
  const pushTitle = () => {
    const newTask = ({
      id: Math.floor(Math.random() * 1000), // You may use a more reliable ID generation method
      title: title,
      tasks: []
    });
    props.addTodo(newTask)
  }

    return (
        <>
        <div className='add-todo-list-body'>
          <div className="todo-list-input-body">
            <input className="todolist-title-input" placeholder='Add a title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <div className="todolist-add-task-button" onClick={()=>{ 
              pushTitle()
              navigation(-1)
              }}>Add</div>
          </div>
        </div>
        </>
    )
}

function mapStateToProps (state) {
    return {
      titles: state.todo.titles
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return {
      addTodo: (todo) => dispatch(addTodo(todo)),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddTask)