import styles from '../styles/blocks/card.module.scss';
import WhiteBtn from './WhiteBtn';
import OrangeBtn from './OrangeBtn';
function Card() {
  return (
    <>
      <div className={styles.card}>
        <div>
          <h2 className={styles.card__word}>Слово</h2>
          <h3 className={styles.card__translate}>Перевод</h3>
          <h4 className={styles.card__transcript}>транскрипция</h4>
        </div>

        <div className={styles.card__footer}>
          <WhiteBtn text={'Не знаю'} ariaLabel={'Не знаю слово'} />
          <OrangeBtn text={'Знаю'} ariaLabel={'Знаю слово'} />
        </div>
      </div>
    </>
  );
}

export default Card;
