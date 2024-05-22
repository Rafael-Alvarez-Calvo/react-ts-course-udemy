export const Cart = ({
        cart, 
        deleteItemFromCart, 
        substractItemFromCart, 
        sumItemToCart, 
        isEmptyCart, 
        total
    } : TCartProps) => {

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
                                                    onClick={() => substractItemFromCart(index)}
                                                >-</button>

                                                <span>{quantity}</span>

                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                    onClick={() => sumItemToCart(index)}
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" type="button" onClick={() => deleteItemFromCart(id, false)}>
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
                        <button className="btn btn-dark w-100 mt-3 p-2" onClick={() => deleteItemFromCart(-1, true)}>Vaciar Carrito</button>
                    </>
                )
            }

        </div>
    )
}
