function fibsRec(n) {
  return (n < 2) ? n : fibsRec(n - 2) + fibsRec(n - 1)
}

function fibsMemo(n, memory = {}) {
  if (memory[n]) return memory[n]
  if (n < 2) return memory[n] = n

  memory[n] = fibsMemo(n - 2, memory) + fibsMemo(n - 1, memory) 
  console.log(memory) 
  return memory[n]
}

