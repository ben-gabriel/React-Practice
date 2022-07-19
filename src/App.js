import React from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = ()=>{
    return(

        <div className="App">
            <header>
                <h1>React Todo List change test</h1>
            </header>

            <Form />
            <TodoList />

        </div>
    
    );
}

export default App;