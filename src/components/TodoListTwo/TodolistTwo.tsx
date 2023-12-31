import React, {useRef, useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterValuesType} from '../../App';
import { useAutoAnimate } from "@formkit/auto-animate/react";
import s from './TodoListTwo.module.css'
import '../../App.css'
type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    children?: React.ReactNode;
    changeTaskStatus: (id:string, isDone: boolean) => void
    filter: string
}
export const TodolistTwo: React.FC<PropsType> = ({ children, ...props }) => {

    let [title, setTitle] = useState('');
    const [error, setError] = useState<string|null>(null)
    const addTask = () => {
        const trimmedTaskTitle = title.trim()
        if (trimmedTaskTitle){
        props.addTask(title);}
        else {setError('Title is required')}
        setTitle('');
    };
    const addTaskKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === 'Enter' && title) {
            addTask();
        }
    }
    const onAllClickHandler = () => {
        props.changeFilter('all');
    };
    const onActiveClickHandler = () => {
        props.changeFilter('active');
    };
    const onCompletedClickHandler = () => {
        props.changeFilter('completed');
    };
    let onChangeRef = useRef<HTMLInputElement>(null);

    const [listRef] = useAutoAnimate<HTMLUListElement>();

    return (
        <div className={s.TodoList}>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                    onKeyDown={addTaskKeyDownHandler}
                    ref={onChangeRef}
                    className={error ? 'error': ''}
                />
                <button onClick={addTask}>+</button>
                {error && <div className='error-message'>{error}</div>}
            </div>
            <ul ref={listRef}>
                <h2>Tasks: {props.tasks.length}</h2>
                {props.tasks.map((task) => {
                    const onCLickHandler = () => {
                        props.removeTask(task.id);
                    };
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
                        let newIsDoneWalue = e.currentTarget.checked
                        props.changeTaskStatus(task.id, newIsDoneWalue)
                    }
                    return (
                        <li key={task.id} className={task.isDone? 'is-done': ''}>
                            <input type="checkbox" checked={task.isDone} onChange={onChangeHandler} />
                            <span>{task.title}</span>
                            <button onClick={onCLickHandler}>✖️</button>
                        </li>
                    );
                })}
            </ul>
            <div>
                <button className={props.filter ==="all"? "active-filter" :''} onClick={onAllClickHandler}>All</button>
                <button className={props.filter ==="active"? "active-filter" :''} onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter ==="completed"? "active-filter" :''} onClick={onCompletedClickHandler}>Completed</button>
            </div>
            {children}
        </div>
    );
};

















//----------------------------------------------------------------------------------
// import React, {ChangeEvent, KeyboardEvent, useRef, useState} from 'react';
// import {FilterValuesType} from './App';
// import {useAutoAnimate} from "@formkit/auto-animate/react";
//
// type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }
//
// type PropsType = {
//     title: string
//     tasks: Array<TaskType>
//     removeTask: (taskId: string) => void
//     changeFilter: (value: FilterValuesType) => void
//     addTask: (title: string) => void
//     children?:React.ReactNode
// }
//
// export const Todolist:React.FC<PropsType>=({children, ...props}) =>{
//     const [listRef] = useAutoAnimate<HTMLUListElement>()
//     let onChangeRef = useRef<HTMLInputElement>(null)
//     //let [title, setTitle] = useState("")
//
//     const addTask = () => {
//         // props.addTask(title);
//         // setTitle("");
//         if (onChangeRef.current) {
//             props.addTask(onChangeRef.current.value)
//             onChangeRef.current.value = ''
//         }
//     }
//
//     // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     //     setTitle(e.currentTarget.value)
//     // }
//
//
//     const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
//         if (e.key === 'Enter') {
//             addTask();
//         }
//     }
//
//     const onAllClickHandler = () => props.changeFilter("all");
//     const onActiveClickHandler = () => props.changeFilter("active");
//     const onCompletedClickHandler = () => props.changeFilter("completed");
//
//     return <div>
//         <h3>{props.title}</h3>
//         <div>
//             <input
//                 //value={title}
//                 // onChange={ onChangeHandler }
//                 ref={onChangeRef}
//                 onKeyPress={onKeyPressHandler}
//             />
//             <button onClick={addTask}>+</button>
//         </div>
//         <ul ref={listRef}>
//             {
//                 props.tasks.map(t => {
//
//                     const onClickHandler = () => props.removeTask(t.id)
//
//                     return <li key={t.id} >
//                         <input type="checkbox" checked={t.isDone}/>
//                         <span>{t.title}</span>
//                         <button onClick={onClickHandler}>x</button>
//                     </li>
//                 })
//             }
//         </ul>
//         <div>
//             <button onClick={onAllClickHandler}>All</button>
//             <button onClick={onActiveClickHandler}>Active</button>
//             <button onClick={onCompletedClickHandler}>Completed</button>
//         </div>
//         {children}
//     </div>
// }
