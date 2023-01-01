export const trackProductStock = () => {

  const stockUpdates = (stock) => {

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
