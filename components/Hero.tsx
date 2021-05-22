import styles from "../styles/Hero.module.css";

function Slider() {
    return (
        <div className={styles.slider}>
            <img src="/cover_tort-min.png" alt="" className={styles.slider__bg}/>
            <div className={styles.slider__content}>
                <div className={styles.filling}>
                    <p>Найкраще за неділю</p>
                    <p>Інформаційні технології у професійній діяльності вчителя</p>
                    <p className={styles.link}><a href="/catalog/article/it_in_edu">Читати</a></p>
                </div>
            </div>
        </div>
    );
}

export default Slider;