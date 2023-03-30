import React from 'react';

const Card = ({ imgUrl, removeCard, getRandomDate, setLike}) => {

  return (
    <div className="card">
      <div className="img">
          <span className="close" onClick={() => removeCard(imgUrl)}>&times;</span>
          <img src={imgUrl} alt="cats" />
      </div>
      <div className="title">
          <div className="date">
              {getRandomDate(new Date(2012, 0, 1), new Date())}
          </div>
          <div className="like">
            <svg onClick={(e) => setLike(e)} className='likeSvg' width="25" height="25" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4375 8.71875H17.9375C17.9375 6.42181 18.8788 4.41105 20.3606 2.92803C21.8914 1.43973 23.9051 0.5 26.1562 0.5C28.4532 0.5 30.4639 1.44129 31.947 2.92314C33.4353 4.45389 34.375 6.46764 34.375 8.71875C34.375 11.017 33.4327 13.0287 31.9494 14.5119L17.4375 29.0238L2.92806 14.5144C1.43974 12.9836 0.5 10.9699 0.5 8.71875C0.5 6.4218 1.4413 4.41103 2.92316 2.92801C4.45391 1.43972 6.46765 0.5 8.71875 0.5C11.0157 0.5 13.0264 1.44129 14.5095 2.92314C15.9978 4.45389 16.9375 6.46764 16.9375 8.71875H17.4375Z" fill="white" stroke="#FF0000"/>
            </svg>
          </div>
      </div>
    </div>
  );
};

export default Card;