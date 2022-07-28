import React, {useState, useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = ()=>{
    
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [sortedTodos, setSortedTodos] = useState([]);
    const [sort, setSort] = useState('all');

    useEffect(()=>{
        setSortedTodos(todos)
    }, [todos,sort]);

    return(
        <div className="App">
            <header>
                <h1>React Todo List</h1>
            </header>

            <Form 
                todos={todos} setTodos={setTodos} 

                inputText={inputText} setInputText={setInputText} 
            
                setSort={setSort}
            />

            <TodoList 
                sortedTodos={sortedTodos} setSortedTodos={setSortedTodos}
                
                sort={sort}
            />

        </div>
    
    );
}

export default App;