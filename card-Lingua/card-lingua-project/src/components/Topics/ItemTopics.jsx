import styles from './ItemTopics.module.scss';

function ItemTopics(props) {
  const { name } = props;
  return (
    <>
      <div className={styles.topics}>
        <p className={styles.topics__quentity}>Количество карточек</p>
        <h1 className={styles.topics__title}> {name}</h1>
      </div>
    </>
  );
}

export default ItemTopics;
