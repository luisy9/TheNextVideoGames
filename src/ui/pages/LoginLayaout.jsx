import { LoginPage, RegisterPage } from './components';
import { useAuthStore } from '../../hooks/useAuthStore';
import './index.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginLayaout = () => {

    const { status } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 'authenticated') {
            navigate('/');
        }
    }, [status])

    return (
        <div className='container-fluid'>
            <div className="container">
                <div className='row containerLayout align-items-center'>
                    <div className="col">
                        <LoginPage />
                    </div>
                    <div className="col">
                        <RegisterPage />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginLayaout
