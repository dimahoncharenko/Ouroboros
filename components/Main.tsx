import Link from "next/link";
import styles from "../styles/Main.module.css";

function Main() {
    return (
        <main>
            <div className={styles.content_container}>
                <div>
                    <h2 className="heading md mg_sm">Тематика</h2>
                    <ul>
                        <li>
                            <Link href="/catalog/Освіта та саморозвиток">
                                <a>Освіта та саморозвиток</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/catalog/Спорт та здоров'я">
                                <a>Спорт та здоров'я</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/catalog/Краса та мода">
                                <a>Краса та мода</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/catalog/Комп'ютерні ігри">
                                <a>Комп'ютерні ігри</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/catalog/Література">
                                <a>Література</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="angle tr"></div>
                    <div className="angle br"></div>
                </div>
                <div>
                    <h2 className="heading md mg_sm">Статистика</h2>
                    <p>
                        На даному веб-сайті всього опубліковано: 2 статті
                    </p>
                    <div className="angle tr"></div>
                    <div className="angle br"></div>
                    <div className="angle tl"></div>
                    <div className="angle bl"></div>
                    <div className="angle t"></div>
                    <div className="angle b"></div>
                </div>
                <div>
                    <h2 className="heading md mg_sm">Про сайт</h2>
                    <p>
                        Цей сайт створений з метою зібрати в єдиний простір найцікавіші публікації з всього світу на будь-яку тему, та надати доступ кожному!
                    </p>
                    <div className="angle tl"></div>
                    <div className="angle bl"></div>
                </div>
            </div>
        </main>
    );
}

export default Main;