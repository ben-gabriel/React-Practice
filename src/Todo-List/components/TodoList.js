import React from "react";
import Todo from './Todo'

const TodoList = ({sortedTodos, sort, setTodos})=>{
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {sortedTodos.map((todo)=>(
                    <Todo 
                        key={todo.id}

                        todo={todo} text={todo.text} 
                        
                        setTodos={setTodos}

                        sortedTodos={sortedTodos} 
                        
                        sort={sort}
                    />
                ))}

            </ul>
        </div>
    );

}
         
export default TodoList;