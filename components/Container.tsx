import React from "react";
import styles from "../styles/Container.module.css";

interface Props {
    children: React.ReactElement
};

function Container({ children }: Props) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default Container;