import React from "react";
import styles from "./Modal.module.css"
interface Props {
    
}
export const Modal: React.FC<Props> = props => {
    return (
        <div id='modal'>
            <div></div>
            <div><h2>Texto Modal</h2></div>
            
        </div>
    );
};