import React from 'react'
import { TodoItem } from "./TodoItem"

export const Todos = (props) => {
    let todoStyle={
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={todoStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length===0? "No todos remaining":
            props.todos.map((todo) => {
                return (
                    <>
                        <TodoItem todo={todo} key={props.No} onDelete={props.onDelete}/><hr/>
                    </>)
            })
        }
        </div>
    )
}
