export const priceFormatter = () => {

  const formatting = (num) => {
    let  str = num.toString().split('.');

    if (str[0].length >= 3) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 3) {
      str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }

    return str.join('.');
  }

  return { formatting }
}
