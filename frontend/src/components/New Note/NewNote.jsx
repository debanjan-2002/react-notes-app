import React, { useState } from "react";

import styles from "./NewNote.module.css";

const NewNote = props => {
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });

    const inputChangeHandler = e => {
        setFormData(prevState => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };

    const formSubmitHandler = e => {
        e.preventDefault();

        props.onSubmit(formData);
        setFormData({ title: "", description: "" });
    };

    return (
        <form className={styles.form_control} onSubmit={formSubmitHandler}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={inputChangeHandler}
                    value={formData.title}
                />
            </div>
            <div>
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
            <button type="submit">Add Note</button>
        </form>
    );
};

export default NewNote;
