import React from 'react';

function Pallete(props) {
  const getPalleteValue = (ev) => {
    const value = ev.target.value;
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
          type='radio'
          value={props.number}
          checked=''
          onChange={getPalleteValue}
          name='palette'
          className='js-palette' //estas clases nos las tenemos que cargar, dice Miguel
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
