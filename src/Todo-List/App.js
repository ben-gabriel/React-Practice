import React, {useState, useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { motion } from "framer-motion";

const App = ()=>{
    
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [sortedTodos, setSortedTodos] = useState([]);
    const [sort, setSort] = useState('all');
    
    useEffect(()=>{
        if(localStorage.getItem('todos') !== null){
            let storedTodos = JSON.parse(localStorage.getItem('todos'));
            console.log('flag 1: ', storedTodos)
            setTodos(storedTodos);
            // console.log('flag 1.2: ', todos)
        }
    }, []);

    useEffect(()=>{
        console.log('flag 2: ', todos)
        if(todos.length>0){
            localStorage.setItem('todos', JSON.stringify(todos)); 
        }
    },[todos]);

    useEffect(()=>{
        switch (sort) {
            case 'completed':
                setSortedTodos(todos.filter((element) => element.completed === true));
                break;
            case 'uncompleted':
                setSortedTodos(todos.filter((element) => element.completed === false));
                break;
            default:
                setSortedTodos(todos);
                break;
        }
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
                setTodos={setTodos}
                
                sortedTodos={sortedTodos} setSortedTodos={setSortedTodos}
                
                sort={sort}
            />

        </div>
    
    );
}

export default App;