import React from "react";

export default function Hero(props) {
  return (
    <section className="hero">
      <img src="/images/photo-grid.png" className="hero--img" />
      <h1 className="hero--header">{props.title}</h1>
      <p className="hero--text">
        Join unique iteractive activities led by one-of-a-kind hosts without
        leaving home.
      </p>
    </section>
  );
}
