import style from './Task8.module.css';
import { useState } from 'react';

function TextInput() {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    setError(e.target.value ? '' : 'Поле не должно быть пустым');
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Task 8</h1>
      <input
        className={style.input}
        value={text}
        onChange={handleChange}
        placeholder="Введите текст"
      />
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
}

export default TextInput;
