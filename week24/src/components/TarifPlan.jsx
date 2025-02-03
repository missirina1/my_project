import styles from './TarifPlan.module.css';
import { useState } from 'react';

function TarifPlan({ tariff, speed, colorClass }) {
  let cardClass = `${styles.card} ${styles[colorClass]} `;
  const [cardChange, setCardChange] = useState(cardClass);

  function handleClick() {
    setCardChange((prevClass) =>
      prevClass.includes(styles.active)
        ? cardClass
        : `${cardClass} ${styles.active}`
    );
  }

  return (
    <>
      <div className={cardChange} onClick={handleClick}>
        <h1 className={styles.card__title}>Безлимитный {tariff} </h1>
        <div className={styles.card__promo}>
          <span className={styles.card__promo_ru}>руб</span>
          <h2 className={styles.card__promo_price}>{tariff}</h2>
          <span className={styles.card__promo_mounth}>/мес</span>
        </div>
        <h3 className={styles.card__speed}>до {speed} Мбит/сек</h3>
        <div className={styles.card__text}>
          <p>Объем включенного трафика </p>
          <p>не ограничен</p>
        </div>
      </div>
    </>
  );
}

export default TarifPlan;
