import words from '../data/data.js';
import Word from './Word';
import styles from '../styles/blocks/dictionary.module.scss';
import OrangeBtn from './OrangeBtn.jsx';
import { useState } from 'react';
function MyDictionary() {
  function handleFormSubmit(e) {
    e.preventDefault();
  }
  const [newWord, setNewWord] = useState('');
  const [wordTranslate, setWordTranslate] = useState('');

  return (
    <>
      <div className={styles.dictionary}>
        <div className={styles.dictionary__header}>
          <h1 className={styles.dictionary__title}>Мой словарь</h1>
          <form className={styles.dictionary__form} onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Введите слово"
              className={styles.dictionary__form_input}
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Перевод"
              className={styles.dictionary__form_input}
              value={wordTranslate}
              onChange={(e) => setWordTranslate(e.target.value)}
            ></input>
            <OrangeBtn
              type="submit"
              ariaLabel={'Добавить новое слово'}
              className={styles.dictionary__form_btn}
              text={'+ Новое слово'}
              disabled={!newWord || !wordTranslate}
            />
          </form>
        </div>
        <div className={styles.dictionary__list}>
          <ul className={styles.dictionary__ul}>
            {words.map((word) => {
              const { id, english, transcription, russian } = word;
              return (
                <Word
                  key={id}
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
