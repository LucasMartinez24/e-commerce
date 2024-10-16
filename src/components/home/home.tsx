import './home.css'
const HomeSection = () => {
  return (
    <section className="main-home">
      <div className="text">
        <h1>Bienvenid@ <br /> a Encanto Accesorios</h1>
        <h5>Hechos a mano con mucho amor</h5>
        <p>Accesorios para Regalar(te)</p>

        <button className="main-btn">
          Comprar ahora <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="down-arrow">
        <a href="#products" className="down">
          <i className="fa-solid fa-arrow-down"></i>
        </a>
      </div>
    </section>
  );
};

export default HomeSection;