import React from "react";

export default function Card(props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <img src={`/images/${props.coverImg}`} className="card__img-main" />
      <div className="card__flex">
        <img src="/images/star.png" className="card__star" />
        <span className="card__rate-number">{props.stats.rating}</span>
        <span className="card__text-light">({props.stats.reviewCount})</span>
        <span className="card__text-light">.</span>
        <span className="card__text-light">{props.location}</span>
      </div>
      <p className="card__description">{props.title}</p>
      <strong className="card__price-tag">
        From ${props.price} <span className="card__text-light2">/ person</span>
      </strong>
    </div>
  );
}
