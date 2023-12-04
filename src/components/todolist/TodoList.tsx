import React from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type TodotlistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: Function

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
                    props.tasks.map(t =>
                        <li><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => {
                            props.removeTask(t.id)
                            }}>x
                            </button>
                        </li>
                    )
                    /*   {
                           props.tasks.map( (t) => {
                               return  <li><input type="checkbox" checked={t.isDone}/>
                                   <span>{t.title}</span>
                               </li>
                           })
                       }*/}
                {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/>
                    <span>{props.tasks[0].title}</span>
                </li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/>
                    <span>{props.tasks[1].title}</span>
                </li>
                <li><input type="checkbox" checked={props.tasks[2].isDone}/>
                    <span>{props.tasks[2].title}</span>
                    </li>*/}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

