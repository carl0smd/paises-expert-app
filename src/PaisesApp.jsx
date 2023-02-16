import { useState } from 'react';
import { RegionInput } from './components/RegionInput';
import { PorRegion } from './components/PorRegion';

export const PaisesApp = () => {

    const paisesContainer = document.querySelector('#paises');

    if (paisesContainer) paisesContainer.remove();

    const [paises, setPais] = useState([]);

    const onNewPais = (pais) => {
        if (paises.includes(pais)) return;
        setPais([...paises, pais]);
    }

    return (
        <div id="container">
            <h1>PaisesApp</h1>
            <hr />
            <RegionInput onNewPais={event => onNewPais(event)} />
            <hr />
            <div>
            <hr />
                {
                    paises.map((pais) => (
                        <PorRegion
                            key={pais}
                            pais={pais}
                        />
                    ))
                }
            </div>
        </div>
    );

}