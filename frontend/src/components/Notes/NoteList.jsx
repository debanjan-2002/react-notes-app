import React from "react";

import NoteItem from "./NoteItem";
import styles from "./NoteList.module.css";

const NoteList = props => {
    return (
        <div className={styles.note_list}>
            {props.notes.map(note => (
                <NoteItem
                    id={note._id}
                    key={note._id}
                    lastModified={note.lastModified.toLocaleString()}
                    title={note.title}
                    description={note.description}
                    onDelete={props.onDelete}
                />
            ))}
        </div>
    );
};

export default NoteList;
