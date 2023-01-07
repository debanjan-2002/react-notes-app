import React from "react";

import styles from "./Button.module.css";

const Button = props => {
    const extraStyles = props.className;
    return (
        <button
            {...props}
            className={`${styles.button} ${extraStyles && styles[extraStyles]}`}
        >
            {props.children}
        </button>
    );
};

export default Button;
