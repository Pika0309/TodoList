import React, {useState} from 'react';
import {data} from "../../data/data";
import {TodoItem} from "../TodoItem/TodoItem";
import {TodoForm} from "../TodoForm/TodoForm";
import {v1} from "uuid";
import {Button} from "../Button";
// Задание: Реализуйте простой список дел с возможностью отметки выполненных задач
// Требуемые темы: хук useState, JSX, props и свойство children, callback функции в пропсах, модули css, переиспользуемые компоненты

// Описание задания:
// Вам необходимо создать небольшой список дел (ToDoList). Реализуйте возможность добавления и удаления задач, а также отметку задач как выполненных.
// Приложение должно состоять из следующих компонентов:

// 1. TodoList - родительский компонент, который хранит список задач и управляет состоянием.
// 2. TodoItem - компонент, представляющий одну задачу. Он должен отображать текст задачи и иметь кнопку
// для отметки её выполненной или удаления.
// 3. TodoForm - компонент, отвечающий за добавление новых задач. Используйте input для ввода задачи.

// Убедитесь, что используете хук useState для управления состоянием, передаете пропсы и свойство
// children в компоненты, применяете callback функции в пропсах для взаимодействия между компонентами,
// и используете модули CSS для стилизации компонентов.

export type TodoListType = {
    id: string
    name: string
    isDone: boolean
}
export const TodoList = () => {

    let [tasks, setTasks] = useState(data)
    const removeTasks = (tasksId: string) => {
        setTasks(tasks.filter(f => f.id !== tasksId))
    }

    const addTasks = (name: string) => {
        let newName = {id: v1(), name: name, isDone: false}
        if (name.trim() !== '') {
            return setTasks([newName, ...tasks])
        }
    }

    const deleteAllTasks = () => {
        setTasks([])
    }

    return (
        <div>
            <TodoForm addNewTasks={addTasks}/>
            <TodoItem tasks={tasks} removeTasks={removeTasks}/>
            <Button title={'Delete all tasks'} onClick={deleteAllTasks}/>
        </div>
    );
};