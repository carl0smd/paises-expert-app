
import { useState } from 'react';

export const RegionInput = ({onNewPais}) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length === 0) return;
        onNewPais(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmmit(event)}>
            <input
                type="text"
                placeholder="Europe, America, Africa..."
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );

}