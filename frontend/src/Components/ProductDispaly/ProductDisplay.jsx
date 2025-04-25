import React from 'react'
import './ProductDispaly.css'
import ProductCard from '../ProductCard/ProductCard'
import Loader from '../Loader/Loder';

// const product = {
//     name:"Blue T-Shirt",
//     images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
//     price:200,
//     _id:"forlino"
// }

const ProductDisplay = ({ loading, error, product }) => {
  console.log(product)
  return (

    <div className='product-section' id='product-section'>
      <div className="product-container">
        <div className="heading">
          <h2>Mas vistos</h2>
        </div>
        {
          loading
            ? <Loader />
            : <div className="content">
              {
                product && product.map((item) => {
                  return (
                    <ProductCard item={item} key={item._id} />
                  )
                })
              }

            </div>
        }
      </div>
    </div>
  )
}

export default ProductDisplay
