import React, {useState, ChangeEvent, FormEvent, useEffect} from "react";
import styles from "./TaskForm.module.css"
// Interfaces
import {ITask} from "../interfaces/Task";

interface Props {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null
    handleUpdate?(task: ITask) : void
}

export const TaskForm: React.FC<Props> = ({btnText, taskList, setTaskList, task, handleUpdate})=>{

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [difficulty, setDifficulty] = useState<number>(0)

    useEffect((): void => {
        if (task){
            setId(task.id)
            setTitle(task.title)
            setDifficulty(task.difficulty)
        }
    }, [task]);
    
    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (handleUpdate){
            const updatedTask: ITask = {id, title, difficulty}
            handleUpdate(updatedTask)
        }else {
            const id = Math.floor(Math.random() * 1000 )
            const newTask: ITask = {id, title, difficulty}
            //setTaskList!([...taskList, newTask])
            setTaskList!(prevState => [...prevState, newTask])

            setTitle('')
            setDifficulty(0)
        }
    }
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'title'){
            setTitle(e.target.value)
        }else {
            setDifficulty(parseInt(e.target.value))
        }
    }

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título: </label>
                <input
                    value={title}
                    onChange={handleChange}
                    type="text"
                    name="title"
                    placeholder="Título da tarefa"
                />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade: </label>
                <input
                    value={difficulty}
                    onChange={handleChange}
                    type="number"
                    name="difficulty"
                    placeholder="Dificuldade da tarefa (1 a 5)"
                />
            </div>
            <input type="submit" value={btnText}/>
        </form>
    );
};