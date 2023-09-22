import { useAuthStore, useForm } from '../../../hooks';
import Swal from 'sweetalert2';
import './styles.css';


const loginFormFields = {
  loginEmail: '',
  loginPassword: ''
}


export const LoginPage = () => {

  const { startLogin, errorMessage } = useAuthStore();
  const { onInputChange, loginEmail, loginPassword, formValidation } = useForm(loginFormFields);

  const onSubmit = () => {
    event.preventDefault();
    if (formValidation) {
      startLogin({ email: loginEmail, password: loginPassword });
    } else {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }
  }

  return (
    <div className="login-form-1">
      <h3 className='text-white'>Iniciar Session</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group mt-3">
          <input type="email" placeholder="Correo" className="form-control" name="loginEmail" value={loginEmail} onChange={onInputChange} />
        </div>
        <div className="form-group mt-3">
          <input type="password" placeholder="password" className="form-control" name='loginPassword' value={loginPassword} onChange={onInputChange} />
        </div>
        <div className="d-grid mt-3">
          <input type="submit" className="btnSubmit" value="Inciar Sesion" />
        </div>
      </form>
    </div>
  )
}

export default LoginPage
