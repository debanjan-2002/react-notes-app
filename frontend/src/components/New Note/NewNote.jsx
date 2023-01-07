import React, { useState } from "react";

import NewNoteForm from "./NewNoteForm";
import styles from "./NewNote.module.css";

// DONE: Toggling the new form visibility and sending the data to the parent component
const NewNote = props => {
    // This state is used to keep track of whether the form should be shown or hidden
    const [showNewForm, setShowNewForm] = useState(false);

    // This method is set the state to true (to open the form)
    const openNewFormHandler = () => {
        setShowNewForm(true);
    };

    // This method is set the state to false (to close the form)
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
