export default function formatCurrency(quantity: number) {

  return new Intl.NumberFormat("es-eu" , {
    style: 'currency', currency: 'EUR'
  }).format(quantity)

}
