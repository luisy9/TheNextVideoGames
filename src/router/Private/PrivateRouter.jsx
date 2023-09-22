import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../../hooks";


export const PrivateRouter = () => {

    const { status } = useAuthStore();

    return (
        status === 'authenticated' ? <Outlet /> : <Navigate to='login' />
    )
}

export default PrivateRouter;