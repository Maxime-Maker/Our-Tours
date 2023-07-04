import { useState } from 'react';

const Tour = ({ card, removeCard }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img className="img" src={card.image} alt="" />
      <footer></footer>
      <div className="tour-info">
        <h4 className="tour-price">{card.price}</h4>
        <h4></h4>
      </div>
      <p>
        {card.info.substring(1, 200)}...
        <button onClick={() => setReadMore(!readMore)} className="info-btn">
          {!readMore ? ' Read More' : 'Read Less'}
        </button>
      </p>

      <button
        onClick={() => removeCard(card.id)}
        className="delete-btn btn-block btn"
      >
        Not Interested
      </button>
    </article>
  );
};
export default Tour;
