import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import edit from "./images/edit.webp"
import selectIcon from "./images/select.png"
import selected from "./images/selected.png";
import { addTask, updateTodo, removeTodo } from "../redux/todoList/todoListActions";

function EachTaskDescription(props){

  const [task, setTask] = useState('');
  const [inputTask, setInputTask] = useState(task)
  const [isAddingTask, setIsAddingTask] = useState(true);
  const [active, setActive] = useState(false)

  const handleDelete = (id) => {
    console.log(id);
    props.removeTodo(id);
    navigate('/');
}

  const { navigate } = props
  
  useEffect(()=>{
    if(eachTaskDescription[0]?.title && (inputTask !== null || inputTask !== '')){
      props.addTask(eachTaskDescription[0]?.title, inputTask) 
    }
  }, [inputTask])
  const { updateTodo } = props
  
  const updateTask = (updatedTask) => {
    updateTodo(updatedTask)
  };
  
  const pushTask = () => {
    if (task.trim() !== '') {
      setInputTask(task)
    }
    else{
      return;
    }
    setTask('');
    setIsAddingTask(false)
  }

    const { id } = useParams();
    console.log(id);
    const eachTaskDescription = props.titles.filter(taskDescription =>  taskDescription.id == id)
    const [editedTitle, setEditedTitle] = useState('')
    console.log(props.titles);

    useEffect(()=>{
      if(eachTaskDescription[0]?.title) setEditedTitle(eachTaskDescription[0].title)
    }, [eachTaskDescription])
    
   console.log(eachTaskDescription[0]?.tasks?.length);
if (props.titles.length === 0) {
  return navigate('/')
  // return window.location.href ='/'
}
    return(
        <>
        <div className={props.routes === '' ? 'todolist-each-component-container' : "todolist-each-component-container todolist-each-component-container-visible"}>
          <div className="each-task-top">
            <div className="todolist-each-component-title">{editedTitle.toUpperCase()}</div>
            <div onClick={()=>setIsAddingTask(!isAddingTask)}>+</div>
          </div>
          {
          isAddingTask ? 
          <div className="todo-list-add-description">
            <input className="todolist-description-input" placeholder="Add a task" value={task} onChange={(e)=> setTask(e.target.value)} />
            <div className="todolist-add-task-button description-button" onClick={pushTask}>Add</div>    
          </div> : <></>
          }
          {
            <div className="todo-list-each-task-items">
          { 
            eachTaskDescription[0].tasks.map(item => {
              return <EachTaskItem key={item} item={item} updateTask={updateTask} />
            })
            
          }
          </div>
          }
          <div className="todo-list-delete">
            <div className="todo-list-delete-button" onClick={()=>setActive(true)} >Delete</div>
          </div>
            {active ? <div className="todo-list-delete-message">
              <div>Are you sure, do you want to delete all tasks?</div>
              <div className="todo-list-yes-no-buttons">
                <div className="todo-list-delete-button" onClick={()=>handleDelete(eachTaskDescription[0].id)}>Yes</div>
                <div className="todo-list-delete-button" onClick={()=>setActive(false)}>No</div>
              </div>
            </div>: <></>}
        </div>
        </>
    )
}



function EachTaskItem({ item, updateTask }){

  
  const [isEditingTask, setIsEditingTask] = useState(false)
  const [editedDescription, setEditedDescription] = useState(item)
  const [select, setSelect] =useState(false)

  useEffect(()=>{
    setEditedDescription(item)
  }, [item])
  
  return (
    <>
    {isEditingTask ? (
      <div className='todo-list-edit'>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className='todo-list-edit-input'
            />
          <button className='todo-list-edit-button' 
          onClick={() => {
            updateTask(editedDescription);
            setIsEditingTask(false)
          }}>Save</button>
        </div>
        ) : <div></div>}
{editedDescription.length === 0 ? <></> : 
    <>
    <div className="todolist-each-row">
      <div className='todo-list-body-left'>
        <img src={select ? selected : selectIcon} className='todo-list-description-icon' onClick={() => setSelect(true)} />
        <div className={select ? 'todo-list-complited-task' : 'todolist-each-component-description'}>{editedDescription}</div>
      </div>
      <div>
        {select ? <></>:<img src={edit} className='todo-list-description-icon' onClick={() => setIsEditingTask(true)} />}
      </div>
    </div> 
    </>
}
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
    addTask: (todo, task) => dispatch(addTask(todo, task)),
    updateTodo: (id) => dispatch(updateTodo(id)),
    removeTodo: (id) => dispatch(removeTodo(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EachTaskDescription)

