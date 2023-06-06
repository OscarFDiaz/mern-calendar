import './LoginPage.css';

export const LoginPage = () => {
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form>
            <div className="form-group mb-2 form-floating">
              <input type="text" className="form-control" placeholder="Correo" />
              <label>Correo</label>
            </div>
            <div className="form-group mb-4 form-floating">
              <input type="password" className="form-control" placeholder="Contraseña" />
              <label>Contraseña</label>
            </div>
            <div className="form-group mb-2 text-center">
              <input
                type="submit"
                className="btnSubmit rounded-5 p-3 fs-5"
                value="Login"
              />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form>
            <div className="form-group mb-2 form-floating">
              <input type="text" className="form-control" placeholder="Nombre" />
              <label>Nombre</label>
            </div>
            <div className="form-group mb-2 form-floating">
              <input type="email" className="form-control" placeholder="Correo" />
              <label>Correo</label>
            </div>
            <div className="form-group mb-2 form-floating">
              <input type="password" className="form-control" placeholder="Contraseña" />
              <label>Contraseña</label>
            </div>

            <div className="form-group mb-4 form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
              />
              <label>Repita la contraseña</label>
            </div>

            <div className="form-group mb-2 text-center">
              <input
                type="submit"
                className="btnSubmit rounded-5 p-3 fs-5"
                value="Crear cuenta"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
