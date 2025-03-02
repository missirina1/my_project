import styles from './PageModule.module.scss';
import Carousel from '../Cards/Carousel';
import OrangeBtn from '../UX/OrangeBtn';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import WhiteBtn from '../UX/WhiteBtn';

function PageModule() {
  const { moduleId } = useParams();
  const [moduleData, setModuleData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedModules = JSON.parse(localStorage.getItem('modules')) || [];
    console.log('Все модули в localStorage:', storedModules);
    console.log('Ищем модуль с ID:', moduleId);

    const module = storedModules.find(
      (mod) => String(mod.id) === String(moduleId)
    );

    if (module) {
      console.log('Модуль найден:', module);
      setModuleData(module);
    } else {
      console.log('Модуль не найден!');
    }
  }, [moduleId]);

  if (!moduleData) {
    return <p>Модуль не найден</p>;
  }
  function deleteModule() {
    const storedModules = JSON.parse(localStorage.getItem('modules')) || [];
    const updatedModules = storedModules.filter(
      (mod) => String(mod.id) !== String(moduleId)
    );

    localStorage.setItem('modules', JSON.stringify(updatedModules));

    console.log(`Модуль ID ${moduleId} удален`);

    navigate('/');
  }
  return (
    <>
      <div className={styles.pageModule}>
        <div className={styles.pageModule__header}>
          <h1 className={styles.pageModule__header_title}>{moduleData.name}</h1>
          <Link to={`/formCreateTopic/${moduleId}`}>
            <OrangeBtn
              text={'Редактировать'}
              className={styles.pageModule__header_btn}
            />
          </Link>
          <WhiteBtn
            text={
              <span role="img" aria-label="Закрыть">
                Удалить модуль ❌
              </span>
            }
            className={styles.pageModule__header_btn}
            onClick={deleteModule}
          />
        </div>
        <Carousel className={styles.pageModule__cards} />
        <p className={styles.pageModule__description}>
          {moduleData.description}
        </p>
      </div>
    </>
  );
}

export default PageModule;
