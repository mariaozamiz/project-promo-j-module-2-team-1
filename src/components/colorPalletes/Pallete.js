import React from 'react';

function Pallete(props) {
    const renderPaletteDivs = () => {
        return props.colors.map((color, index) => {
            return <div key={index} className={color}></div>;
        });
    };

    const getPalleteValue = (ev) => {
        const value = parseInt(ev.target.value);
        const attr = ev.target.name;
        props.inputValue({
            attr: attr,
            value: value,
        });
    };

    return (
        <>
            <label
                className={`palette-${props.number}`}
                htmlFor={`palette-${props.number}`}
            >
                <input
                    id={`palette-${props.number}`}
                    type="radio"
                    value={props.number}
                    defaultChecked={props.checked}
                    // defaultValue={1}
                    onChange={getPalleteValue}
                    name="pallete"
                    className="js-palette" //estas clases nos las tenemos que cargar, dice Miguel
                />
                {renderPaletteDivs(props)}
            </label>
        </>
    );
}

export default Pallete;
