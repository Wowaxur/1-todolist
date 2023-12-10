import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/todolist/TodoList";

export type FilterValuesType = 'all' | 'active'| 'completed'


function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ])
    function removeTask(id: number) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    let [filter, setFilter] = useState<FilterValuesType>('all')
    let tasksForTofolist = tasks

    if (filter === 'active'){
        tasksForTofolist = tasks.filter(task => task.isDone === false)
    }
    if (filter === 'completed'){
        tasksForTofolist = tasks.filter(task => task.isDone === true)
    }
    /*
        let [tasks2, setTasks2] = useState( [
            { id: 1, title: "Hello world", isDone: true },
            { id: 2, title: "I am Happy", isDone: false },
            { id: 3, title: "Open Window", isDone: false },
            { id: 4, title: "Yo", isDone: false },  ])
    */
    function changeFilter(value: FilterValuesType){
        setFilter(value)
    }

    return (
        <div className="App">
            <TodoList
                title='What to learn'
                tasks={tasksForTofolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />

            {/*<TodoList
              title = 'Songs'
              tasks = {tasks2}
              removeTask={removeTask}
          />*/}
            {/*
          <TodoList title = 'Songs'  tasks = {tasks2}/>
*/}

        </div>
    );
}

export default App;
