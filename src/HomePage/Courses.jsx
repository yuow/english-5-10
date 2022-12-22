import { Link } from 'react-router-dom';

export function Courses() {
  return (
    <section className="section-do">
      <div className="container section-do__container">
        <div className="color box">
          <div className="cont text">
            <p
              className="text"
              style={{ margin: 0, fontSize: 80, fontWeight: 700 }}
            >
              Английский
            </p>
            <p className="text" style={{ fontSize: 40 }}>
              Выберите нужный Вам курс
            </p>
          </div>
          <div>
            <div className="cont card">
              <img className="picture" src="icon/Eng.jpg" />
              <div style={{ margin: '56px 0 0 99px' }}>
                <p className="text course">Курс 1</p>
                <p
                  className="text descrip"
                  style={{ fontSize: 30, marginTop: 50 }}
                >
                  щщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщ
                  щщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщ
                </p>
                <Link className="btn" to="/course">
                  <span
                    className="text"
                    style={{ margin: 'auto', fontSize: 30 }}
                  >
                    Подробнее
                  </span>
                </Link>
              </div>
            </div>
            <div className="cont card">
              <img className="picture" src="icon/Eng.jpg" />
              <div style={{ margin: '56px 0 0 99px' }}>
                <p className="text course">Курс 2</p>
                <p className="text descrip">
                  щщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщ
                  щщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщ
                </p>
                <Link className="btn" to="/course">
                  <span
                    className="text"
                    style={{ margin: 'auto', fontSize: 30 }}
                  >
                    Подробнее
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
