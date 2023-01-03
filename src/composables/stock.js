export const trackProductStock = () => {

  const stockUpdates = (num) => {

    let stock = Number(num)

    if(stock === null) { return ''}

    if(stock <= 30 && stock >= 1) {
      return `HURRY UP ONlY ${stock} OF THEM ARE LEFT`
    }
    if(stock === 0) {
      return `OUT OF STOCK !`
    }
  }

  return { stockUpdates }
}
