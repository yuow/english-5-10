import { Link } from 'react-router-dom';

const P1 = ({ goNext }) => (
  <div id="posts">
    <h2>
      Present Perfect или
      <br /> Past Simple?
    </h2>
    <p>
      Данный вопрос часто возникает у студентов, изучающих английский. И это
      можно понять: в русском аналога этому времени вообще нет. Более того,
      всегда есть <i>past simple</i>, которое и предназначено для действий в
      прошлом. Именно выбор между этими двумя времени вызывает больше всего
      вопросов.
    </p>
    <p>
      <i>Past simple</i> и <i>Present Perfect</i> оба обозначают действие в
      прошлом, но основное различие заключается в том, что действие в{' '}
      <i>past simple</i> не имеет связи с настоящим, а действие в{' '}
      <i>present perfect</i> имеет, мы видим прямые последствия этого действия в
      настоящем. Стоит помнить эту разницу при изучении примеров.
    </p>
    <button id="next" onClick={goNext} type="submit">
      Следующий шаг <b>{'>'}</b>
    </button>
  </div>
);

const P2 = ({ goNext }) => (
  <div id="posts" style={{ display: 'flex', flexDirection: 'column' }}>
    <div>
      <div id="text_video">
        <h2>Видео</h2>
        <p>
          Краткая инфа про видео (по типу: посмотрев это видео вы сможете
          понять......)
        </p>
      </div>
      <div id="qw">
        <iframe
          width="750"
          height="500"
          src="https://www.youtube.com/embed/nQFuhEmWpLY"
          title="M"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <button id="next_video" onClick={goNext} type="submit">
      Следующий шаг <b>{'>'}</b>
    </button>
  </div>
);

const P3 = ({ goNext }) => (
  <div id="posts">
    <div id="text">
      <h2>Результат в настоящем</h2>
      <p>
        Нам важно то, что факт действия в прошлом влияет на настоящее, между
        ними есть связь. Часто эта связь выражается в словах{' '}
        <i>just, аlready, yet, ever, never.</i>
        Данные слова встречаются чаще всего, но есть и другие:{' '}
        <i>still, recently, lately, since, for.</i>
      </p>
      <p>
        <i>I've just lost my phone!</i> - это произошло только что и влияет на
        настоящее
      </p>
      <p>
        <i>I've already taken care of them.</i> - так как действие уже
        совершено, делать его сейчас не требуется
      </p>
      <p>
        <i>He hasn't returned yet.</i> - информация важна в данный момент
      </p>
      <p>
        <i>Present Perfect</i> используется тогда, когда нам в первую очередь
        важно то, как действие влияет на настоящее, а не факт самого действия в
        прошлом. Представим студента Политеха, который идеально сдал сессию и
        заработал себе повышенную стипендию. И когда у него спрашивают, как он
        сумел это сделать, он переходит на английский и отвечает:
        <br />
        <i>I've studied hard.</i>
      </p>
      <img src="img/Screenshot_32.png" width="99%" />
      <p>
        Очевидно, что важнее всего здесь то, что его действия в прошлом повлияли
        на настоящее. Если спросить этого же студента спустя год, как он смог
        идеально сдать прошлогоднюю сессию, то он уже ответит по-другому:
        <br />
        <i>I've studied hard.</i>
      </p>
      <img src="img/Screenshot_34.png" width="99%" />
      <p>
        Теперь его действия не влияют на настоящее, а следовательно и
        использовать нужно <i>past simple</i>
      </p>
      <button id="next" onClick={goNext} type="submit">
        Следующий шаг <b>{'>'}</b>
      </button>
    </div>
  </div>
);

const P4 = ({ goNext }) => (
  <div id="posts">
    <div id="text">
      <h2>
        Факт совершения
        <br /> действия
      </h2>
      <p>
        Когда мы говорим о событиях в прошлом, иногда нам важно, когда оно было
        совершено, а иногда важен сам факт того, что оно произошло. Во втором
        случае и используется <i>present perfet.</i> Любое указание на
        конкретный момент в прошлом заменяет его на <i>past simple.</i>
      </p>
      <p>
        Отец студента-отличника решает рассказать, где он научился
        дисциплинированию своего сына:
      </p>
      <p>
        <i>I've been to China</i>. - он не уточнил когда, но это не имеет
        значения. Важен сам факт того, что он там был (к слову, опять можно
        найти связь с настоящим - событие из прошлого повлияло на настоящее)
      </p>
      <img src="img/Screenshot_36.png" width="99%" />
      <p>
        <i>I was in China in 1989</i> - указание на конкретное время сразу
        выдает, что нужно использовать <i>past simple</i>
      </p>
      <img src="img/Screenshot_37.png" width="99%" />
      <button id="next" onClick={goNext} type="submit">
        Следующий шаг <b>{'>'}</b>
      </button>
    </div>
  </div>
);

