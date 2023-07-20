const input1 = document.querySelector('.text1')
const input2 = document.querySelector('.text2')
const done = document.querySelector('.btn1')
const holder = document.getElementById('screen')
let answer = 0
done.onclick = function compare () {
  const result1 = input1.value.split('')
  const result2 = input2.value.split('')
  const map = {}
  if (result1.length === result2.length) {
    for (let i = 0; i < result1.length; i++) {
      if (map[result1[i]] === undefined) {
        map[result1[i]] = result2[i]
        answer = true
      } else if (map[result1[i]] !== result2[i]) {
        answer = false
      }
    }
    if (answer !== true) {
      holder.innerHTML = 'Not isomorphic'
    } else {
      holder.innerHTML = 'Isomorphic'
    }
  } else {
    holder.innerHTML = 'Input strings of the same length'
  }
}
