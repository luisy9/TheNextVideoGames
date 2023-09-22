export const Buscador = () => {
    return (
        <div className="container-lg pt-5">
            <h1>Busca tu <span className="gradient-text">VideoJuego</span></h1>
            <div className="container d-flex justify-content-center">
                <div className="mx-2">
                    <input type="text" placeholder="Buscar" className="buscador" />
                </div>
                <div className="mx-2">
                    <button className="buttonBuscar">Buscar</button>
                </div>
            </div>
        </div>
    )
}

export default Buscador;
