import styles from './Form.module.css';
import { useState } from 'react';

function Form() {
  const [text, setText] = useState('');
  const [display, setDisplay] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setDisplay(text);
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите текст"
          value={text}
          onChange={(e) => setText(e.target.value.toUpperCase())}
        />
        <button type="submit">Click</button>
      </form>
      <p>{display}</p>
    </>
  );
}

export default Form;
