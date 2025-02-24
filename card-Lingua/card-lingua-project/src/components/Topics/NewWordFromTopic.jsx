import styles from './NewWordFromTopic.module.scss';
import { useState } from 'react';

function NewWordFromTopic(props) {
  const { index } = props;
  const [newWord, setNewWord] = useState('');
  const [newTranslate, setNewTranslate] = useState('');

  return (
    <>
      <div className={styles.newWord}>
        <span className={styles.newWord__index}>{index}</span>
        <input
          className={styles.newWord__word}
          type="text"
          placeholder="Слово"
          value={newWord}
          onChange={(e) => {
            setNewWord(e.target.value);
          }}
        ></input>
        <input
          className={styles.newWord__translate}
          type="text"
          placeholder="Перевод"
          value={newTranslate}
          onChange={(e) => {
            setNewTranslate(e.target.value);
          }}
        />
      </div>
    </>
  );
}
export default NewWordFromTopic;
