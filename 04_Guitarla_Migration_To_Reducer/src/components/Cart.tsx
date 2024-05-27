import { useMemo } from "react";
import { TCartProps } from "../types/types";

export const Cart = ({ cart, dispatch } : TCartProps) => {

    const isEmptyCart = useMemo(() => cart.length === 0, [cart]);
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart]);

    return (
        <div id="carrito" className="bg-white p-3">
            { isEmptyCart 
                ? (<p className="text-center mb-0">El carrito está vacio</p>)
                :(
                    <>
                        <p className="text-center">{`${cart.length} elemento/s seleccionado/s`}</p>
                        <table className="w-100 table">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => {
                                    const { id, name, image, price, quantity } = item;
                                    return (
                                        <tr key={id}>
                                            <td>
                                                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
                                            </td>
                                            <td>{name}</td>
                                            <td className="fw-bold">{price}€</td>
                                            <td className="flex align-items-start gap-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                    onClick={() => dispatch({type: "substract-from-cart", payload: {id: item.id}})}
                                                >-</button>

                                                <span>{quantity}</span>

                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                    onClick={() => dispatch({type: "add-to-cart", payload: {item}})}
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" type="button" onClick={() => dispatch({type: "remove-from-cart", payload: {id: item.id}})}>
                                                    X
                                                </button>
                                            </td>
                                            <td>{price * quantity}€</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                        <p className="text-end">Total pagar: <span className="fw-bold">{cartTotal}€</span></p>
                        <button className="btn btn-dark w-100 mt-3 p-2" onClick={() => dispatch({type: "remove-from-cart", payload: {id: -1 }})}>Vaciar Carrito</button>
                    </>
                )
            }

        </div>
    )
}
