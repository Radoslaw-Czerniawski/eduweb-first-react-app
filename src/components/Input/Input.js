import React from "react";
import PropTypes  from "prop-types";
import styles from "./Input.module.scss";

const Input = ({tag: Tag, name, label, maxLength, required, ...props}) => (
    <div className={styles.formItem}>
        <Tag
            className={Tag === "textarea" ? styles.textarea : styles.input}
            type="text"
            name={name}
            id={name}
            required={required}
            maxLength={maxLength}
            placeholder=" "
            {...props}
        />
        <label className={Tag === "textarea" ? styles.textareaLabel : styles.label} htmlFor={name}>{label}</label>
        <div className={styles.formItemBar} />
        </div>
);

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    required: PropTypes.bool,
};

Input.defaultProps = {
    tag: "input",
    maxLength: 200,
    required: true,
};

export default Input;
