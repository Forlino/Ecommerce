import React, { useEffect, useState } from 'react'
import './Filteration.css'
import Slider from '@mui/material/Slider';
// import ReactStars from 'react-rating-stars-component'

const Filteration = ({ price, setPrice, category, setCategory, ratings, setRatings }) => {

  const handlePriceChange = (e, newPrice) => {
    setPrice(newPrice);
  };
  const handleRatingChange = (e, newRating) => {
    setRatings(newRating);
  };
  // const [options, setOptions] = useState({
  //   edit: false,
  //   color: "#e5ddd3",
  //   activeColor: "tomato",
  //   size: window.innerWidth < 600 ? 20 : 25,
  //   value: ratings,
  //   isHalf: true,
  //   onChange: handleRatingChange
  // });
  // useEffect(() => {
  //   // Update options object whenever ratings change
  //   setOptions(prevOptions => ({
  //     ...prevOptions,
  //     value: ratings
  //   }));

  //   // Perform any other logic that depends on ratings change
  //   console.log("Rating changed:", ratings);
  // }, [ratings]); // Trigger effect whenever ratings changes

  return (
    <div className='filteration-section' style={{ minHeight: "40vh" }}>
      <div className="container">
        <div className="price-filter flex">
          <span className='top-text'>Price</span>
          <span className='top-text'>&#8377;{price[0]} - &#8377;{price[1]}</span>
          <Slider
            value={price}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={200}
            max={10000}
            aria-labelledby='range-slider'
          />
        </div>
        <div className="category-filter flex">
          <span className='top-text'>Category</span>
          <ul className='category-list'>
            <li
              className={category === "Laptop" ? "bold" : ""}
              onClick={() => setCategory("Laptop")}
            >Laptop</li>
            <li
              className={category === "Footwear" ? "bold" : ""}
              onClick={() => setCategory("Footwear")}
            >Footwear</li>
            <li

              className={category === "Bottom" ? "bold" : ""}
              onClick={() => setCategory("Bottom")}
            >Bottom</li>
            <li
              className={category === "Top" ? "bold" : ""}
              onClick={() => setCategory("Top")}
            >Top</li>
            <li
              className={category === "Pant" ? "bold" : ""}
              onClick={() => setCategory("Pant")}
            >Pant</li>
            <li
              className={category === "T-Shirt" ? "bold" : ""}
              onClick={() => setCategory("T-Shirt")}
            >T-Shirt</li>
            <li
              className={category === "A.C" ? "bold" : ""}
              onClick={() => setCategory("A.C")}
            >A.C</li>
            <li
              className={category === "Refrigrator" ? "bold" : ""}
              onClick={() => setCategory("Refrigrator")}
            >Refrigrator</li>
            <li
              className={category === "Camera" ? "bold" : ""}
              onClick={() => setCategory("Camera")}
            >Camera</li>
            <li
              className={category === "Cooler" ? "bold" : ""}
              onClick={() => setCategory("Cooler")}
            >Cooler</li>
          </ul>
        </div>
        <div className="review-filter flex">
          <span className={`top-text ${ratings === 0 ? "" : "marginBottom"}`}

          >Reseñas de clientes
          </span>
          {/* <span className='top-text'>
            {ratings && <ReactStars {...options} />}
          </span> */}
          <Slider
            value={ratings}
            onChange={handleRatingChange}
            valueLabelDisplay={ratings === 0 ? "auto" : "on"}
            min={0}
            max={5}
            aria-labelledby='range-slider'
          />
        </div>
        <div className="discount-filter flex">
          <span className='top-text'>Descuento</span>
          <ul className='category-list'>
            <li>10% de descuento</li>
            <li>25% de descuento</li>
            <li>30% de descuento</li>
            <li>35% de descuento</li>
            <li>50% de descuento</li>
            <li>60% de descuento</li>
            <li>70% de descuento</li>
            <li>80% de descuento</li>
            <li>90% de descuento</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Filteration
