import Link from "next/link";

import type { Catalog } from "../utils/Catalog";

import styles from "../styles/Card.module.css";

function Card({ imgSrc, heading, desc, route }: Catalog) {
    const path = `article/${route}`;
    return (
        <Link href={path}>
            <div className={styles.card}>
                <img src={imgSrc} className={styles.card__img}/>
                <div className={styles.card__content}>
                    <h2 className="heading md">{heading}</h2>
                    <p className={styles.desc}>{desc}</p>
                </div>
            </div>
        </Link>
    );
}

export default Card;