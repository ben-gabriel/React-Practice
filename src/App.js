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
        switch (sort) {
            case 'completed':
                console.log('test1')
                setSortedTodos(todos.filter((element) => element.completed === true));
                break;
            case 'uncompleted':
                console.log('test2')
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