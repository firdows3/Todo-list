import add from "./images/add.png"
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Footer(props){

    return(
        <div className='todo-list-footer'>
            <div>{props.titles.length} Tasks</div>
            <Link to='addTodoList' className="todo-list-footer-right">
                <div>add task</div>
                <img className='todo-list-icon' src={add} />
            </Link>
        </div>
    )
}

function mapStateToProps (state) {
    return {
      titles: state.todo.titles
    }
  }
  export default connect(mapStateToProps)(Footer)