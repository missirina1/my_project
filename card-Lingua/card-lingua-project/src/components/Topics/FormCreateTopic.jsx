import OrangeBtn from '../UX/OrangeBtn';
import WhiteBtn from '../UX/WhiteBtn';
import styles from './FormCreateTopic.module.scss';
import NewWordFromTopic from './NewWordFromTopic';

function FormCreateTopic() {
  return (
    <>
      <div className={styles.topicForm}>
        <h1 className={styles.topicForm__title}>Создать новый модуль</h1>
        <form className={styles.topicForm__form}>
          <input
            className={styles.topicForm__form_theme}
            type="text"
            placeholder="Введите название, например: Животные"
          ></input>
          <input
            className={styles.topicForm__form_description}
            type="text"
            placeholder="Введите описанание"
          />
          <div className={styles.topicForm__form_newWord}>
            <NewWordFromTopic />
            <NewWordFromTopic />
            <NewWordFromTopic />
          </div>

          <WhiteBtn
            text={' + Добавить карточку'}
            className={styles.topicForm__addNewWord}
          />

          <OrangeBtn
            text={' + Создать новый модуль'}
            className={styles.topicForm__btn}
          />
        </form>
      </div>
    </>
  );
}

export default FormCreateTopic;
