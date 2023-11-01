import React from 'react';
import './card.css';
import logo from '../../assets/common/logo.svg';
import starIcon from '../../assets/common/star.svg';
import kebabIcon from '../../assets/common/kebab.svg';
import calcCreateTime from '../../utils/calcCreateTime';

function Card({ linkInfo }) {
  const createdAt = new Date(linkInfo?.created_at);
  const formattedTime = calcCreateTime(createdAt);

  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const date = createdAt.getDate();

  return (
    <div className="card">
      <img src={starIcon} alt="star-icon" className="star-icon" />
      <img src={kebabIcon} alt="kebab-icon" className="kebab-icon" />
      <a
        href={`${linkInfo.url}`}
        className="card-link"
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={
            linkInfo?.image_source
              ? 'card-img-section'
              : 'card-img-section card-empty'
          }
        >
          <img
            src={linkInfo?.image_source ?? logo}
            className={linkInfo?.image_source ? 'link-img' : 'link-img-empty'}
            alt="cat"
          />
        </div>
        <div className="card-text-section">
          <p className="time-stamp">{formattedTime}</p>
          <p className="introduce-text">
            Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
            consequat. Tldkd
          </p>
          <p className="created-date">{`${year}. ${month}. ${date}`}</p>
        </div>
      </a>
    </div>
  );
}

export default Card;
