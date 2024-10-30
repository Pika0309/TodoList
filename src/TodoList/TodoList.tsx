// @flow
import React, {ChangeEvent, useState} from 'react';
import {TodoItem} from "./TodoItem";
import {initialTasks} from "./data/data";
import {v1} from "uuid";

export type ButtonTitle = 'all' | 'completed' | 'active'

export type TodoListTypeProps = {
    id: string
    text: string
    completed: boolean
};
export const TodoList = () => {

    const [tasks, setData] = useState(initialTasks)

    const removeTasks = (taskId: string) => {
        setData(tasks.filter(r => r.id !== taskId))
    }

    const newAddTask = (text: string) => {
        setData([{id: v1(), text: text, completed: false}, ...tasks])
    }

    const checkedHAndler = (tasksId: string, completed: boolean) => {
        setData(tasks.map(m => m.id === tasksId ? {...m, completed: completed} : m))
    }

    const checkedAllTasks = (completed: boolean) => {
        setData(tasks.map(m => ({...m, completed})))
    }

    const deleteAllTasks = () => {
        setData([])
    }

    return (
        <div className="divTodoList">
            <TodoItem tasks={tasks}
                      removeTasks={removeTasks}
                      newAddTask={newAddTask}
                      checkedHAndler={checkedHAndler}
                      deleteAllTasks={deleteAllTasks}
                      checkedAllTasks={checkedAllTasks}/>
        </div>
    );
};