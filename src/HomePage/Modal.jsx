export function Modal({ display, setDisplay }) {
  const onClick = (event) => {
    if (event.target.id == 'modal') {
      setDisplay('none');
      document.body.className = '';
    }
  };

  return (
    <div id="modal" style={{ display }} onClick={onClick}>
      <div className="login">
        <h1 className="login__header">ВХОД</h1>
        <form className="login-form">
          <div className="login-input">
            <div className="login-input__inner">
              <label className="login-input__label">E-mail</label>
              <input className="login-input__input" placeholder="######" />
            </div>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 11.2404H8V9.3411C7.99915 8.63615 7.70388 7.96029 7.17896 7.46181C6.65405 6.96333 5.94235 6.68293 5.2 6.68213H2.8C2.05765 6.68293 1.34595 6.96333 0.821037 7.46181C0.296118 7.96029 0.000846945 8.63615 0 9.3411V11.2404Z"
                fill="#403A4B"
                fillOpacity="0.6"
              />
              <path
                d="M1.19983 3.26347C1.19983 3.78936 1.36405 4.30345 1.67171 4.74071C1.97938 5.17798 2.41668 5.51878 2.92832 5.72004C3.43995 5.92129 4.00294 5.97394 4.54608 5.87135C5.08923 5.76875 5.58814 5.51551 5.97973 5.14364C6.37131 4.77178 6.63799 4.298 6.74603 3.78221C6.85407 3.26641 6.79862 2.73178 6.58669 2.24592C6.37477 1.76006 6.01588 1.34478 5.55543 1.05261C5.09497 0.760438 4.55362 0.604492 3.99983 0.604492C3.25722 0.604492 2.54503 0.884633 2.01993 1.38329C1.49483 1.88194 1.19983 2.55826 1.19983 3.26347Z"
                fill="#403A4B"
                fillOpacity="0.6"
              />
            </svg>
          </div>

          <div className="login-input">
            <div className="login-input__inner">
              <label className="login-input__label">Пароль</label>
              <input
                className="login-input__input"
                type="password"
                placeholder="●●●●●●●●"
              />
            </div>
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9655 4.94051C11.9479 4.9787 11.5245 5.88691 10.5828 6.79744C9.32864 8.01027 7.74385 8.65137 6 8.65137C4.25615 8.65137 2.67135 8.01031 1.41716 6.79749C0.475458 5.88691 0.0520088 4.97865 0.0344588 4.94046C0.011739 4.89101 0 4.8375 0 4.78339C0 4.72928 0.011739 4.67577 0.0344588 4.62632C0.0520588 4.58812 0.475458 3.68011 1.41721 2.76968C2.6714 1.55714 4.2561 0.916182 6 0.916182C7.7439 0.916182 9.3286 1.55714 10.5828 2.76968C11.5245 3.68011 11.9479 4.58807 11.9655 4.62632C11.9883 4.67577 12 4.72928 12 4.78339C12 4.8375 11.9882 4.89106 11.9655 4.94051ZM6 6.5238C6.35601 6.5238 6.70402 6.42173 7.00002 6.23049C7.29603 6.03925 7.52674 5.76744 7.66298 5.44942C7.79922 5.1314 7.83486 4.78146 7.76541 4.44385C7.69596 4.10624 7.52452 3.79613 7.27279 3.55273C7.02106 3.30933 6.70033 3.14357 6.35116 3.07641C6.002 3.00926 5.64008 3.04372 5.31117 3.17545C4.98226 3.30718 4.70114 3.53025 4.50336 3.81646C4.30557 4.10267 4.2 4.43917 4.2 4.78339C4.20053 5.24482 4.39034 5.6872 4.72779 6.01348C5.06524 6.33976 5.52277 6.52329 6 6.5238Z"
                fill="#403A4B"
                fillOpacity="0.6"
              />
            </svg>
          </div>
          <div className="login-remember-me">
            <div className="login-remember-me__button"></div>
            <p>Запомнить меня</p>
          </div>
          <button type="submit" className="login-button">
            ВОЙТИ
          </button>
        </form>
        <div className="divider"></div>
        <a className="login-forgot-password-button">Забыли пароль?</a>
      </div>
    </div>
  );
}
