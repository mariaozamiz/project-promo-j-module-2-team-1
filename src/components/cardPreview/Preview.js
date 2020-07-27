import React from 'react';
import ButtonReset from './ButtonReset';
import Card from './Card'; 

function Preview(props) {
  return (
    <section className='preview'>
      <div className='preview__wrapper'>
        <ButtonReset />
        <Card data={props.data}/>
      </div>
    </section>
  );
}

export default Preview;
