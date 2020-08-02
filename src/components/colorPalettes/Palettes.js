import React from 'react';
import Palette from './Palette';

const colorPalettes = [
    ['color-cold-1', 'color-cold-2', 'color-cold-3'],
    ['color-warm-1', 'color-warm-2', 'color-warm-3'],
    ['color-neutral-1', 'color-neutral-2', 'color-neutral-3'],
];

function Palettes(props) {
    function renderPalettes() {
        return colorPalettes.map((element, index) => {
            return (
                <Palette
                    key={index}
                    number={index + 1}
                    colors={element}
                    checked={index + 1 === props.selectedPalette}
                    changeHandler={props.changeHandler}
                />
            );
        });
    }

    return (
        <>
            <div className="collapsible__content">
                <legend>Colores</legend>
                {renderPalettes()}
            </div>
        </>
    );
}
//borré la clase hidden del className="collapsible__content"
export default Palettes;
