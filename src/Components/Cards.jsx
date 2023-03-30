import React from 'react';
import Card from './Card';
import {  getRandomDate, setLike } from '../functions';

const Cards = () => {
  const [dogsArr, setDogsArr] = React.useState([])
  
  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/7')
      .then(response => response.json())
      .then(data => {
        setDogsArr(data.message)
      })
  }, [])

  function removeCard(img) {
    let newArr = dogsArr.filter(item => item != img)
    console.log(newArr);
    setDogsArr(newArr)
  }

  return (
    <div className="cards">

    { dogsArr.length ? dogsArr.map((url, keyId) => {
      return <Card
        removeCard={removeCard}
        getRandomDate={getRandomDate}
        setLike={setLike}
        imgUrl={url}
        key={keyId}
      />
    }) :
    <h2>Карточки отсутствуют</h2>}
  </div>
  );
};

export default Cards;