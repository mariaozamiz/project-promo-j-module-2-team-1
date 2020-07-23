import React from 'react';

function Palletes() {
    return (
        <>
            <div className="collapsible__content">
                <legend>Colores</legend>
                <label className="palette-1" htmlFor="palette-1">
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
                </label>
                <label className="palette-2" htmlFor="palette-2">
                    <input
                        id="palette-2"
                        type="radio"
                        value="2"
                        name="color-palettes"
                        className="js-palette"
                    />
                    <div className="color-warm-1"></div>
                    <div className="color-warm-2"></div>
                    <div className="color-warm-3"></div>
                </label>
                <label className="palette-3" htmlFor="palette-3">
                    <input
                        id="palette-3"
                        type="radio"
                        value="3"
                        name="color-palettes"
                        className="js-palette"
                    />
                    <div className="color-neutral-1"></div>
                    <div className="color-neutral-2"></div>
                    <div className="color-neutral-3"></div>
                </label>
            </div>
        </>
    );
}

export default Palletes;
