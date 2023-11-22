import React, {useState} from "react"


interface item {
    id: number;
    text: string;
    completed: boolean;
}

export const ToDoList: React.FC = () => {

    const [todos, setTodos] = useState<item[]>([]);

    const [input, setInput] = useState<string>("");


    const handleToggle = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed};
                }
                return todo
            })
        )

    }

    const handleSaveTask = () => {
        const newTodo = {id: Date.now(), text: input, completed: false};
        setTodos([...todos, newTodo])
        setInput("")
    }
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}