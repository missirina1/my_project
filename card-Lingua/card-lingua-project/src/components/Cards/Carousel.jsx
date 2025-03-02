import styles from './Carousel.module.scss';
import Card from './Card';
import WhiteBtn from '../UX/WhiteBtn';
import words from '../data/data';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

function Carousel(props) {
  const { className } = props;
  const [index, setIndex] = useState(1);
  const [direction, setDirection] = useState(1);

  const handleClickBack = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex > 1 ? prevIndex - 1 : words.length - 1));
  };
  const handleClickForward = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex < words.length - 1 ? prevIndex + 1 : 1));
  };

  return (
    <>
      <div className={clsx(styles.slide, className)}>
        <WhiteBtn text={'Назад'} onClick={handleClickBack} />

        <div className={styles.cardWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <Card
                key={words[index - 1].id}
                id={words[index - 1].id}
                english={words[index - 1].english}
                transcription={words[index - 1].transcription}
                russian={words[index - 1].russian}
                index={index}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <WhiteBtn text={'Вперед'} onClick={handleClickForward} />
      </div>
    </>
  );
}

export default Carousel;
