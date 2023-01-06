import React from "react";

import styles from "./NoteItem.module.css";

const NoteItem = props => {
    return (
        <div className={styles.note}>
            <div className={styles.note_header}>
                <div className={styles.note_header__title}>{props.title}</div>
                <div className={styles.note_header__date}>
                    {props.lastModified}
                </div>
            </div>
            <div className={styles.note__description}>{props.description}</div>
        </div>
    );
};

export default NoteItem;
