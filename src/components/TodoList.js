import React from "react";
import Todo from './Todo'

const TodoList = ({sortedTodos, setSortedTodos, sort})=>{
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {sortedTodos.map((todo)=>(
                    <Todo 
                        key={todo.id}

                        todo={todo} text={todo.text} 
                        
                        sortedTodos={sortedTodos} setSortedTodos={setSortedTodos}
                        
                        sort={sort}
                    />
                ))}

            </ul>
        </div>
    );

}
         
export default TodoList;