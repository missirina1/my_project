import wordsData from '../../data/data.js';
import Word from '../Word/Word';
import styles from './MyDictionary.module.scss';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyDictionary() {
  const [newWord, setNewWord] = useState('');
  const [wordTranslate, setWordTranslate] = useState('');
  const [words, setWords] = useState(wordsData);
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function deleteWord(id) {
    setWords(words.filter((word) => word.id !== id));
  }

  function handleTrainAll() {
    navigate('/carousel', {
      state: { wordsModule: words, from:'myDictionary' },
    });
    console.log('Navigating to /carousel with state:', {
      wordsModule: words,
      from: 'myDictionary',
    });
  }
  return (
    <>
      <div className={styles.dictionary}>
        <div className={styles.dictionary__header}>
          <div className={styles.dictionary__training}>
            <h1 className={styles.dictionary__title}>Мой словарь</h1>

            <OrangeBtn
              text={'Тренировать все слова ►'}
              ariaLabel={'Тренировать все слова'}
              className={styles.dictionary__training_btn}
              onClick={handleTrainAll}
            />
          </div>
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
                  onDelete={deleteWord}
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
