import React, {useState, ChangeEvent, FormEvent, useEffect} from "react";
import styles from "./TaskForm.module.css"
// Interfaces
import {ITask} from "../interfaces/Task";

interface Props {
    btnText: string
}

export const TaskForm: React.FC<Props> = ({btnText})=>{

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [difficulty, setDifficulty] = useState<number>(0)
    
    const addTaskHandler = () => {
      
    }
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'title'){
            setTitle(e.target.value)
        }else {
            setDifficulty(parseInt(e.target.value))
        }

        console.log("XXXXXXXXXx handleChange title ", title)
        console.log("XXXXXXXXXx handleChange difficulty ", difficulty)
    }

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título: </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="title"
                    placeholder="Título da tarefa"
                />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade: </label>
                <input
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