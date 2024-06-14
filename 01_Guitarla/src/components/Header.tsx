import { Cart } from "./Cart";

export default function Header({
        cart, 
        deleteItemFromCart, 
        substractItemFromCart, 
        sumItemToCart, 
        isEmptyCart, 
        total
    } : TCartProps) {

    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div
                            className="carrito"
                        >
                            <Cart 
                                cart={cart} 
                                deleteItemFromCart={deleteItemFromCart} 
                                substractItemFromCart={substractItemFromCart} 
                                sumItemToCart={sumItemToCart}
                                isEmptyCart={isEmptyCart}
                                total={total}
                            />
                            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}