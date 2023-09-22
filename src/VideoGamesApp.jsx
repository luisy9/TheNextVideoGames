import { BrowserRouter } from "react-router-dom"
import { AppRouter } from './router';
import { Provider } from 'react-redux';
import { store } from './store'
import { Themes } from './theme';
import { ThemeProvider } from "styled-components";

export const VideoGamesApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={Themes['ligth']}>
                    <AppRouter />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    )
}