import React from 'react';

function Pallete(props) {
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
                    checked=""
                    name="color-palettes"
                    className="js-palette" //estas clases nos las tenemos que cargar, dice Miguel
                />
                <div className={props.colors[0]}></div>
                <div className={props.colors[1]}></div>
                <div className={props.colors[2]}></div>
            </label>
        </>
    );
}

export default Pallete;

// EmailItem.defaultProps = {
//   from: 'Remitente desconocido'
// };
