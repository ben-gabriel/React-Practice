import React, {useState} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = ()=>{
    
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);

    return(
        <div className="App">
            <header>
                <h1>React Todo List</h1>
            </header>

            <Form 
                todos={todos} 
                setTodos={setTodos} 
                setInputText={setInputText} 
                inputText={inputText}
            />

            <TodoList 
                todos={todos}
            />

        </div>
    
    );
}

export default App;