import { useState, useEffect } from "react";

import "./BubbleSort.css";

const getRandomArray = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function BubbleSort() {
  const [bubbleArray, setBubbleArray] = useState([]);

  useEffect(() => {
    getArray();
  }, []);

  const bubbleSort = (bubbleArray) => {
    let sortedArray = [...bubbleArray];
    for (let i = 0; i < sortedArray.length; i++) {
      for (let j = 0; j < sortedArray.length - i - 1; j++) {
        setTimeout(() => {
          if (sortedArray[j] > sortedArray[j + 1]) {
            let temp = sortedArray[j];
            sortedArray[j] = sortedArray[j + 1];
            sortedArray[j + 1] = temp;
          }
          setBubbleArray([...sortedArray]);
        }, 1000);
      }
    }
  };

  const getArray = () => {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array[i] = getRandomArray(20, 500);
    }
    setBubbleArray(array);
  };

  return (
    <div className="bubble-sort">
      <button onClick={() => bubbleSort(bubbleArray)}>SORT</button>
      {bubbleArray.map((elem, index) => (
        <div
          key={index}
          className="array-bar"
          style={{ height: `${elem}px` }}
        ></div>
      ))}
    </div>
  );
}

export default BubbleSort;
