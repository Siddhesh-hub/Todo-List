import React from 'react'
import { TodoItem } from "./TodoItem"

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center">Todos List</h3>
            {props.todos.length===0? "No todos remaining":
            props.todos.map((todo) => {
                return (
                    <>
                        <TodoItem todo={todo} key={props.No} onDelete={props.onDelete}/>
                    </>)
            })
        }
        </div>
    )
}
