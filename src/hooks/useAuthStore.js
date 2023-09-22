import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import { onLogout, onChecking, clearErrorMessage, onLogin } from '../store';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const checkIsLogin = async () => {
    const token = localStorage.getItem('token');
    if (token === undefined) return dispatch(onLogout());

    try {
      const { data } = await calendarApi.get('/auth/renew');
      
      // const consulta = await calendarApi.get('/auth/get');
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin({ name: data.name }));
    } catch (erro) {
      dispatch(onLogout());
      console.log(erro);
      localStorage.clear();
    }
  };

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());

    try {
      const { data } = await calendarApi.post('/auth/', { email, password });
      
      const { name, token, uid } = data;
      //setItem para que cuando recarguemos no se nos vaya la sesion!
      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin({ name: name, iduser: uid }));
    } catch (err) {
      console.log(err);
      dispatch(onLogout('Credenciales Incorrectas'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  
  
  const startRegister = async ({ name, email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post('/auth/new', {
        name,
        email,
        password,
      });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());


      dispatch(onLogin({ name: data.name, iduser: data.iduser }));
    } catch (err) {
      console.log(err);
      dispatch(onLogout(err.response.data?.msg || '--'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  return {
    startLogin,
    checkIsLogin,
    status,
    user,
    errorMessage,
    startLogout,
    startRegister,
  };
};
