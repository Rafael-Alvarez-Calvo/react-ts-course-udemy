import { useState } from 'react';
import { Guitar } from './components/Guitar';
import Header from './components/Header';
import { useDatabase } from './hooks/useDatabase';
import { useCart } from './hooks/useCart';

function App() {

  const { cart, setCart, addToCart, deleteItemFromCart, substractItemFromCart, sumItemToCart, isEmptyCart, total } = useCart();

  const { db } = useDatabase();

  return (
    <>
      <Header 
        cart={cart} 
        setCart={setCart} 
        deleteItemFromCart={deleteItemFromCart} 
        substractItemFromCart={substractItemFromCart} 
        sumItemToCart={sumItemToCart}
        isEmptyCart={isEmptyCart}
        total={total}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {db.map(guitar => (
            <Guitar key={guitar.id} guitarData={guitar} addToCart={addToCart}/>
          )
          )}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
