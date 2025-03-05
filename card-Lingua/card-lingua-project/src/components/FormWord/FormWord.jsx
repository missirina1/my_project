import WhiteBtn from '../WhiteBtn/WhiteBtn';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import { useState } from 'react';
import styles from './FormWord.module.scss';

function FormWord(props) {
  const { english, translate, onSave, onCancle } = props;
  const [newWord, setNewWord] = useState(english);
  const [newTranslate, setNewTranslate] = useState(translate);

  function handleSave(e) {
    e.preventDefault();
    onSave(newWord, newTranslate);
  }

  function handleCancel(e) {
    e.preventDefault();
    onCancle();
  }

  return (
    <form className={styles.form}>
      <h1 className={styles.form__title}>Изменение слова</h1>
      <input
        type="text"
        className={styles.form__word}
        placeholder={newWord}
        onChange={(e) => {
          setNewWord(e.target.value);
        }}
      />
      <input
        type="text"
        className={styles.form__translate}
        placeholder={newTranslate}
        onChange={(e) => {
          setNewTranslate(e.target.value);
        }}
      />
      <div className={styles.form__btn}>
        <WhiteBtn text={'Внести изменения'} onClick={handleSave} />
        <OrangeBtn text={'Отменить изменения'} onClick={handleCancel} />
      </div>
    </form>
  );
}

export default FormWord;
