export function useCalculateDiscount(price, discont_price) {
  if (price <= 0 || discont_price <= 0) {
    return "";
  }
  const discount = ((price - discont_price) / price) * 100;
  return Math.round(discount * 10) / 10;
}
