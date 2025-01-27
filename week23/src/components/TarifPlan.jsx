import styles from '../styles/tarifPlan.module.css';

function TarifPlan({ tariff, speed, colorClass, isActive }) {
  const cardClass = `${styles.card} ${styles[colorClass]} ${
    isActive ? styles.active : ''
  }`;
  return (
    <>
      <div className={cardClass}>
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
