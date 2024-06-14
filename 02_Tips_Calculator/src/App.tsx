import { MenuItem } from "./components/MenuItem"
import { useData } from "./hooks/useData";
import useOrder from "./hooks/useOrder";
import { Order } from "./components/Order/Order";

export default function App() {

  const { menuItems } = useData();

  const { order, tip, setTip, addItem, deleteOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl pb-2 font-semibold text-white">Calculadora de propinas</h1>
      </header>

      <main className="max-w-7xl mx-auto pt-10 grid md:grid-cols-2">
        <div className="flex flex-col items-center justify-start mr-5">
          <h2 className="bg-teal-400 text-white w-full text-center p-3 rounded-tl-lg rounded-tr-lg font-semibold text-2xl">Menú</h2>

          <div className="w-full border-b-2 border-b-teal-400 rounded-bl-lg rounded-br-lg">
            {menuItems.map(item => <MenuItem key={item.id} item={item} addItem={addItem}/>)}
          </div>
        </div>

        <div className="flex flex-col border border-teal-400 rounded-lg ml-5">
          <Order order={order} deleteOrder={deleteOrder} tip={tip} setTip={setTip}/>
        </div>
      </main>
    </>
  )
}