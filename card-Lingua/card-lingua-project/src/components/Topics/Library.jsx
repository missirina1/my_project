import OrangeBtn from '../UX/OrangeBtn';
import ItemTopics from './ItemTopics';
import styles from './Library.module.scss';
import { Link } from 'react-router-dom';

function Library() {
  return (
    <>
      <div className={styles.library}>
        <h1 className={styles.library__title}>Ваша библиотека</h1>
        <div className={styles.library__modules}>
          <h2 className={styles.library__modules_title}>Модули</h2>
          <div className={styles.library__newModule}>
            <h3 className={styles.library__newModule_title}>
              Создать новый модуль
            </h3>
            <Link to="/formCreateTopic">
              <OrangeBtn text={'+'} className={styles.library__newModule_btn} />
            </Link>
          </div>
        </div>
        <div className={styles.library__listModules}>
          <ItemTopics />
          <ItemTopics />
          <ItemTopics />
        </div>
      </div>
    </>
  );
}

export default Library;
