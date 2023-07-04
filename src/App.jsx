import Tours from './Tours';
import Loading from './Loading';
const url = 'https://course-api.com/react-tours-project';
import { useState, useEffect } from 'react';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, SetIsError] = useState(false);
  const [tours, setTours] = useState([]);
  const removeCard = (id) => {
    const newCard = tours.filter((tour) => tour.id !== id);
    setTours(newCard);
  };
  const getTours = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setTours(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getTours();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return;
  }
  return (
    <main>
      {!tours[0] ? (
        <div className="title">
          <h2> No tour left</h2>
          <button className="btn" onClick={getTours}>
            Reload Tour
          </button>
        </div>
      ) : (
        <Tours tours={tours} removeCard={removeCard} />
      )}
    </main>
  );
};

export default App;
