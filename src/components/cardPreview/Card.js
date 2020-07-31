import React from 'react';
import ListIcons from './ListIcons';

function Card(props) {
  return (
    <div className={`card card_id${props.data.palette}`}>
      <div className='card__id'>
        <h3 className='card__id_name js-card-name'>
          {props.data.name || 'Nombre y Apellidos'}
        </h3>
        <p className='card__id_role js-card-job'>
          {props.data.job || 'Front End Developer'}
        </p>
      </div>
      <div className='profile card__photo js-card-photo'>
        <div className='profile__image js__profile-image'></div>
      </div>
      <div className='card__contacts'>
        <ul className='js-contact__list'>
          <ListIcons
            name='js-telephone'
            hidden=''
            icon='fas fa-mobile-alt'
            iconClass='telephone'
            link={`tel:+34${props.data.phone}`}
          />
          <ListIcons
            name='js-email'
            hidden=''
            icon='far fa-envelope'
            iconClass='email'
            link={`mailto: ${props.data.email}`}
          />
          <ListIcons
            name='js-linkedin'
            hidden=''
            icon='fab fa-linkedin-in'
            iconClass='linkedin'
            link={`https://www.linkedin.com/in${props.data.linkedin}`}
          />
          <ListIcons
            name='js-github'
            hidden=''
            icon='fab fa-github-alt'
            iconClass='github'
            link={`https://github.com/${props.data.github}`}
          />
        </ul>
      </div>
    </div>
  );
}

export default Card;
