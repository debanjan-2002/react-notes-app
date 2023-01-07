import React, { useState } from "react";
import Button from "../UI/Button";

import styles from "./NewNoteForm.module.css";

// DONE: Taking the data from the form and sending it to the parent component
const NewNoteForm = props => {
    // formData state is used to keep track of the input & textarea changes
    // It is initialized with empty title and description
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });

    // This method is called everytime there is a change in the input or textarea
    const inputChangeHandler = e => {
        // If there is change (due to which is method gets called), we update the state with the new value
        setFormData(prevState => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };

    // This method is called when the form is submitted
    const formSubmitHandler = e => {
        // This statement is required to stop the default behaviour of form submission
        // It prevents the page from refreshing
        e.preventDefault();

        // We pass the stored data from the formData state to the parent component for futher processing
        props.onSubmit(formData);
        // After the data is sent to the parent component, we reset (clear) the input and textarea
        setFormData({ title: "", description: "" });
    };

    return (
        <form className={styles.form_control} onSubmit={formSubmitHandler}>
            <div className={styles.input_container}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={inputChangeHandler}
                    value={formData.title}
                />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="5"
                    onChange={inputChangeHandler}
                    value={formData.description}
                ></textarea>
            </div>
            <div className={styles.button_container}>
                <Button type="submit" className="success">
                    Add Note
                </Button>
                <Button
                    type="button"
                    onClick={props.onClose}
                    className="danger"
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
};

export default NewNoteForm;
