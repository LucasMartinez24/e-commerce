import { useRef, useEffect } from 'react';
import './login.css';
import logoGoogle from '/src/assets/img/g-logo.png';

const LoginSection = () => {
  const formBxRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLElement | null>(document.body);
  const signupBtnRef = useRef<HTMLButtonElement | null>(null);
  const signinBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const signupBtn = signupBtnRef.current;
    const signinBtn = signinBtnRef.current;
    const formBx = formBxRef.current;
    const body = bodyRef.current;

    if (!signupBtn || !signinBtn || !formBx || !body) {
      return; // Verifica que todos los elementos existen antes de continuar
    }

    const handleSignupClick = () => {
      formBx.classList.add('active');
      body.classList.add('active');
    };

    const handleSigninClick = () => {
      formBx.classList.remove('active');
      body.classList.remove('active');
    };

    signupBtn.addEventListener('click', handleSignupClick);
    signinBtn.addEventListener('click', handleSigninClick);

    // Cleanup listeners on unmount
    return () => {
      signupBtn.removeEventListener('click', handleSignupClick);
      signinBtn.removeEventListener('click', handleSigninClick);
    };
  }, []);

  return (
    <div className="contenedor">
      <section className="container">
        <div className="blueBg">
          <div className="box signin">
            <h2>¿Ya tienes una cuenta?</h2>
            <button className="signinBtn" ref={signinBtnRef}>Iniciar Sesión</button>
          </div>
          <div className="box signup">
            <h2>¿No tienes una cuenta?</h2>
            <button className="signupBtn" ref={signupBtnRef}>Regístrate</button>
          </div>
        </div>
        <div className="formBx" ref={formBxRef}>
          <div className="form signinForm">
            <form>
              <h3>Iniciar Sesión</h3>
              <button className="google">
                <div className="btnGoogle">
                  <div className="img-container">
                    <img src={logoGoogle} alt="Google" />
                  </div>
                  <div className="text-container">
                    <span>Iniciar Sesión con Google</span>
                  </div>
                </div>
              </button>
              <input type="email" name="emailLogin" id="email" placeholder="Email" />
              <input type="password" name="passwordLogin" id="password" placeholder="Contraseña" />
              <input type="submit" value="Iniciar Sesión" />
            </form>
          </div>
          <div className="form signupForm">
            <form>
              <h3>Registrarse</h3>
              <button className="google">
                <div className="btnGoogle">
                  <div className="img-container">
                    <img src={logoGoogle} alt="Google" />
                  </div>
                  <div className="text-container">
                    <span>Registrarse con Google</span>
                  </div>
                </div>
              </button>
              <input type="email" placeholder="E-mail" name="email" id="email"/>
              <input type="password" placeholder="Password" name="password" id="password" />
              <input type="submit" value="Registrarse"/>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginSection;
