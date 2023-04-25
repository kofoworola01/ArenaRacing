import React from 'react'
import moment from 'moment/moment';

import './card.css'

const Card = ({
  title,
  date,
  description,
  image,
  showFullDescriptionHandler,
  isselected
}) => {

  const data = isselected
    ? description
    : description
      .slice(0, 150);

  return (
    <>
      <div className='card'>
        <img src={image} alt="img" />
        <div className='card-details'>
          <h1 className="title">{title}</h1>
          <p className='date'>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</p>
          {
            <div
              dangerouslySetInnerHTML={{ __html: data.replace(/&lt;/g, '<').replace(/&gt;/g, '>') }}
              className="description">
            </div>
          }
          <p className='read-more' onClick={showFullDescriptionHandler}>
            Read {isselected ? "Less" : "More"}
          </p>
        </div>
      </div>
    </>
  )
}

export default Card