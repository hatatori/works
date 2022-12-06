function Money(value) {
  return "R$ " + value.toFixed(2).replace(/\./g, ",");
}
export default Money;
