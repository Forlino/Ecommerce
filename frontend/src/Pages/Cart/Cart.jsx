import React, { useEffect } from 'react'
import './Cart.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeFromCart } from '../../actions/cartAction';
import { useAlert } from 'react-alert'
import { MdRemoveShoppingCart } from "react-icons/md";
import Cookies from 'js-cookie';

const Cart = () => {
    const navigate = useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart);


    const increseQunatity = (id, quantity, Stock) => {
        const newQuantity = quantity + 1;
        if (Stock <= quantity) return;
        dispatch(addItemToCart(id, newQuantity))
    }
    const decreaseQunatity = (id, quantity) => {
        const newQuantity = quantity - 1;
        if (1 >= quantity) return;
        dispatch(addItemToCart(id, newQuantity))
    }

    const removeItemFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
        alert.success("Product Remove From Cart");
    }

    const checkOutHandler = () => {
        const token = Cookies.get('token'); // कुकीज़ से टोकन प्राप्त करें
        if (token) {
            navigate("/shipping");
        } else {
            navigate("/auth?redirect=/shipping");
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {
                cartItems && cartItems.length === 0
                    ? <div className="cart-empty">
                        <MdRemoveShoppingCart className='icon' />
                        <span>No hay productos en el carrito</span>
                        <Link to={'/products'}>
                            <button>Agregar Productos</button>
                        </Link>
                    </div>
                    : <section className="cart-section">
                        <div className="cart-container">
                            <div className="cart-header">
                                <ul>
                                    <li>Producto</li>
                                    <li>Cantidad</li>
                                    <li>Total</li>
                                </ul>
                            </div>
                            <div className='cart-items'>
                                {
                                    cartItems && cartItems.map((item, index) => {
                                        return (
                                            <div className="cart-content" key={index}>
                                                <div className='product-detail'>
                                                    <Link to={`/product/${item.id}`}>
                                                        <img src={item.image} alt="" />
                                                    </Link>
                                                    <div className="product-info-text">
                                                        <Link to={`/product/${item.id}`}>
                                                            <span className="product-name">
                                                                {item.name}
                                                            </span>
                                                        </Link>
                                                        <span className="price-tag center">
                                                            <span className="price-text">
                                                                <b>Precio:</b>
                                                            </span>
                                                            <span className="price-num">
                                                                ₹{item.price}
                                                            </span>
                                                        </span>
                                                        <span className="price-tag center">
                                                            <span className="price-text">
                                                                <b>Cantidad:</b>
                                                            </span>
                                                            <span className="price-num">
                                                                {item.quantity}
                                                            </span>
                                                        </span>
                                                        <span
                                                            className="remove-product center"
                                                            onClick={() => removeItemFromCartHandler(
                                                                item.productId
                                                            )}
                                                        >
                                                            <span className="remove-text"
                                                            >Eliminar
                                                            </span>
                                                            <FaTrashAlt className='icon' />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="counter">
                                                    <div>
                                                        <button
                                                            className='cnt'
                                                            onClick={() => {
                                                                decreaseQunatity(item.id, item.quantity)
                                                            }}>-</button>
                                                        <p>{item.quantity}</p>
                                                        <button
                                                            className='cnt cnt-cart'
                                                            onClick={() => {
                                                                increseQunatity(item.id,
                                                                    item.quantity,
                                                                    item.Stock
                                                                )
                                                            }}>+</button>
                                                    </div>
                                                </div>
                                                <div className='subtotal-text'>
                                                    ₹{
                                                        item.quantity * item.price
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="grandtotal-container">
                                <div className="grand-total">
                                    <span><b>Total Bruto</b></span>
                                    <span>₹{
                                        cartItems.reduce((acc, item) => {
                                            return acc + (item.price * item.quantity);
                                        }, 0)
                                    }</span>
                                </div>
                                <button
                                    onClick={checkOutHandler}
                                    className='check-out'
                                >Verificar
                                </button>
                            </div>
                        </div>
                    </section>
            }

        </>
    )
}

export default Cart
