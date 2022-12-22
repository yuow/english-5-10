export function AboutProject() {
  return (
    <section className="about" style={{ display: 'flex' }}>
      <div className="about__wrapper container">
        <h2 className="about__title">О проекте</h2>
        <p className="about__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          porro esse eum quos molestias consequuntur fugiat ad veritatis, rerum
          iure cumque error sapiente aut, voluptates qui officia perferendis
          facere quia.
        </p>
        <div className="icons__wrapper">
          <span className="about__benefits" id="benefit1">
            ooooo
          </span>
          <span className="about__benefits" id="benefit2">
            ooooo
          </span>
          <span className="about__benefits" id="benefit3">
            ooooo
          </span>
        </div>
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
