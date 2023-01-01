export const trackProductStock = () => {

  const stockUpdates = (stock) => {

    if(stock === null) { return ''}

    if(stock < 30) {
      return `HURRY UP ONlY ${stock} OF THEM ARE LEFT`
    }
    else if(stock === 0) {
      return `OUT OF STOCK!`
    }

    return null
  }

  return { stockUpdates }
}
