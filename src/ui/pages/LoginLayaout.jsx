import { LoginPage, RegisterPage } from './components';
import './index.css';

export const LoginLayaout = () => {

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
