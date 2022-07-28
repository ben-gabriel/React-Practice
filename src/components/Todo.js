import React from "react";
const Todo = ({text, sortedTodos, setTodos, todo})=>{

    const deleteHandler = ()=>{
        setTodos(sortedTodos.filter((element) => element.id !== todo.id))
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
       
        // setSortedTodos(arraymap);

        //-----------------------------
        // let arraymap = todos.map((el)=> 
        //     (el.id === todo.id) ? {...el, completed : !el.completed} : el
        // );
        
        // console.log(arraymap)
        // setSortedTodos(arraymap);

        //-----------------------------
        setTodos(sortedTodos.map((el)=> (el.id === todo.id) ? {...el, completed : !el.completed} : el));
    }

    // if((sort === 'completed' || sort ==='all') && todo.completed){
    //     return (

    //         <div className={`todo ${todo.completed ? 'completed': ''}`} >
    //             <li className="todo-item">{text}</li>
                
    //             <button onClick={completeHandler} className="complete-btn">
    //                 <i className="fas fa-check"></i>
    //             </button>
                
    //             <button onClick={deleteHandler} className="trash-btn"> 
    //                 <i className="fas fa-trash"></i> 
    //             </button>
                
    //         </div>
    //     );
    // }
    // if((sort === 'uncompleted' || sort ==='all') && !todo.completed){
    //     return (
    //         <div className={`todo ${todo.completed ? 'completed': ''}`} >
    //             <li className="todo-item">{text}</li>
                
    //             <button onClick={completeHandler} className="complete-btn">
    //                 <i className="fas fa-check"></i>
    //             </button>
                
    //             <button onClick={deleteHandler} className="trash-btn"> 
    //                 <i className="fas fa-trash"></i> 
    //             </button>
                
    //         </div>
    //     );
    // }

    return(
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