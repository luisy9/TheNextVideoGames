import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import { useAuthStore } from '../hooks';
import { HomePage, PlataformasLayout } from '../VideoGames';
import { LoginLayaout, LoadingPage } from '../ui/pages'


import PublicRoute from "./Public/PublicRouter";
import PrivateRouter from "./Private/PrivateRouter";

export const AppRouter = () => {

    const { status, checkIsLogin } = useAuthStore();

    useEffect(() => {
        checkIsLogin();
    }, [])

    if (status === 'checking') {
        return (
            <LoadingPage />
        )
    }

    return (
        <Routes>
            { /* Not Authenticated */}
            <Route element={<PublicRoute />}>
                <Route path="/*" element={<Navigate to="/" />} />
                <Route element={<HomePage />} path="/" exact />
                <Route element={<LoginLayaout />} path="/auth/loginLayout" exact/>
            </Route>


           { /* Authenticated */}
            <Route element={<PrivateRouter />}>
                <Route element={<PlataformasLayout />} path="/PlayStation" exact />
            </Route>
            {
                // (
                //     status === 'not-authenticated'
                // ) ?
                //     (
                //         <>
                //             <Route path="/auth/*" element={<LoginLayaout />} />
                //             <Route path="/*" element={<Navigate to="/auth/loginLayout" />} />
                //         </>
                //     )

                //     :

                // (
                //     <>
                //         <Route path="/" element={<HomePage />} />
                //         <Route path="/*" element={<Navigate to="/" />} />
                //     </>
                // )
            }

            {/* <Route path="/*" element={}>


</Route> */}
        </Routes>
    )
}