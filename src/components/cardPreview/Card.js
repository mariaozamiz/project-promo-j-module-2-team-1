import React from 'react';
import ListIcons from './ListIcons';

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
      <div className='card__contacts'>
        <ul className='js-contact__list'>
          <ListIcons name="js-telephone" hidden='' icon='fas fa-mobile-alt' iconClass='telephone' link=''/>
          <ListIcons name="js-email" hidden='' icon='far fa-envelope' iconClass='email' link=''/>
          <ListIcons name="js-linkedin" hidden='' icon='fab fa-linkedin-in' iconClass='linkedin' link=''/>
          <ListIcons name="js-github" hidden='' icon='fab fa-github-alt' iconClass='github' link='' />
        </ul>
    </div>
    </div>
  );
}

export default Card;
