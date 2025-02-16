import styles from './preview.module.scss';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import WhiteBtn from '../WhiteBtn/WhiteBtn';
function Preview() {
  return (
    <>
      <section className={styles.preview}>
        <div className={styles.preview__content}>
          <h1 className={styles.preview__content_title}>
            Изучай английский по карточкам
          </h1>
          <p className={styles.preview__content_text}> Это быстро и легко </p>
          <div className={styles.preview__groupBtn}>
            <OrangeBtn
              className={styles.preview__groupBtn_btn}
              text={'Перейти к карточкам'}
              ariaLabel={'Перейти к карточкам'}
            />
            <WhiteBtn
              className={styles.preview__groupBtn_btn}
              text={'Открыть мой словарь'}
              ariaLabel={'Открыть мой словарь'}
            />
          </div>
        </div>
        <div className={styles.preview__picture}>
          <img
            src="/assets/images/main-content.png"
            alt="Изображение ученика"
          ></img>
        </div>
      </section>
    </>
  );
}

export default Preview;
