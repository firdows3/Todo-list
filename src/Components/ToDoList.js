import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './ToDoList.css'
import EachTask from './EachTask';
import { Outlet } from 'react-router';

function TodoList (props) {

  const {titles, editedText, setEditedText, routes} = props;

  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [currentMin, setCurrentMin] = useState(new Date().getMinutes());

  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentHour(new Date().getHours());
      setCurrentMin(new Date().getMinutes())
    }, 1000);
    return ()=> clearInterval(interval);
  })
 
    return (
      <>
      <div className='todo-list-body-container'>
        {
          titles.length === 0 ? <div className={routes === 'addTodoList' ? 'todo-list-body-empty-with-add-todoList' : 'todo-list-body-empty'}> Have a good day ... &#x1F31E; </div> : 
          <div className={routes === 'addTodoList' ? 'todo-list-body-with-add-todoList' :'todo-list-body'}>
            {
              titles.map(item => {
                  return <EachTask key={item.id} item={item} routes={routes} editedText={editedText} setEditedText={setEditedText} currentHour={currentHour} currentMin={currentMin} />
              })
            }
          </div>
        }
        <Outlet />
      </div>
      </>
    )
}

function mapStateToProps (state) {
  return {
    titles: state.todo.titles
  }
}

export default connect(mapStateToProps)(TodoList)