const P5 = ({ goNext }) => (
  <div id="posts">
    <div id="text">
      <h2>
        Незавершенный
        <br />
        период времени
      </h2>
      <p>
        Иногда мы говорим, что событие произошло не в конкретный момент времени
        в прошлом, а в конкретный период времени. И если этот период еще не
        завершился, то используется <i>present perfect</i> если завершился -{' '}
        <i>past simple.</i>
      </p>
      <p>Дополним ответы студента:</p>
      <p>
        <i>I've studied hard this year</i> - год еще идет
      </p>
      <img src="img/Screenshot_39.png" width="99%" />
      <p>
        <i>I studied hard last year. </i> спустя год он ответил так, ведь
        прошлый год уже завершился
      </p>
      <img src="img/Screenshot_40.png" width="99%" />
      <button id="next" onClick={goNext} type="submit">
        Следующий шаг <b>{'>'}</b>
      </button>
    </div>
  </div>
);

const P6 = ({ goNext }) => (
  <div id="posts">
    <div id="text">
      <h2>
        Незавершенные
        <br />
        действия
      </h2>
      <p>
        Также существуют действия, начавшиеся в прошлом, но идущие до сих пор. В
        таком случае используется <i>present perfet,</i> а если действие
        завершилось в прошлом - <i>past simple.</i> Опять возьмем и дополним
        ответы студента:
      </p>
      <p>
        <i>I've studied hard for months</i>
      </p>
      <p>
        Студент говорит, что он усердно трудился все эти месяцы, ион не
        собирается останавливаться - действие не закончилось. Однако после
        сессии он расслабился и действие завершилось:
      </p>
      <p>
        <i>I studied hard for months back then</i>
      </p>
      <p>
        Здесь стоит вспомнить <i>present perfect continuous</i> Оно делает
        акцент на продолжительности действия, то есть если 6 наш студент хотел
        обратить внимание на длительность его подготовки, он бы сказал:
      </p>
      <p>
        <i>I've been studying hard for months</i>
      </p>
      <button id="next" onClick={goNext} type="submit">
        Следующий шаг <b>{'>'}</b>
      </button>
    </div>
  </div>
);

const P7 = ({ goNext }) => (
  <div id="posts">
    <div id="text">
      <h2>
        Разговорный
        <br />
        английский
      </h2>
      <p>
        Стоит отметить то, что имеются четкие правила по употреблению{' '}
        <i>present perfect,</i> и их нужно соблюдать в формальной и письменной
        речи, в разговорном английском эти правила часто игнорируются, и{' '}
        <i>past simple</i>
        используется там, где по правилам должен быть <i>
          present perfect.
        </i>{' '}
        Причина проста - формы <i>past simple</i> короче и проще. Трудно не
        согласиться, что...
      </p>
      <p>
        <i>I just woke up.</i>
        <br />
        сказать проще, чем...
      </p>
      <p>
        <i>I've just woken up.</i>
        <br />
        ..даже если только вторая фраза является грамматически верной. Это стоит
        помнить при общении на английском что в оффлайне, что в онлайне.
      </p>
      <button id="next" onClick={goNext} type="submit">
        Следующий шаг <b>{'>'}</b>
      </button>
    </div>
  </div>
);

const P8 = ({ goNext }) => (
  <div id="posts">
    <div id="text_test">
      <h2>
        Закрепим
        <br /> пройденый материал?
      </h2>
      <p>
        Чтобы информация лучше запоминалась <br />
        мы рекомендуем проходить тест сразу же
        <br /> после изучения новой темы
      </p>
      <button onClick={goNext} id="next_end" type="submit">
        Пройти тест
      </button>
    </div>
  </div>
);

export const Tabs = { P1, P2, P3, P4, P5, P6, P7, P8 };
