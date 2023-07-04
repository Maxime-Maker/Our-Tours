import Tour from './Tour.jsx';

const Tours = ({ tours, removeCard }) => {
  return (
    <section>
      <div className="title">
        <h2>Ours Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((card) => {
          const { id } = card;
          return <Tour card={card} removeCard={removeCard} key={id} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
