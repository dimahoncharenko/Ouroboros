import type { Catalog as TCatalog } from "../utils/Catalog";

import styles from "../styles/Catalog.module.css";

import Card from "../components/Card";
import NewLine from "../components/NewLine";

type Props = {
    articles: TCatalog[]
};

function Catalog({ articles }: Props) {
    return (
        <div className={styles.grid__articles}>
            {articles.length === 0 ? (
                <p className={styles.no_articles}>
                    Нажаль публікацій по цій тематиці, ще не написано
                    <NewLine/>
                    <img src="/snake.svg" className={styles.no_articles__img}/>
                </p>) : (
                    articles.map(({imgSrc, heading, desc, tag, route}, index) => {
                    return <Card key={index} imgSrc={imgSrc} heading={heading} desc={desc} tag={tag} route={route}/>
                }))}
        </div>
    );
}

export default Catalog;