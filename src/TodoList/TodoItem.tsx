// @flow
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {ButtonTitle, TodoListTypeProps} from "./TodoList";
import {Input} from "./input";
import {Button} from "./Button";

type TodoItemTypeProps = {
    tasks: TodoListTypeProps[]
    removeTasks: (taskId: string) => void
    newAddTask: (text: string) => void
    checkedHAndler: (tasksId: string, completed: boolean) => void
    checkedAllTasks: (completed: boolean)=> void
    deleteAllTasks: ()=> void
};
export const TodoItem = (props: TodoItemTypeProps) => {

    const {tasks,
        removeTasks,
        newAddTask,
        checkedHAndler,
        deleteAllTasks,
        checkedAllTasks}=props

    const [addTask, setAddTAsk] = useState('')
    const [colorBtn, setColorBtn] = useState<ButtonTitle>('all')
    const [filter, setFilter] = useState<ButtonTitle>('all')
    const [error, setError] = useState<string | null>(null)
    const [search, setSearch] = useState('')
    const onClickHandle = () => {
        if (addTask.trim()) {
            newAddTask(addTask.trim())
            setAddTAsk('')
        }
        else{
            setError('Input null')
        }
    }
    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTAsk(e.currentTarget.value)
        setError('')
    }
    const onChangeChecked = (id: string, completed: boolean) => {
        checkedHAndler(id, completed)
    }

    const changeFilterButtonColor = (filter: ButtonTitle) => {
        setColorBtn(filter)
        setFilter(filter)
    }

    const searchInput = tasks.filter(s => s.text.toLowerCase().includes(search.toLowerCase()))

    let allTAsks = searchInput
    if (filter === 'completed') {
        allTAsks = tasks.filter(m => m.completed)
    }
    if (filter === 'active') {
        allTAsks = tasks.filter(m => !m.completed)
    }

    const checkedAllOnchangeHandler = (completed: boolean) => {
        checkedAllTasks(completed)
    }

    const keyBoardHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter'){
            onClickHandle()
        }
    }

    const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    return (
        <div>
            <Input placeholder={'Search'} className={'inputSearch'} value={search} onChange={onChangeSearchHandler}/>
            <div className={'divAdd'}>
                <Input onKeyUp={keyBoardHandler} placeholder={'Add tasks...'} className={error ? 'error' : 'inputAdd'}
                       value={addTask} onChange={onChangeHandle}/>
                <Button className={'buttonAdd'} title={'+'} onClick={onClickHandle}/>
                <h3>{error}</h3>
                <label className={'labelStyle'}>
                    <Input type='checkbox' onChange={(e) => checkedAllOnchangeHandler(e.currentTarget.checked)}/>
                    All
                </label>
            </div>

            <ul>
            { allTAsks.length === 0
                ? <span>Пусто...</span>
                : allTAsks.map(m => {
                    return (
                        <li key={m.id}>
                            <Button className={'buttonRemove'} onClick={() => removeTasks(m.id)} title={'x'}/>
                            <Input type='checkbox' checked={m.completed}
                                   onChange={(e) => onChangeChecked(m.id, e.currentTarget.checked)}/>
                            <span>{m.text}</span>
                        </li>
                    )
                })}
            </ul>
            <Button className={colorBtn === "all" ? 'buttonFilterActive' : 'buttonFilter'} title={'All'}
                    onClick={() => changeFilterButtonColor('all')}/>
            <Button className={colorBtn === "completed" ? 'buttonFilterActive' : 'buttonFilter'} title={'Completed'}
                    onClick={() => changeFilterButtonColor('completed')}/>
            <Button className={'buttonFilter'} title={'Delete all tasks'} onClick={deleteAllTasks}/>
            <Button className={colorBtn === 'active' ? 'buttonFilterActive' : 'buttonFilter'} title={'Active'}
                    onClick={() => changeFilterButtonColor('active')}/>
        </div>
    );
};