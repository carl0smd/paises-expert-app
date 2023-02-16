
export const PaisItem = ({ name, capital, flag, population }) => {

    return (
        
        <div id="card-container" className="card animate__animated animate__fadeIn">
            <img src={flag} alt={name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Capital: {capital}</p>
                <p className="card-text">Población: {population}</p>
            </div>
        </div>
    );
}