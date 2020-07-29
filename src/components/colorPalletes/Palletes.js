import React from 'react';
import Pallete from './Pallete';

const colorPalletes = [
    ['color-cold-1', 'color-cold-2', 'color-cold-3'],
    ['color-warm-1', 'color-warm-2', 'color-warm-3'],
    ['color-neutral-1', 'color-neutral-2', 'color-neutral-3'],
];

function Palletes() {
    function renderPalletes() {
        return colorPalletes.map((element, index) => {
            return <Pallete key={index} number={index + 1} colors={element} />;
        });
    }

    return (
        <>
            <div className="collapsible__content">
                <legend>Colores</legend>
                {renderPalletes()}
            </div>
        </>
    );
}
//borré la clase hidden del className="collapsible__content"
export default Palletes;
