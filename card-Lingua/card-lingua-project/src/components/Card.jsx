import styles from '../styles/blocks/card.module.scss';

import OrangeBtn from './OrangeBtn';
import { useState } from 'react';

function Card() {
  const [isTranslated, setIsTranslated] = useState(false);
  function handleClick() {
    setIsTranslated((prev) => !prev);
  }
  return (
    <>
      <div className={styles.card}>
        <div className={styles.block}>
          <h2 className={styles.block__word}>Слово</h2>
          <h3 className={styles.block__transcript}>транскрипция</h3>
          <OrangeBtn
            text={isTranslated ? 'Скрыть перевод' : 'Показать перевод'}
            onClick={handleClick}
            className={styles.block__btn}
            ariaLabel={'Перевод слова'}
          />
        </div>
        <div className={styles.card__footer}>
          {isTranslated && (
            <h3 className={styles.card__translate}>перевод слова</h3>
          )}
        </div>
        \
      </div>
    </>
  );
}

export default Card;
