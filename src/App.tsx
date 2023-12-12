import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/todolist/TodoList";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'active'| 'completed'


function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Redux", isDone: false},
    ])
    const addTask = (title:string) => {
      let task = {id:v1(), title:title, isDone: false};
      let newTasks = [task, ...tasks];
      setTasks(newTasks)
    }

        function removeTask(id: string) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    let [filter, setFilter] = useState<FilterValuesType>('all')
    let tasksForToDolist = tasks

    if (filter === 'active'){
        tasksForToDolist = tasks.filter(task => !task.isDone)
    }
    if (filter === 'completed'){
        tasksForToDolist = tasks.filter(task => task.isDone)
    }

    function changeFilter(value: FilterValuesType){
        setFilter(value)
    }

    return (
        <div className="App">
            <TodoList
                addTask ={addTask}
                title='What to learn'
                tasks={tasksForToDolist}
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
