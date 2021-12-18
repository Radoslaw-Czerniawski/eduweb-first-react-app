import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import styles from "./Header.module.scss"
import logoImage from "../../assets/images/logo.svg"
import Button from "../Button/Button.jsx"

const Header = ({ openModalFn }) => (
    <header className={styles.wrapper}>
        <img src={logoImage} className={styles.logo} alt="FavNote. logo" />
        <HeaderNavigation />
        <Button openModalFn={openModalFn} secondary>new item</Button>
    </header>
);

export default Header;
