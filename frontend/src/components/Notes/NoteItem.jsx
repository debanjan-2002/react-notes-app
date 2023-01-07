import React from "react";
import Button from "../UI/Button";

import styles from "./NoteItem.module.css";

// TODO: Implement the delete button in the NoteItem component
const NoteItem = props => {
    const deleteNoteHandler = () => {
        props.onDelete(props.id);
    };

    return (
        <div className={styles.note}>
            <div className={styles.note_header}>
                <div className={styles.note_header__title}>{props.title}</div>
                <div className={styles.note_header__date}>
                    Created :{" "}
                    {new Date(props.lastModified).toLocaleString("en-IN", {
                        timeZone: "Asia/Kolkata"
                    })}
                </div>
            </div>
            <div className={styles.note__description}>
                <div>{props.description}</div>
                <div className={styles.button_container}>
                    <Button className="danger" onClick={deleteNoteHandler}>
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
