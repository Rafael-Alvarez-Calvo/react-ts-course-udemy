
export const Guitar = ({guitarData, cart, setCart}) => {

    const {id, name, image, description, price} = guitarData;

    const addToCart = (event, guitarData) =>{

        event.preventDefault();

        const itemAlreadyExistsIndex = cart.findIndex(item => item.id === id);
        
        if(itemAlreadyExistsIndex > -1){

            const updatedCart = [...cart];
            updatedCart[itemAlreadyExistsIndex].quantity++

            setCart(updatedCart);

        }else{
            guitarData.quantity = 1;
            setCart([...cart, guitarData]);
        }

    }

    return (
        <div id={name} className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt={`imagen de guitarra - ${name}`} />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">{price}€</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={(event) => addToCart(event, guitarData)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}
