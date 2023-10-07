import React from "react";
import styles from "./Header.module.css"

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1>React + TS TodoList</h1>
        </header>
    );
};