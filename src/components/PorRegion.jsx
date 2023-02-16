
import { PaisItem } from "./PaisItem";
import {useFetchRegion} from '../hooks/useFetchRegion';

export const PorRegion = ({ pais }) => {

    const {paises} = useFetchRegion(pais);

    return (
        <div id="paises">
            {
                paises.map((pais) => (
                    <PaisItem 
                    key={pais.name}
                    {...pais} />
                ))

            }
        </div>
    );
}