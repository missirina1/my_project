import styles from './NewWordFromTopic.module.scss';

function NewWordFromTopic() {
  return (
    <>
      <div className={styles.newWord}>
        <span className={styles.newWord__index}>index</span>
        <input
          className={styles.newWord__word}
          type="text"
          placeholder="Слово"
        ></input>
        <input
          className={styles.newWord__translate}
          type="text"
          placeholder="Перевод"
        />
      </div>
    </>
  );
}
export default NewWordFromTopic;
