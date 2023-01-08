import React, { useState, useRef } from "react";

import styles from "./NoteItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

const NoteItem = props => {
    const [showEditModal, setShowEditModal] = useState(false);
    const titleRef = useRef();
    const descriptionRef = useRef();

    const deleteNoteHandler = () => {
        props.onDelete(props.id);
    };

    const showEditModalHandler = () => {
        setShowEditModal(true);
    };

    const hideEditModalHandler = () => {
        setShowEditModal(false);
    };

    const editFormHandler = e => {
        e.preventDefault();

        const updatedTitle = titleRef.current.value;
        const updatedDescription = descriptionRef.current.value;

        props.onEdit(props.id, {
            title: updatedTitle,
            description: updatedDescription
        });
        setShowEditModal(false);
    };

    const date = new Date(props.lastModified).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata"
    });

    return (
        <React.Fragment>
            {showEditModal && (
                <Modal onClose={hideEditModalHandler}>
                    <form
                        className={styles.form_control}
                        onSubmit={editFormHandler}
                    >
                        <div className={styles.input_container}>
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                defaultValue={props.title}
                                ref={titleRef}
                                autoFocus
                            />
                        </div>
                        <div className={styles.input_container}>
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                cols="30"
                                rows="5"
                                defaultValue={props.description}
                                ref={descriptionRef}
                            ></textarea>
                        </div>
                        <div className={styles.button_container}>
                            <Button type="submit" className="success">
                                Update
                            </Button>
                            <Button
                                type="button"
                                onClick={hideEditModalHandler}
                                className="danger"
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Modal>
            )}
            <div className={styles.note}>
                <div className={styles.note_header}>
                    <div className={styles.note_header__title}>
                        {props.title}
                    </div>
                    <div className={styles.note_header__date}>
                        Updated : {date}
                    </div>
                </div>
                <div className={styles.note__description}>
                    <div>{props.description}</div>
                    <div className={styles.button_container}>
                        <FontAwesomeIcon
                            className={styles.edit_icon}
                            icon={faPenToSquare}
                            onClick={showEditModalHandler}
                        />
                        <FontAwesomeIcon
                            className={styles.delete_icon}
                            icon={faTrash}
                            onClick={deleteNoteHandler}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NoteItem;
