import React from "react";
import PropTypes  from "prop-types";
import styles from "./ListItem.module.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";

const ListItem = ({
    title,
    image,
    description,
    link,
    type,
}) => {
    const ImageTag = image ? "img" : "div";

    return (
        <li className={styles.wrapper}>
            {type === "twitter" && <ImageTag
                src={image} alt={title}
                className={image ? styles.image : styles.imageNone}
            />}
            <div>
                <Title>{title}</Title>
                <p className={styles.description}>
                    {description}
                </p>
                {link && <Button href={link}>visit {type} page</Button>}
            </div>
        </li>
    );
};

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    link: PropTypes.string,
};

ListItem.defaultProps = {
    image: null,
    link: null,
};

export default ListItem;
