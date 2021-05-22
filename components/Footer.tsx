import Link from "next/link";
import styles from "../styles/Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
                <div className={styles.footer__content}>
                    <div className={styles.logo__container}>
                        <a className="logo smaller" href="/"><p>Ouro<span className="danger_text">boros</span></p></a>
                    </div>
                    <div className={styles.right_side}>
                        <ul className={styles.footer__list}>
                            <li>
                                <Link href="/">
                                    <a>Головна</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about_me">
                                    <a>Про автора</a>
                                </Link>
                            </li>
                        </ul>         
                        <div className={styles.horizontal_line}></div>             
                        <div className={styles.under_line_content}>
                            <p>&copy; Ouro<span className="danger_text">boros</span> Blog, 2021</p>
                        </div>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;