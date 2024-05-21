import { useState, useEffect } from 'react';

export const Cart = ({ cart, setCart }) => {

    const [total, setTotal] = useState(0);

    const isEmptyCart = cart.length === 0;

    useEffect(() => {
        
        if(cart.length)
            setTotal(cart.reduce((total, item) => total + (item.price * item.quantity), 0))
        
    }, [cart])
    

    const deleteItemFromCart = (event, idItem, clearAll) =>{
        event.preventDefault();
        let newCart = [];

        if(idItem)
           newCart = cart.filter(item => item.id !== idItem);

        clearAll && setCart([]);
        clearAll || setCart(newCart);

    };
    
    const substractItemFromCart = (event, index) =>{
        event.preventDefault();
        const newCart = [...cart];
        
        newCart[index].quantity--;

        newCart[index].quantity <= 0 && deleteItemFromCart(event, newCart[index].id, false);

        newCart[index].quantity > 0 && setCart(newCart);

    };
    
    const sumItemToCart = (event, index) =>{
        event.preventDefault();
        const newCart = [...cart];

        newCart[index].quantity++;

        setCart(newCart);

    };

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
                                {cart.map((item, index) => {
                                    const { id, name, image, price, quantity } = item;
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
                                            </td>
                                            <td>{name}</td>
                                            <td className="fw-bold">{price}€</td>
                                            <td className="flex align-items-start gap-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                    onClick={(event) => substractItemFromCart(event, index)}
                                                >-</button>

                                                <span>{quantity}</span>

                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                    onClick={(event) => sumItemToCart(event, index)}
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" type="button" onClick={(event) => deleteItemFromCart(event, id, false)}>
                                                    X
                                                </button>
                                            </td>
                                            <td>{price * quantity}€</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                        <p className="text-end">Total pagar: <span className="fw-bold">{total}€</span></p>
                        <button className="btn btn-dark w-100 mt-3 p-2" onClick={(event) => deleteItemFromCart(event, null, true)}>Vaciar Carrito</button>
                    </>
                )
            }

        </div>
    )
}
