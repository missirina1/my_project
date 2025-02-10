import { useState } from 'react';
import styles from './component.module.css';

function Component() {
  const [count, setCount] = useState(0);

  function handleClick() {
    return setCount(count + 1);
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      {count}
    </button>
  );
}

export default Component;
