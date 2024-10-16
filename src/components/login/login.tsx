import './login.css';
import logoGoogle from '/src/assets/img/g-logo.png';
const LoginSection = () => {
  return(
    <div className="contenedor">
      <section className="container">
        <div className="blueBg">
          <div className="box signin">
            <h2>¿Ya tienes una cuenta?</h2>
            <button className='signinBtn'>Iniciar Sesion</button>
          </div>
          <div className="box signup">
            <h2>¿No tienes una cuenta?</h2>
            <button className='signupBtn'>Registrate</button>
          </div>
        </div>
        <div className="formBx">
          <div className="form signinForm">
            <form>
              <h3>Iniciar Sesion</h3>
              <button className='google'>
                <div className="btnGoogle">
                  <div className="img-container">
                    <img src={logoGoogle} alt="Google" />
                  </div>
                  <div className="text-container">
                    <span>Iniciar Sesion con Google</span>
                  </div>
                </div>
              </button>
              <input type="email" name="emailLogin" id="email" placeholder='Email' />
              <input type="password" name="passwordLogin" id="password" placeholder='Contraseña'/>
              <input type="submit" value="Iniciar Sesion" />
            </form>
          </div>
          <div className="form signupForm">
            <form>
              <h3>Registrarse</h3>
              <button className='google'>
                <div className="btnGoogle">
                  <div className="img-container">
                    <img src={logoGoogle} alt="Google" />
                  </div>
                  <div className="text-container">
                    <span>Registrarse con Google</span>
                  </div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginSection;