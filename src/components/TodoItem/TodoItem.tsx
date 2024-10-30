import React, {ButtonHTMLAttributes, useState} from 'react';
import {TodoListType} from "../TodoList/TodoList";
import {Button} from "../Button";

type FilterForTitle = 'all' | 'deleteAll' | 'completed' | 'noCompleted'

type ButtonTasks = ButtonHTMLAttributes<HTMLButtonElement> &{
    tasks: TodoListType[]
    removeTasks: (tasksId: string)=> void
}
export const TodoItem = (props: ButtonTasks) => {

    const {tasks, removeTasks}=props

    let [filterBtn, setFilterBtn] = useState<FilterForTitle>('all')
    let allTasks = tasks
    if (filterBtn === 'completed'){
        allTasks = tasks.filter(f => f.isDone)
    }
    if (filterBtn === 'noCompleted'){
        allTasks = tasks.filter(f => !f.isDone)
    }

    const buttonFilterHandler = (title: FilterForTitle) => {
        setFilterBtn(title)
    }

    return (
        <div>
        <ul>
            {allTasks.map(t => {
                return(
                    <li key={t.id}>
                        <Button onClick={()=>removeTasks(t.id)} title={'x'}/>
                        <input type='checkbox' checked={t.isDone}/>
                        <span>{t.name}</span>
                    </li>
                )
            })}
        </ul>
            <Button onClick={()=>buttonFilterHandler('all')} title={'All'}/>
            <Button onClick={()=>buttonFilterHandler('deleteAll')} title={'Delete All'}/>
            <Button onClick={()=>buttonFilterHandler('completed')} title={'Completed'}/>
            <Button onClick={()=>buttonFilterHandler('noCompleted')} title={'No Completed'}/>
        </div>
    );
};