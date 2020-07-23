import React from 'react';

function Pallete() {
    return (
        <>
            <input
                id="palette-1"
                type="radio"
                value="1"
                name="color-palettes"
                className="js-palette"
            />
            <div className="color-cold-1"></div>
            <div className="color-cold-2"></div>
            <div className="color-cold-3"></div>
        </>
    );
}

export default Pallete;
