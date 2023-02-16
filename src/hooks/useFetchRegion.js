
import { useState, useEffect } from 'react';
import { getPorRegion } from '../helpers/getPorRegion';

export const useFetchRegion = ( region ) => {

    const [paises, setPaises] = useState([]);
    const getPaises = async () => {
        const paises = await getPorRegion( region );
        setPaises( paises );
    }

    useEffect( () => {
        getPaises();
    }, []);

    return { paises };
}