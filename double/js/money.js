export default function Money(n) {
  // n = parseFloat(n);
  return "R$ " + n.toFixed(2).replace(".", ",");
}
