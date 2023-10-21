import React from "react";
import {ITask} from "../interfaces/Task";
import style from "./TaskList.module.css"

interface Props {
    taskList: ITask[]
}

export const TaskList: React.FC<Props> = ({taskList}) => {
    return (
        <div>
            <p><strong>Lista de tarefas: </strong></p>
            {taskList?.map((task) =>
                <div key={task.id}>
                    <p>Titulo: {task.title} Dificuldade: {task.difficulty}</p>
                </div>
            )}
        </div>
    );
};