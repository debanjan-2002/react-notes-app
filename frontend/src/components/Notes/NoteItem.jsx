import React from "react";
import Button from "../UI/Button";

import styles from "./NoteItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// TODO: Implement the delete button in the NoteItem component
const NoteItem = props => {
    const deleteNoteHandler = () => {
        props.onDelete(props.id);
    };

    const date = new Date(props.lastModified).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata"
    });

    return (
        <div className={styles.note}>
            <div className={styles.note_header}>
                <div className={styles.note_header__title}>{props.title}</div>
                <div className={styles.note_header__date}>Created : {date}</div>
            </div>
            <div className={styles.note__description}>
                <div>{props.description}</div>
                <div className={styles.button_container}>
                    <FontAwesomeIcon
                        className={styles.edit_icon}
                        icon={faPenToSquare}
                    />
                    <FontAwesomeIcon
                        className={styles.delete_icon}
                        icon={faTrash}
                        onClick={deleteNoteHandler}
                    />
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
