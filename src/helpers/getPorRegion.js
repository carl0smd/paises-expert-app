

export const getPorRegion = async ( region ) => {

    const url = `https://restcountries.com/v3.1/region/${ region }`;

    const resp = await fetch( url );


    const data = await resp.json();
    

    const paises = data.map( pais => ({
        name: pais.name.common,
        flag: pais.flags.png,
        capital: pais.capital,
        population: pais.population,
    }));

    return paises;

}