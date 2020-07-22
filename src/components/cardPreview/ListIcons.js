import React from 'react';

function ListIcons() {
  return (
    <div className='card__contacts'>
      <ul className='js-contact__list'>
        <li className='contact__icon js-telephone hidden'>
          <i
            className='fas fa-mobile-alt js-icon-telephone'
            aria-hidden='true'
          ></i>
        </li>
        <li className='contact__icon js-email hidden'>
          <a className='js-icon-email' target='_blank'>
            <i className='far fa-envelope' aria-hidden='true'></i>
          </a>
        </li>
        <li className='contact__icon js-linkedin hidden'>
          <a href='' className='js-icon-linkedin' target='_blank'>
            <i
              className='fab fa-linkedin-in js-icon-linkedin'
              aria-hidden='true'
            ></i>
          </a>
        </li>
        <li className='contact__icon js-github hidden'>
          <a href='' className='js-icon-github' target='_blank'>
            <i
              className='fab fa-github-alt js-icon-github'
              aria-hidden='true'
            ></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ListIcons;
