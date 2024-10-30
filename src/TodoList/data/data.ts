import {v1} from "uuid";

export const initialTasks = [
    { id: v1(), text: "Купить продукты", completed: false },
    { id: v1(), text: "Сделать домашнее задание", completed: false },
    { id: v1(), text: "Позвонить другу", completed: false },
    { id: v1(), text: "Забрать посылку", completed: false }
];