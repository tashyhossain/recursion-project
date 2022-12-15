function mergeSort(array) {
  function merge(left, right) {
    let current, sorted = []

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        current = left.shift()
      } else {
        current = right.shift()
      }

      sorted.push(current)
    }

    return sorted.concat(left, right)
  }

  if (array.length < 2) return array

  let left = mergeSort(array.slice(0, array.length / 2))
  let right = mergeSort(array.slice(array.length / 2))

  return merge(left, right)
}