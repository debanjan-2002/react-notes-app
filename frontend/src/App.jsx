import React, { useState, useEffect } from "react";

import NoteList from "./components/Notes/NoteList";
import NewNote from "./components/New Note/NewNote";
import styles from "./App.module.css";
import Header from "./components/Header/Header";

// DONE: Fetching notes from the server
const App = () => {
    // notes state is used to keep track of the notes
    const [notes, setNotes] = useState([]);
    // hasError state is used to keep track of error in fetching the notes
    const [hasError, setHasError] = useState(false);

    // useEffect is used to fetch the notes on mount (when the app loads for the first time)
    useEffect(() => {
        // fetchNotes() function is used fetch the notes from the backend using fetch() API
        // We use async & await to do the fetching asynchronously
        const fetchNotes = async () => {
            try {
                // Using the fetch API to perform GET request
                const response = await fetch("http://localhost:5000/api/notes");
                const data = await response.json();

                // Setting the error state to false as at this point of time notes are fetched successfully
                setHasError(false);
                // Setting the notes state with the fetched response data
                setNotes(data);
            } catch (e) {
                // Setting the error state to true as some error has occurred while fetching the notes
                setHasError(true);
            }
        };
        // Calling the fetchNotes() method
        fetchNotes();
    }, []);

    // DONE: Sending new note to the server
    // addNewNoteHandler() method is used to perform a POST request to the server
    // This method is called from the NewNote component
    const addNewNoteHandler = async note => {
        try {
            // Using the fetch API to perform a POST request to the server
            const response = await fetch("http://localhost:5000/api/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(note)
            });
            const data = await response.json();

            // Adding the new note to the notes state
            setNotes(prevState => [...prevState, data]);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <React.Fragment>
            {/* Header component */}
            <Header />
            <div className={styles.container}>
                <NewNote onSubmit={addNewNoteHandler} />
                {hasError && (
                    <p className={styles.error}>Something went wrong!</p>
                )}
                {/* NoteList component (we pass the fetched notes array as props in this component) */}
                {!hasError && <NoteList notes={notes} />}
            </div>
        </React.Fragment>
    );
};

export default App;
