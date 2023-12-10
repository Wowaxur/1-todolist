import React from 'react';
import {FilterValuesType} from "../../App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type TodotlistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter: (value: FilterValuesType) => void
}


export const TodoList = (props: TodotlistPropsType) => {
    return (
        <div className={'TodoList'}>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map((task: TaskType) =>
                        <li key={task.id}><input type="checkbox" checked={task.isDone} />
                            <span>{task.title}</span>
                            <button onClick={() => {
                                props.removeTask(task.id)
                            }}>x
                            </button>
                        </li>
                    )}
            </ul>
            <div>
                <button onClick={() => {
                    props.changeFilter('all')
                }}>All</button>
                <button onClick={() => {
                    props.changeFilter('active')
                }}>Active</button>
                <button onClick={() => {
                    props.changeFilter('completed')
                }}>Completed</button>
            </div>
        </div>
    );
};

