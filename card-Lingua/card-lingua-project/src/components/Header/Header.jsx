import style from './header.module.scss';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <>
      <header className={style.header}>
        <Logo className={style.header__logo} />
        <nav className={style.header__menu} role="navigation">
          <ul className={style.header__list}>
            <li className={style.header__item}>
              <a
                className={style.header__link}
                href="/"
                target="_blank"
                aria-label="Мой словарь"
              >
                Мой словарь
              </a>
            </li>
            <li className={style.header__item}>
              <a
                className={style.header__link}
                href="/"
                target="_blank"
                aria-label="Карточки слов"
              >
                Карточки слов
              </a>
            </li>
            <li className={style.header__item}>
              <a
                className={style.header__link}
                href="/"
                target="blank"
                aria-label="Контакты "
              >
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
