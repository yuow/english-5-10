export function AboutProject() {
  return (
    <section className="about" style={{ display: 'flex' }}>
      <div className="about__wrapper container">
        <h2 className="about__title">О проекте</h2>
        <p className="about__text">
          В действующей системе обучения английскому языку есть существенные
          недостатки, которые не устраивают педагогов и обучающихся, а также
          оказывают негативное влияние на образовательный процесс. Поэтому мы
          заинтересовались в создании образовательной платформы, которая поможет
          как студентам, так и преподавателям
        </p>
      </div>
      <div className="kid-image">
        <div style={{ position: 'relative' }}>
          <div className="square"></div>
          <img
            src="img/kid.png"
            width={700}
            height={640}
            className="kid-image-img"
          />
        </div>
      </div>
    </section>
  );
}
