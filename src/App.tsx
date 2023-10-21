import React, {useState} from 'react';
import styles from "./App.module.css"

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {TaskForm} from "./components/TaskForm";
import {TaskList} from "./components/TaskList";
import {Modal} from "./components/Modal";

// Interfaces
import {ITask} from "./interfaces/Task"


function App() {

    const [taskList, setTaskList] = useState<ITask[]>([])

    const deleteTask = (id: number): void => {
        setTaskList(
            taskList.filter((task)=>{
                return task.id !== id
            }))
    }

  return (
    <div className="App">
        <Modal
            children={
            <TaskForm
                btnText='Editar tarefa'
                taskList={taskList}
            />
        }
        />
        <Header/>
        <main className={styles.main}>
            <div>
                <h2>O que você vai fazer</h2>
                <TaskForm
                    btnText='Criar tarefa'
                    taskList={taskList}
                    setTaskList={setTaskList}
                />
            </div>
            <div>
                <h2>Suas tarefas:</h2>
                <TaskList
                    taskList={taskList}
                    handleDelete={deleteTask}
                />
            </div>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
