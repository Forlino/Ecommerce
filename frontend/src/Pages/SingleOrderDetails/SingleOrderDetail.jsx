import React, { useEffect } from "react";
import "./SingleOrderDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { singleOrderDetail, clearError } from "../../actions/orderAction";
import Loader from "../../Components/Loader/Loder";
import { useAlert } from "react-alert";


const SingleOrderDetail = () => {
    const { id } = useParams();
    const { order, error, loading } = useSelector((state) => state.singleOrderDetails);

    const dispatch = useDispatch();
    const alert = useAlert();

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearError());
        }

        dispatch(singleOrderDetail(id));
    }, [dispatch, alert, error, id]);
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="orderDetailsPage">
                        <div className="orderDetailsContainer">
                            <Typography component="h1">
                                Pedido #{order && order._id}
                            </Typography>
                            <Typography>Detalles del pedido</Typography>
                            <div className="orderDetailsContainerBox">
                                <div>
                                    <p>Nombre:</p>
                                    <span>{order.userId && order.userId.name}</span>
                                </div>
                                <div>
                                    <p>Telefono:</p>
                                    <span>
                                        {order.shippingInfo && order.shippingInfo.phoneNo}
                                    </span>
                                </div>
                                <div>
                                    <p>Direccion:</p>
                                    <span>
                                        {order.shippingInfo &&
                                            `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pincode}, ${order.shippingInfo.country}`}
                                    </span>
                                </div>
                            </div>
                            <Typography>Pago</Typography>
                            <div className="orderDetailsContainerBox">
                                <div>
                                    <p
                                        className={
                                            order.paymentInfo &&
                                                order.paymentInfo.status === "succeeded"
                                                ? "greenColor"
                                                : "redColor"
                                        }
                                    >
                                        {order.paymentInfo &&
                                            order.paymentInfo.status === "succeeded"
                                            ? "PAID"
                                            : "NOT PAID"}
                                    </p>
                                </div>

                                <div>
                                    <p>Cantidad:</p>
                                    <span>₹{order.totalPrice && (Math.round(order.totalPrice))}</span>
                                </div>
                            </div>

                            <Typography>Estado del pedido</Typography>
                            <div className="orderDetailsContainerBox">
                                <div>
                                    <p
                                        className={
                                            order.orderStatus && order.orderStatus === "Delivered"
                                                ? "greenColor"
                                                : "redColor"
                                        }
                                    >
                                        {order.orderStatus && order.orderStatus}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="orderDetailsCartItems">
                            <Typography>Ordenar artículos:</Typography>
                            <div className="orderDetailsCartItemsContainer">
                                {order.OrderItems &&
                                    order.OrderItems.map((item) => (
                                        <div key={item.product}>
                                            <img src={item.image} alt="Product" />
                                            <Link to={`/product/${item.productId}`}>
                                                {item.name}
                                            </Link>{" "}
                                            <span>
                                                {item.quantity} X ₹{item.price} ={" "}
                                                <b>₹{item.price * item.quantity}</b>
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default SingleOrderDetail
