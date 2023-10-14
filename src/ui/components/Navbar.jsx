import { useNavigate } from 'react-router-dom';
import logo from '../../assets/consola-de-juego.png';
import { useAuthStore } from '../../hooks/useAuthStore';
import './style.css';

export const Navbar = () => {
    const { user, startLogout } = useAuthStore();
    const navigate = useNavigate();

    const isLogin = () => {
        const { name } = user;
        return (
            <>
                {
                    name ? <>
                        <li className='nav-item' style={{ cursor: 'pointer' }}>
                            <a className="" href="#" onClick={onLogout}> <i className="bi bi-box-arrow-right fs-4"></i></a>
                        </li>
                    </>
                        : <></>
                }
            </>
        )
    }

    const onLogout = () => {
        startLogout();
    }

    const onAccount = () => {
        navigate('/auth/loginLayout');
    }

    return (
        <div className='px-5'>
            <nav className="navbar navbar-expand-sm containerNavbar">
                <img src={logo} alt='logo' /><a className="navbar-brand" href="#"><span className='gradient-text'>TheNext</span><span className='text-white'>VideoGames</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link px-5" href='/'>Home</a>
                        </li>
                        <li className="nav-item dropdown px-3">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                VideoGames
                            </a>
                            <ul className="dropdown-menu backGroundDropDown px-2 py-2">
                                <li><a className="dropdown-item dropdown-itemColor my-1" href="#">PlayStation</a></li>
                                <li><a className="dropdown-item dropdown-itemColor my-1" href="#">XBOX</a></li>
                                <li><a className="dropdown-item dropdown-itemColor my-1" href="#">PC</a></li>
                            </ul>
                        </li>
                        <li className="nav-item px-4" style={{ marginRight: '22px' }}>
                            <a className="nav-link" href="#">Ofertas</a>
                        </li>
                        <li className='nav-item' style={{ cursor: 'pointer', marginRight: '30px' }}>
                            <a className='' onClick={onAccount}><i className="bi bi-person-circle fs-4"></i></a>
                        </li>
                        {isLogin()}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
