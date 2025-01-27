// import Header from './Header';
// import Footer from './Footer';
import words from '../data/data.js';
import Word from './Word';
import styles from '../styles/blocks/dictionary.module.scss';
function MyDictionary() {
  return (
    <>
      <div className={styles.dictionary}>
        <div className={styles.dictionary__header}>
          <h1 className={styles.dictionary__title}>Мой словарь</h1>
          <p>Добавить слово</p>
          <p className={styles.dictionary__find}>Найти</p>
        </div>
        <div className={styles.dictionary__list}>
          <ul dictionary__ul>
            {words.map((word) => {
              const { id, english, transcription, russian } = word;
              return (
                <Word
                  id={id}
                  english={english}
                  transcription={transcription}
                  russian={russian}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MyDictionary;
