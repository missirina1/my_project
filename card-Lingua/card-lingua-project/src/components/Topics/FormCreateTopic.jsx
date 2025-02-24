import OrangeBtn from '../UX/OrangeBtn';
import WhiteBtn from '../UX/WhiteBtn';
import styles from './FormCreateTopic.module.scss';
import NewWordFromTopic from './NewWordFromTopic';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormCreateTopic() {
  const [nameModule, setNameModule] = useState('');
  const [description, setDescriprion] = useState('');
  const [words, setWords] = useState([{ id: 1 }]);
  const navigate = useNavigate();

  function addWord() {
    setWords((prevWords) => [...prevWords, { id: prevWords.length + 1 }]);
  }
  function handleClick(e) {
    e.preventDefault();

    const newModule = { name: nameModule };
    const storedModules = JSON.parse(localStorage.getItem('modules')) || [];
    localStorage.setItem(
      'modules',
      JSON.stringify([...storedModules, newModule])
    );

    navigate('/'); // Переход в библиотеку
  }

  return (
    <>
      <div className={styles.topicForm}>
        <h1 className={styles.topicForm__title}>Создать новый модуль</h1>
        <form className={styles.topicForm__form}>
          <input
            className={styles.topicForm__form_theme}
            type="text"
            placeholder="Введите название, например: Животные"
            value={nameModule}
            onChange={(e) => {
              setNameModule(e.target.value);
            }}
          ></input>
          <input
            className={styles.topicForm__form_description}
            type="text"
            placeholder="Введите описанание"
            value={description}
            onChange={(e) => {
              setDescriprion(e.target.value);
            }}
          />
          <div className={styles.topicForm__form_newWord}>
            {words.map((word) => (
              <NewWordFromTopic key={word.id} index={word.id} />
            ))}
          </div>

          <WhiteBtn
            text={' + Добавить карточку'}
            className={styles.topicForm__addNewWord}
            onClick={(e) => {
              e.preventDefault();
              addWord();
            }}
          />

          <OrangeBtn
            text={' + Создать новый модуль'}
            className={styles.topicForm__btn}
            onClick={handleClick}
          />
        </form>
      </div>
    </>
  );
}

export default FormCreateTopic;
