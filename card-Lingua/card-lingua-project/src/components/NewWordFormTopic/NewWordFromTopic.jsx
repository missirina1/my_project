import styles from './NewWordFromTopic.module.scss';
import WhiteBtn from '../WhiteBtn/WhiteBtn';

function NewWordFromTopic(props) {
  const { id, index, word, translation, onChange, onDelete } = props;

  return (
    <>
      <div className={styles.newWord}>
        <div className={styles.newWord__header}>
          <span className={styles.newWord__header_index}>{index}</span>
          <div className={styles.newWord__header_boxBtn}>
            <WhiteBtn
              text={
                <span role="img" aria-label="Удалить слово">
                  ❌
                </span>
              }
              className={styles.newWord__header_btn}
              onClick={(e) => {
                e.preventDefault();
                onDelete(id);
              }}
            />
          </div>
        </div>

        <input
          className={styles.newWord__word}
          type="text"
          placeholder="Слово"
          value={word}
          onChange={(e) => onChange('word', e.target.value)}
        ></input>
        <input
          className={styles.newWord__translate}
          type="text"
          placeholder="Перевод"
          value={translation}
          onChange={(e) => onChange('translation', e.target.value)}
        />
      </div>
    </>
  );
}
export default NewWordFromTopic;
