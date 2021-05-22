import Head from "next/head";

import WhiteSpace from "../../components/WhiteSpace";

function AboutMe() {
    return (
        <>
            <Head>
                <title>
                    Про автора
                </title>
            </Head>
            <div className="article">
                <h1 className="heading md left mg_m">
                    Привіт, мене звуть Гончаренко Дмитро
                </h1>
                <p className="paragraph">
                    <WhiteSpace/>
                    Я - студент Національного педагогічного університету імені М.П. Драгоманова, 
                    навчаюся на Інженерно-педагогічному факультеті, здобуваю ступінь "бакалавра" за спеціальністю "Комп'ютерні технології" 
                    (015 Професійна освіта "Комп'ютерні технології").
                </p>
                <br/>
                <p className="paragraph">
                    <WhiteSpace/>
                    Полюбляю комп'ютери, вивчати комп'ютерні дисципліни та дисципліни, які пов'язані з комп'ютерами. Серед моїх найулюбленіших
                    галузей комп'ютерних наук, є:  
                </p>
                <ul className="list vertical">
                    <li>Веб-дизайн</li>
                    <li>Інформаційно-комунікаційні мережі</li>
                    <li>Розробка та аналіз алгоритмів</li>
                    <li>Статичний аналіз програм</li>
                    <li>Web-програмування</li>
                    <li>Архітектура комп'ютера</li>
                    <li>Машинне навчання</li>
                    <li>UI та UX дизайн</li>
                </ul> 
            </div>
        </>
    );
}

export default AboutMe;