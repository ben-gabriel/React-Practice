import React from "react";
import Todo from './Todo'

const TodoList = ({sortedTodos, setSortedTodos, sort, setTodos})=>{
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {sortedTodos.map((todo)=>(
                    <Todo 
                        key={todo.id}

                        todo={todo} text={todo.text} 
                        
                        setTodos={setTodos}

                        sortedTodos={sortedTodos} setSortedTodos={setSortedTodos}
                        
                        sort={sort}
                    />
                ))}

            </ul>
        </div>
    );

}
         
export default TodoList;