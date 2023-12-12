import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {FilterValuesType} from "../../App";
import styles from './TodoList.module.css'

type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type TodotlistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}


export const TodoList = (props: TodotlistPropsType) => {
    let [title, setTitle] = useState('')
    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }
const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
}
const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        addTask()
    }
}
const onAllClickHandler = () => {
    props.changeFilter('all')
}
    const onActiveClickHandler = () => {
        props.changeFilter('active')
    }
    const onCompletedClickHandler = () => {
        props.changeFilter('completed')
    }
    return (
        <div className={styles.TodoList}>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyDown={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {props.tasks.map((task) => {
                    const onCLickHandler = () => {
                        props.removeTask(task.id)
                    }
                    return (
                        <li key={task.id}>
                            <input type='checkbox' checked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={onCLickHandler}>
                                ✖️
                            </button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={onAllClickHandler}>
                    All
                </button>
                <button onClick={onActiveClickHandler}>
                    Active
                </button>
                <button onClick={onCompletedClickHandler}>
                    Completed
                </button>
            </div>
        </div>
    )

};

