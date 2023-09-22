import { ProgressBar } from "react-loader-spinner"

export const LoadingPage = () => {
    return (
        <div className="containerLayout container-fluid">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-auto">
                    <ProgressBar
                        height="120"
                        width="100"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass="progress-bar-wrapper"
                        borderColor='#cdff06'
                        barColor='#262A44'
                    />
                </div>
            </div>

        </div>
    )
}

export default LoadingPage
