function mergeSort(array) {
  function merge(left, right) {
    let smallest, sorted = []

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        smallest = left.shift()
      } else {
        smallest = right.shift()
      }

      sorted.push(smallest)
    }

    return sorted.concat(left, right)
  }

  if (array.length < 2) return array

  let left = mergeSort(array.slice(0, array.length / 2))
  let right = mergeSort(array.slice(array.length / 2))

  return merge(left, right)
}

// tests

console.log(mergeSort([])) // []
console.log(mergeSort([2, 11, 5, 9, 23])) // [2, 5, 9, 11, 23]