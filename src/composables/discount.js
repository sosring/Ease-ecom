export const discountValuation = () => {

  const discountedPrice = (discount, price) => { 

    if(discount !== null){
      const discounted = Number(price / discount)

      return Number(price - discounted)
    }
  }

  return { discountedPrice }
}
