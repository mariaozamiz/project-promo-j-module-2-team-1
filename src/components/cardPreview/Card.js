import React from "react";
import ListIcons from "./ListIcons";
import "../../stylesheets/layout/cardPreview/card.scss";

function Card(props) {
  return (
    <div className={`card`}>
      <div className={`card__id${props.data.pallete || 1}`}>
        <h3 className="card__id_name">
          {props.data.name || "Nombre y Apellidos"}
        </h3>
        <p className="card__id_role">
          {props.data.job || "Front End Developer"}
        </p>
      </div>
      <div
        className={`profile card__photo${props.data.pallete || 1}`}
        style={{ backgroundImage: `url(${props.data.photo})` }}
      >
        <div className="profile__image "></div>
      </div>
      <div className="card__contacts">
        <ul>
          <ListIcons
            colorPallete={props.data.pallete}
            icon="fas fa-mobile-alt"
            iconClass="telephone"
            link={`tel:+34${props.data.phone}`}
            openOutside={props.openOutside}
            data={props.data}
          />
          <ListIcons
            colorPallete={props.data.pallete}
            icon="far fa-envelope"
            iconClass="email"
            link={`mailto: ${props.data.email}`}
            openOutside={props.openOutside}
            data={props.data}
          />
          <ListIcons
            colorPallete={props.data.pallete}
            icon="fab fa-linkedin-in"
            iconClass="linkedin"
            link={`https://www.linkedin.com/in/${props.data.linkedin}`}
            openOutside={props.openOutside}
            data={props.data}
          />
          <ListIcons
            colorPallete={props.data.pallete}
            icon="fab fa-github-alt"
            iconClass="github"
            link={`https://github.com/${props.data.github}`}
            openOutside={props.openOutside}
            data={props.data}
          />
        </ul>
      </div>
    </div>
  );
}

export default Card;
