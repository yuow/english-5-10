import { Link } from 'react-router-dom';

export function Nav({ current, setCurrent }) {
  const onClick = (number) => () => {
    setCurrent(number);
  };
  return (
    <header
      style={{ height: 100, display: 'flex', alignItems: 'center', gap: 40 }}
    >
      <Link to="/" style={{ marginRight: 30 }}>
        <img src="icon/logo_short.svg" height={100} id="polytech" />
      </Link>
      <div onClick={onClick(1)} id="imagee1" className="nav-icon">
        <img src="icon/burgerIcon.svg" alt="Submit" />
        {current === 1 && <div className="nav-icon-arrow"></div>}
      </div>
      <div onClick={onClick(2)} id="imagee2" className="nav-icon">
        <img src="icon/playIcon.svg" alt="Submit" />
        {current === 2 && <div className="nav-icon-arrow"></div>}
      </div>
      <div onClick={onClick(3)} id="imagee3" className="nav-icon">
        <img src="icon/burgerIcon.svg" alt="Submit" />
        {current === 3 && <div className="nav-icon-arrow"></div>}
      </div>
      <div onClick={onClick(4)} id="imagee4" className="nav-icon">
        <img src="icon/burgerIcon.svg" alt="Submit" />
        {current === 4 && <div className="nav-icon-arrow"></div>}
      </div>
      <div onClick={onClick(5)} id="imagee5" className="nav-icon">
        <img src="icon/burgerIcon.svg" alt="Submit" />
        {current === 5 && <div className="nav-icon-arrow"></div>}
      </div>
      <div onClick={onClick(6)} id="imagee6" className="nav-icon">
        <img src="icon/burgerIcon.svg" alt="Submit" />
        {current === 6 && <div className="nav-icon-arrow"></div>}
      </div>
      <div onClick={onClick(7)} id="imagee7" className="nav-icon">
        <img src="icon/burgerIcon.svg" alt="Submit" />
        {current === 7 && <div className="nav-icon-arrow"></div>}
      </div>
      <div onClick={onClick(8)} id="imagee8" className="nav-icon">
        <img src="icon/questionIcon.svg" alt="Submit" />
        {(current === 8 || current === 9) && (
          <div className="nav-icon-arrow"></div>
        )}
      </div>
    </header>
  );
}
