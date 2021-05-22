import Link from "next/link";
import { useRouter } from "next/router";

import { connect, ConnectedProps } from "react-redux";

import styles from "../styles/MobileMenu.module.css";

import type { InitialState } from "../redux/reducer";
import { toggleMenu } from "../redux/actionCreators";

const connector = connect((state: InitialState) => ({ isActive: state.menuIsActive }), { toggleMenu });
type Props = ConnectedProps<typeof connector>;

import { Catalog } from "../utils/Catalog";

function MobileMenu({ isActive, toggleMenu }: Props) {
    const { pathname } = useRouter();

    let path = pathname.match(/\/catalog\/article\/(\w+)/);

    if (path) {
        var match = Catalog.find(el => {
            return el.route === path[1];
        });
    }

    return (
        <div className={`${styles.mobile_menu} ${isActive ? styles.active : ""}`}>
            <button className={styles.mobile_menu__close} onClick={toggleMenu}>&times;</button>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a onClick={toggleMenu}>Головна</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about_me">
                            <a onClick={toggleMenu}>Про автора</a>
                        </Link>
                    </li>
                    {match ? (
                        <li>
                            <Link href={`/catalog/${match.tag}`}>
                                <a onClick={toggleMenu}>До каталогу</a>
                            </Link> 
                        </li>
                    ) : null}
                </ul>
            </nav>
        </div>
    );      
}

export default connector(MobileMenu);