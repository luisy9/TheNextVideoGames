import Swal from 'sweetalert2';
import { useForm, useAuthStore } from '../../../hooks';
import { useEffect } from 'react';
import './styles.css';

const registerFormFields = {
  nombreRegister: '',
  emailRegister: '',
  passwordRegister1: '',
  passwordRegister2: ''
}

export const RegisterPage = () => {

  const { startRegister, errorMessage } = useAuthStore();
  const { onInputChange, nombreRegister, emailRegister, passwordRegister1, passwordRegister2 } = useForm(registerFormFields);


  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Error en la autenticacion', errorMessage, 'error');
    }
  }, [errorMessage])

  const onSubmit = () => {
    event.preventDefault();
    if (passwordRegister1 !== passwordRegister2) {
      Swal.fire('Error en la autenticacion', 'Las contraseñas deben coincidir', 'error');
      return;
    }

    startRegister({ name: nombreRegister, email: emailRegister, password: passwordRegister1 });
  }


  return (
    <div className="login-form-1">
      <h3 className='text-white'>Crear Cuenta</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group mt-3">
          <input type="text" placeholder="nombre" className="form-control" name="nombreRegister" value={nombreRegister} onChange={onInputChange} />
        </div>
        <div className="form-group mt-3">
          <input type="email" placeholder="correo" className="form-control" name='emailRegister' value={emailRegister} onChange={onInputChange} />
        </div>
        <div className="form-group mt-3">
          <input type="password" placeholder="password" className="form-control" name='passwordRegister1' value={passwordRegister1} onChange={onInputChange} />
        </div>
        <div className="form-group mt-3">
          <input type="password" placeholder="repite tu password" className="form-control" name='passwordRegister2' value={passwordRegister2} onChange={onInputChange} />
        </div>
        <div className="d-grid mt-3">
          <input type="submit" className="btnSubmit" value="Registrarse" />
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
