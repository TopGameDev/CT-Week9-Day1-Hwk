import React, { useState } from "react"
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

type Task = {
    id:number,
    task:string
}


export default function Home() {
const [task, setTask] = useState<Task[]>([]);
const [newTask, setNewTask] = useState<Task>({id: 1, task: ''});

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({...newTask, [event.target.name]: event.target.value})
}

const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setTask([...task, newTask])
    setNewTask({id: task.length + 2, task: ''})
}

  return (
    <>
        <h1>Please Add a Task</h1>
        <TaskForm handleChange={handleInputChange} handleSubmit={handleFormSubmit} newTask={newTask}/>
        { task.map(t => <TaskCard task={t} key={t.id}/>)}
    </>
  )
}