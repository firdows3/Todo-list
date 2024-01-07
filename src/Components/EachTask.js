import { useState, useEffect } from "react";
import selectIcon from "./images/select.png"
import selected from "./images/selected.png"
import { Link, useNavigate } from "react-router-dom";

export default function EachTask ({ item, routes, currentHour, currentMin }) {
    
    const [editedText, setEditedText] = useState(item.title);
    
    useEffect(()=>{
        setEditedText(item.title)
        console.log(routes);
    }, [item])

      const [select, setSelect] =useState(false)
  
    return (
        <>
        <div className={routes === '' || routes ==='addTodoList' ? 'todo-list-each-component' : 'todo-list-each-component todo-list-listed-component'}>
            <div className='todo-list-body-left'>
                <img src={select ? selected : selectIcon} className='todo-list-icon' 
                onClick={() => setSelect(true)} />
               <Link to={`${item.id}`}><div className={select ? 'todo-list-complited-task todo-list-title-link' : 'todo-list-title-link'}>{editedText.toUpperCase()}</div></Link>
            </div>
            <div className="todo-list-hour">{currentHour}:{currentMin}</div>
        </div>
        </>
    )
}