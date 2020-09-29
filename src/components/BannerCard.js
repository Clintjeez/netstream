import React from "react";

import "./BannerCard.css";

function BannerCard({ CardPoster, CardTitle, CardDescription }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="banner__card">
      <div className="grid__wrapper">
        <div className="banner__card__img__wrapper">
          <img
            className="banner__card__img"
            src={CardPoster}
            alt="movie poster"
          />
        </div>
        <div className="banner__card__contents">
          <h2 className="banner__card__title"> {CardTitle}</h2>
          <div className="banner__card__btn_wrapper">
            <button className="banner__card__btn">Play</button>
            <button className="banner__card__btn">Watch list</button>
          </div>
        </div>
      </div>

      <div className="banner__card__description__wrapper">
        <p className="banner__card__description">
          {truncate(CardDescription, 150)}
        </p>
      </div>
    </div>
  );
}

export default BannerCard;
