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
                <Route element={<LoginLayaout />} path="/auth/loginLayout" exact />
            </Route>


            { /* Authenticated */}
            <Route element={<PrivateRouter />}>
                <Route element={<HomePage />} path="/" exact />
                <Route element={<PlataformasLayout />} path="/Plataforma/:name" exact />
                <Route element={<HomePage />} path="/auth/*" exact />
            </Route>
        </Routes>
    )
}