import React from 'react';
import './App.css';
import {TodoList} from "./components/todolist/TodoList";



function App() {
    const tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Redux", isDone: false },
    ]
    function
    removeTask(id: number) {
        let resultTasks = tasks.filter(() => {
            return true
        })
        console.log(resultTasks)
    }
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Open Window", isDone: false },
/*
        { id: 4, title: "Yo", isDone: false },
*/
    ]


return (
        <div className="App">
          <TodoList
              title = 'What to learn'
              tasks = {tasks}
              removeTask={removeTask}
          /><TodoList
              title = 'Songs'
              tasks = {tasks2}
              removeTask={removeTask}
          />
{/*
          <TodoList title = 'Songs'  tasks = {tasks2}/>
*/}

        </div>
    );
}

export default App;
