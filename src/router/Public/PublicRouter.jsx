import { Outlet } from "react-router-dom"
import { useAuthStore } from "../../hooks";

export const PublicRoute = () => {
    const { status } = useAuthStore();

    return (
        (status === 'authenticated' || status === 'not-authenticated')
        && <Outlet />
    )

}

export default PublicRoute;