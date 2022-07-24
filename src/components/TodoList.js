import React from "react";
import Todo from './Todo'

const TodoList = ({todos, setTodos, sort})=>{
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo)=>(
                    <Todo 
                        key={todo.id}
                        todo={todo} text={todo.text} 
                        todos={todos} setTodos={setTodos}
                        sort={sort}
                    />
                ))}

            </ul>
        </div>
    );

}
         
export default TodoList;