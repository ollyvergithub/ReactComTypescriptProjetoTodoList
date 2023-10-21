import React from "react";
import {ITask} from "../interfaces/Task";
import styles from "./TaskList.module.css"

interface Props {
    taskList: ITask[]
    handleDelete(id: number): void
    handleEdit(): void
}

export const TaskList: React.FC<Props> = ({taskList, handleDelete, handleEdit}) => {
    return (
        <div>
            <p><strong>Lista de tarefas: </strong></p>
            {taskList?.map((task) =>
                <div key={task.id} className={styles.task}>
                    <div className={styles.details}>
                        <h4>{task.title}</h4>
                        <p>Dificuldade: {task.difficulty}</p>
                    </div>
                    <div className={styles.actions}>
                        <i
                            className="bi bi-pencil"
                            onClick={()=>handleEdit()}
                        ></i>
                        <i
                            onClick={()=>handleDelete(task.id)}
                            className="bi bi-trash"
                        ></i>
                    </div>
                </div>
            )}
        </div>
    );
};