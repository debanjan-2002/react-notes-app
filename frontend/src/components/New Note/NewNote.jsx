import React, { useState } from "react";

import NewNoteForm from "./NewNoteForm";
import styles from "./NewNote.module.css";

const NewNote = props => {
    const [showNewForm, setShowNewForm] = useState(false);

    const openNewFormHandler = () => {
        setShowNewForm(true);
    };

    const closeNewFormHandler = () => {
        setShowNewForm(false);
    };

    return (
        <React.Fragment>
            {!showNewForm && (
                <div className={styles.button_container}>
                    <button onClick={openNewFormHandler}>Add Note</button>
                </div>
            )}
            {showNewForm && (
                <NewNoteForm
                    onSubmit={props.onSubmit}
                    onClose={closeNewFormHandler}
                />
            )}
        </React.Fragment>
    );
};

export default NewNote;
