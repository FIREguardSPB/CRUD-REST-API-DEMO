import React from 'react';
import styles from './Card.module.css'
const Card = ({index, data}) => {
    return (
        <>
        <div className={`${styles.card}`}>
            <div className={`${styles.card_position}`}>{`#: ${index}`}</div>
            <div className={`${styles.card_id}`}>{`ID: ${data._id}`}</div>
            <div className={`${styles.card_author}`}>{`АВТОР: ${data.author}`} </div>
            <div className={`${styles.card_title}`}>{`Заголовок: ${data.title}`}</div>
            <div className={`${styles.card_content}`}>{`Содержание: ${data.content}`}</div>
        </div>
        </>
    );

};

export default Card;