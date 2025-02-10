import styles from './card.module.scss';
import words from '../data/data';

import OrangeBtn from '../OrangeBtn/OrangeBtn';
import { useState } from 'react';

function Card(props) {
  const { english, transcription, russian, index } = props;
  const [isTranslated, setIsTranslated] = useState(false);
  function handleClick() {
    setIsTranslated((prev) => !prev);
  }
  return (
    <>
      <div className={styles.card}>
        <div className={styles.block}>
          <h2 className={styles.block__word}>{english}</h2>
          <h3 className={styles.block__transcript}>{transcription}</h3>
          <OrangeBtn
            text={isTranslated ? 'Скрыть перевод' : 'Показать перевод'}
            onClick={handleClick}
            className={styles.block__btn}
            ariaLabel={'Перевод слова'}
          />
        </div>
        <div className={styles.card__footer}>
          {isTranslated && (
            <h3 className={styles.card__translate}>{russian}</h3>
          )}
        </div>
        <span>
          {index}/{words.length - 1}
        </span>
      </div>
    </>
  );
}

export default Card;
