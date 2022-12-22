import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from './Modal';

export function Home(props) {
  const [display, setDisplay] = useState('none');

  const onClick = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.className = 'modal-opened';
    setDisplay('flex');
  };

  return (
    <>
      <header className="header">
        <div className="container header-container">
          <div className="section-header__items English">
            <ul className="section-header__list">
              <li className="section-header__item">
                <a href="" className="section-header__logo">
                  <img
                    className="section-header__logo"
                    src="icon/logo.svg"
                    alt=""
                  />
                </a>
              </li>
              <li className="section-header__item">
                <a href="" className="section-header__link">
                  Поддержка
                </a>
              </li>
              <li className="section-header__item">
                <a href="" className="section-header__link">
                  О проекте
                </a>
              </li>
              <li className="section-header__item">
                <a href="" className="section-header__link">
                  Курсы
                </a>
              </li>
              <li className="section-header__item">
                <a href="" className="section-header__link">
                  Контакты
                </a>
              </li>
              <li className="section-header__item">
                <a
                  href=""
                  id="login-button"
                  className="section-header__link big"
                  onClick={onClick}
                >
                  Вход
                </a>
              </li>
            </ul>
            <div className="section-header__information">
              <h1 className="section-header__header">
                Научим английскому языку всего за 3 месяца
              </h1>
              <p className="section-header__text">
                С помощью интерактивных методов обучения и квалифицированных
                специалистов
              </p>
              <Link to="/course">
                <button className="section-header__btn">
                  Приступить к обучению
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Modal display={display} setDisplay={setDisplay} />
    </>
  );
}
