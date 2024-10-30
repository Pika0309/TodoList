import React, {ButtonHTMLAttributes, ChangeEvent, useState} from 'react';
import {Button} from "../Button";

type TodoFowmTypeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    addNewTasks: (name: string)=> void
}

export const TodoForm = (props: TodoFowmTypeProps) => {

    const {addNewTasks}=props

    let [addTasks, setAddTAsks] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setAddTAsks(event.currentTarget.value)
    }

    const addButtonHandler = () => {
        addNewTasks(addTasks)
        setAddTAsks('')
    }

    return (
        <div>
            <input value={addTasks} onChange={onChangeHandler}/>
            <Button onClick={addButtonHandler} title={'+'}/>
        </div>
    );
};