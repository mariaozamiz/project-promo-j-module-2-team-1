import React from 'react';
import PropTypes from 'prop-types';

function Palette(props) {
    console.log(`el numero que viene por palletes es ${props.number}`);
    const renderPaletteDivs = () => {
        return props.colors.map((color, index) => {
            return <div key={index} className={color}></div>;
        });
    };

    /*const changeHandler = (ev) => {
        props.changeHandler({
            attr: 'palette',
            value: parseInt(ev.target.value),
        });
    };*/

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
                    onChange={props.changeHandler}
                    name="palette"
                    className="js-palette" //estas clases nos las tenemos que cargar, dice Miguel
                />
                {renderPaletteDivs(props)}
            </label>
        </>
    );
}

// Palette.propTypes = {
//     value: PropTypes.number,
// };

export default Palette;
