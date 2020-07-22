import React from 'react';
import ListIcons from 'ListIcons';

function Card() {
  return (
    <div className='card'>
      <div className='card__id'>
        <h3 className='card__id_name js-card-name'>Nombre Apellido</h3>
        <p className='card__id_role js-card-job'>Puesto de trabajo</p>
      </div>
      <div className='profile card__photo js-card-photo'>
        <div className='profile__image js__profile-image'></div>
      </div>
      <ListIcons />
    </div>
  );
}

export default Card;
