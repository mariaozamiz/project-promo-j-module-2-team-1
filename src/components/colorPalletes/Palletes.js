import React from "react";
import Pallete from "./Pallete";
import "../../stylesheets/layout/colorPalletes/colorPalletes.scss";

const colorPalletes = [
  ["color-cold-1", "color-cold-2", "color-cold-3"],
  ["color-warm-1", "color-warm-2", "color-warm-3"],
  ["color-neutral-1", "color-neutral-2", "color-neutral-3"],
];

function Palletes(props) {
  function renderPalletes() {
    return colorPalletes.map((element, index) => {
      return (
        <Pallete
          key={index}
          number={index + 1}
          colors={element}
          checked={index + 1 === props.selectedPallete}
          inputValue={props.inputValue}
        />
      );
    });
  }
  return (
    <>
      <div className={props.isOpen === props.id ? "" : "hidden"}>
        <legend>Colores</legend>
        {renderPalletes()}
      </div>
    </>
  );
}
Palletes.defaultProps = {
  selectedPallete: 1,
};

export default Palletes;
