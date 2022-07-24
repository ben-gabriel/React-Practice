import React from "react";

const Todo = ({text, todos, todo, setTodos})=>{

    const deleteHandler = ()=>{
        setTodos(todos.filter((element) => element.id !== todo.id))
    }

    const completeHandler = ()=>{
        // let arraymap = todos.map((el)=> {
        //     if(el.id === todo.id){ 
        //         return {...el, completed : !el.completed};
        //     }
        //     else{
        //         return el;
        //     }
        // });
       
        // setTodos(arraymap);

        //-----------------------------
        // let arraymap = todos.map((el)=> 
        //     (el.id === todo.id) ? {...el, completed : !el.completed} : el
        // );
        
        // console.log(arraymap)
        // setTodos(arraymap);

        //-----------------------------
        setTodos(todos.map((el)=> (el.id === todo.id) ? {...el, completed : !el.completed} : el));
    }

    return (
        <div className={`todo ${todo.completed ? 'completed': ''}`} >
            <li className="todo-item">{text}</li>
            
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            
            <button onClick={deleteHandler} className="trash-btn"> 
                <i className="fas fa-trash"></i> 
            </button>
            
        </div>
    );
}

export default Todo;