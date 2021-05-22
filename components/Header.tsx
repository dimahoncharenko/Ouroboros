import Link from "next/link";
import { useRouter } from "next/router";
import { connect, ConnectedProps } from "react-redux";

import styles from "../styles/Header.module.css";
import { Catalog } from "../utils/Catalog";

import { toggleMenu } from "../redux/actionCreators";

const connector = connect(null, { toggleMenu });
type Props = ConnectedProps<typeof connector>;

function Header({ toggleMenu }: Props) {
    const { pathname } = useRouter();

    let path = pathname.match(/\/catalog\/article\/(\w+)/);

    if (path) {
        var match = Catalog.find(el => {
            return el.route === path[1];
        });
    }

    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <div>
                    <a className="logo" href="/"><p>Ouro<span className="danger_text">boros</span></p></a>
                </div>
                <nav className={styles.nav}>
                    <button className={styles.nav__button} onClick={toggleMenu}>
                        згорнути меню
                    </button>
                    <div className={styles.nav__menu}>
                        <ul className={styles.nav__list}>
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
                            {match ? (
                                <li>
                                    <Link href={`/catalog/${match.tag}`}>
                                        <a>До каталогу</a>
                                    </Link> 
                                </li>
                            ) : null}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default connector(Header);