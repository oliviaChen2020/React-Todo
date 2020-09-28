import React from "react";
import Item from "./Item"

const TodoList = props => {
    console.log(props)
    return (
        <div className="todo-list">
            {props.tasks.map(item =>(
                <Item key={item.id} item={item} toggleItem ={props.toggleItem}/>
            ))}
            <button className ="clear-btn" onClick ={props.clearCompleted}> Clear Task</button>
        </div>
    )
}
export default TodoList;