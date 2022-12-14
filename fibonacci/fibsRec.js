function fibsRec(n) {
  return (n < 2) ? n : fibsRec(n - 2) + fibsRec(n - 1)
}
