function fibs(n) {
  let sequence = []

  for (let i = 0, next; i < n; i++) {
    (i < 2) ? next = i 
            : next = sequence[i - 2] + sequence[i - 1]

    sequence.push(next)
  }

  return sequence
}
